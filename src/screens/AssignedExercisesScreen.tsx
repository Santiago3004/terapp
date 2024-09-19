import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../CSS/ExerciseCss';

const exercises = [
  { name: 'Plantiflrxión', image: require('../images/Elevaciondetalones.gif'), description: 'Mantén una posición firme. Eleva los talones lentamente, luego bájalos de igual manera. Realiza 15 repeticiones.' },
  { name: 'Dorsiflexión', image: require('../images/Dorsiflexion.gif'), description: 'Mantén una posición firme. Eleva las puntas de los pies lentamente, luego bájalos de igual manera. Realiza 15 repeticiones.' },
];

const ExerciseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

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
        Selecciona "Comenzar" y realiza el ejercicio correctamente para lograr una recuperación efectiva.
      </Text>
      </View>
      <View style={styles.exercisesContainer}>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exercise}>
            <FastImage source={exercise.image} style={styles.exerciseImage} />
            <Text style={styles.exerciseText}>{exercise.name}</Text>
            <TouchableOpacity 
              style={styles.viewButton} 
              onPress={() => handleViewExercise(index)}
            >
              <Text style={styles.viewButtonText}>Comenzar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ExerciseScreen;
