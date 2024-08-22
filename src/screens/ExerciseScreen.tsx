import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

const exercises = [
  { name: 'Ejercicio 1', image: require('../images/tobillo.png') },
  { name: 'Ejercicio 2', image: require('../images/tobillo.png') },
  { name: 'Ejercicio 3', image: require('../images/tobillo.png') },
  { name: 'Ejercicio 4', image: require('../images/tobillo.png') },
  { name: 'Ejercicio 5', image: require('../images/tobillo.png') },
  { name: 'Ejercicio 6', image: require('../images/tobillo.png') },
  { name: 'Ejercicio 7', image: require('../images/tobillo.png') },
  { name: 'Ejercicio 8', image: require('../images/tobillo.png') },
];

const ExerciseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedExercises, setSelectedExercises] = useState<boolean[]>(new Array(exercises.length).fill(false));

  const toggleCheckbox = (index: number) => {
    const newSelectedExercises = [...selectedExercises];
    newSelectedExercises[index] = !newSelectedExercises[index];
    setSelectedExercises(newSelectedExercises);
  };

  const handleSave = async () => {
    const selectedExerciseData = exercises
      .filter((_, index) => selectedExercises[index])
      .map(exercise => ({
        Nombre_Ejerc: exercise.name,
        Diagnostico: '',  // Puedes reemplazar con el diagnóstico real si se requiere
        Ejercicio: ''     // Puedes reemplazar con los detalles del ejercicio real si se requiere
      }));

    if (selectedExerciseData.length === 0) {
      Alert.alert('No se han seleccionado ejercicios');
      return;
    }

    try {
      await axios.post('http://localhost:3000/saveExercise', selectedExerciseData); // Asegúrate de usar la URL correcta
      Alert.alert('Ejercicios guardados exitosamente');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error al guardar los ejercicios');
      console.error(error);
    }
  };

  const renderItem = ({ item, index }: { item: { name: string, image: any }, index: number }) => (
    <View style={styles.exercise}>
      <Image source={item.image} style={styles.exerciseImage} />
      <Text style={styles.exerciseText}>{item.name}</Text>
      <CheckBox
        value={selectedExercises[index]}
        onValueChange={() => toggleCheckbox(index)}
        tintColors={{ true: '#7f00b2', false: '#7f00b2' }} 
      />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>←</Text>
        </TouchableOpacity>
        <Image source={require('../images/terapp.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>EJERCICIOS</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.exercisesContainer}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ADD8E6',
  },
  topContainer: {
    height: 150,
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#7f00b2',
    marginBottom: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 35,
    color: '#7f00b2',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7f00b2',
    textAlign: 'center',
    marginVertical: 20,
  },
  exercisesContainer: {
    paddingHorizontal: 10,
  },
  exercise: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FBF6F5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  exerciseText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#7f00b2',
  },
  button: {
    backgroundColor: '#7f00b2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExerciseScreen;
