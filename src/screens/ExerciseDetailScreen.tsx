import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ExerciseDetailScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const { instructions, exerciseImage } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TerApp</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.exerciseTitle}>Ejercicio 2</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      {exerciseImage && <Image source={{ uri: exerciseImage }} style={styles.image} />}
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonText}>Volver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ADD8E6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#4B0082',
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    color: '#000',
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: '#4B0082',
    borderRadius: 5,
    padding: 10,
  },
  navButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ExerciseDetailScreen;
