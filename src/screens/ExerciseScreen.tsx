import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../CSS/ExerciseCss';
import axios from 'axios'; // Para enviar datos a MySQL
import firestore from '@react-native-firebase/firestore'; // Para interactuar con Firebase
import auth from '@react-native-firebase/auth'; // Para obtener el usuario autenticado

const exercises = [
  { name: 'Plantiflrxión', image: require('../images/Elevaciondetalones.gif'), description: 'Mantén una posición firme. Eleva los talones lentamente, luego bájalos de igual manera. Realiza 15 repeticiones.' },
  { name: 'Dorsiflexión', image: require('../images/Dorsiflexion.gif'), description: 'Mantén una posición firme. Eleva las puntas de los pies lentamente, luego bájalos de igual manera. Realiza 15 repeticiones.' },
  { name: 'Planti- dorsiflexión', image: require('../images/Plantidorciflexion.gif'), description: 'Eleva el pie lesionado y muévelo hacia arriba y hacia abajo. Repite el movimiento 15 veces' },
  { name: 'Eversión- Iversión', image: require('../images/Eversioniversion.gif'), description: 'Eleva el pie lesionado, y mueve hacia los lados. reite el movimiento 15 veces' },
  { name: 'Propiocepción', image: require('../images/Propiocepcion.gif'), description: 'Mantén una posición firme. Eleva el pie sano y mantén el equilibrio sobre el pie lesionado durante 30 segundos.' },
];

const ExerciseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedExercises, setSelectedExercises] = useState<boolean[]>(new Array(exercises.length).fill(false));

  const toggleSelection = (index: number) => {
    const newSelectedExercises = [...selectedExercises];
    newSelectedExercises[index] = !newSelectedExercises[index];
    setSelectedExercises(newSelectedExercises);
  };

  const hasSelectedExercises = selectedExercises.includes(true);

  const handleAssignExercises = async () => {
    const selectedExerciseNames = exercises
      .filter((_, index) => selectedExercises[index])
      .map(exercise => ({ name: exercise.name, description: exercise.description }));

    // Obtener usuario autenticado en Firebase
    const user = auth().currentUser;
    if (!user) {
      Alert.alert('Error', 'No se pudo obtener el usuario autenticado.');
      return;
    }

    try {
      // Guardar en MySQL (a través de tu API)
      await axios.post('https://51ca-152-200-176-25.ngrok-free.app/asignacion', {
        userId: user.uid, // Suponiendo que necesitas pasar el ID del usuario
        exercises: selectedExerciseNames
      });

      // Guardar en Firebase
      await firestore()
        .collection('Usuarios') // Suponiendo que los usuarios están en la colección 'users'
        .doc(user.uid) // Guardar ejercicios bajo el usuario autenticado
        .update({
          ejerciciosAsignados: firestore.FieldValue.arrayUnion(...selectedExerciseNames)
        });

      Alert.alert('Éxito', 'Los ejercicios han sido asignados exitosamente en MySQL y Firebase.');
    } catch (error) {
      console.error('Error al asignar ejercicios:', error);
      Alert.alert('Error', 'Hubo un problema al asignar los ejercicios.');
    }
  };

  const handleViewExercise = (index: number) => {
    const selectedExercise = exercises[index];
    navigation.navigate('ExerciseDetails', { exercise: selectedExercise });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>←</Text>
        </TouchableOpacity>
        <Image source={require('../images/terapp.png')} style={styles.logo} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.welcomeText}>Ejercicios</Text>
        <Text style={styles.description}>
          Seleccione los ejercicios que el paciente necesita para su recuperación y presione el botón 'Asignar ejercicios'.
        </Text>
      </View>
      <View style={styles.exercisesContainer}>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exercise}>
            <FastImage source={exercise.image} style={styles.exerciseImage} />
            <Text style={styles.exerciseText}>{exercise.name}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={selectedExercises[index] ? styles.selectedButton : styles.selectButton}
                onPress={() => toggleSelection(index)}
              >
                <Text style={styles.buttonText}>
                  {selectedExercises[index] ? 'Seleccionado' : 'Seleccionar'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => handleViewExercise(index)}
              >
                <Text style={styles.viewButtonText}>Ver Ejercicio</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      {hasSelectedExercises && (
        <TouchableOpacity style={styles.assignButton} onPress={handleAssignExercises}>
          <Text style={styles.assignButtonText}>Asignar Ejercicios</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default ExerciseScreen;
