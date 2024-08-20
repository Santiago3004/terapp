import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>←</Text>
        </TouchableOpacity>
        <Image source={require('../images/terapp.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>EJERCICIOS</Text>
      <View style={styles.exercisesContainer}>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exercise}>
            <Image source={exercise.image} style={styles.exerciseImage} />
            <Text style={styles.exerciseText}>{exercise.name}</Text>
            <CheckBox
              value={selectedExercises[index]}
              onValueChange={() => toggleCheckbox(index)}
              tintColors={{ true: '#7f00b2', false: '#7f00b2' }} // Cambio de color del checkbox a morado
            />
          </View>
        ))}
      </View>
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
    position: 'relative', // Asegúrate de que el contenedor de la flecha esté en la parte superior
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 35,
    color: '#7f00b2', // Color de la flecha
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
    color: '#7f00b2', // Cambio de color a morado
  },
});

export default ExerciseScreen;
