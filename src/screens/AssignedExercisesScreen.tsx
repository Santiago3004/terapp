import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../CSS/AssignedExercisesCss'; // Asegúrate de tener estilos específicos

interface Exercise {
  Nombre_Ejerc: string;
  Ejercicio: string;
}

const AssignedExercisesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const route = useRoute();
  const { selectedExercises } = route.params as { selectedExercises: Exercise[] }; // Recibimos los ejercicios seleccionados desde `ExerciseScreen`

  // Renderizar cada ejercicio asignado
  const renderItem = ({ item }: { item: Exercise }) => {
    return (
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.Nombre_Ejerc}</Text>
        <Text style={styles.exerciseDetail}>{item.Ejercicio}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicios Asignados</Text>

      {/* Lista de ejercicios asignados */}
      <FlatList
        data={selectedExercises}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Botón para regresar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Asignar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AssignedExercisesScreen;
