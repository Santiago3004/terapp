import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styles from '../CSS/ExerciseCss';

const exercises = [
  { name: 'Dorsiflexión', image: require('../images/tobillo.png') },
  { name: 'Plantiflexión', image: require('../images/tobillo.png') },
  { name: 'Eversión', image: require('../images/tobillo.png') },
  { name: 'Inversión', image: require('../images/tobillo.png') },
  { name: 'Planti-dorsiflexión', image: require('../images/tobillo.png') },
  { name: 'Eversión-inversión', image: require('../images/tobillo.png') },
  { name: 'Planti-Dorsi-Ever-Inversión', image: require('../images/tobillo.png') },
  { name: 'Elevación Talones Plantiflexión', image: require('../images/tobillo.png') },
  { name: 'Elevación Talones Dorsiflexión', image: require('../images/tobillo.png') },
  { name: 'Elevación Talones Planti-Dorsiflexión', image: require('../images/tobillo.png') },
  { name: 'Propiocepción', image: require('../images/tobillo.png') },
  { name: 'Teraband plantiflexión', image: require('../images/tobillo.png') },
];

const ExerciseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleStartExercise = (exerciseName: string) => {
    Alert.alert(`Comenzando ${exerciseName}`);
    // Aquí puedes añadir la lógica que desees al presionar el botón
  };

  const handleSave = async () => {
    // Lógica para guardar ejercicios si es necesario
    // Puedes omitir esta parte si solo quieres manejar el botón "Comenzar Ejercicio"
  };

  const renderItem = ({ item }: { item: { name: string, image: any } }) => (
    <View style={styles.exercise}>
      <Image source={item.image} style={styles.exerciseImage} />
      <Text style={styles.exerciseText}>{item.name}</Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => handleStartExercise(item.name)}
      >
        <Text style={styles.startButtonText}>Comenzar</Text>
      </TouchableOpacity>
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
    </ScrollView>
  );
};

export default ExerciseScreen;
