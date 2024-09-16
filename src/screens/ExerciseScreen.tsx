/* import React, { useState, useEffect } from 'react';  
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Alert, Linking } from 'react-native';  
import axios from 'axios';  
import styles from '../CSS/ExerciseCss';  

const ExerciseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {  
  const [exercises, setExercises] = useState([]);  

  // Función para obtener ejercicios desde la API  
  const fetchExercises = async () => {  
    try {  
      const response = await axios.get('https://7cfe-2800-484-3294-8800-b0b3-863a-cd8-733c.ngrok-free.app/ejercicios/Tobillo');
      setExercises(response.data); // Almacena la respuesta en el estado  
    } catch (error) {  
      console.error('Error al obtener los ejercicios:', error);  
      Alert.alert('Error', 'No se pudieron obtener los ejercicios');  
    }  
  };  

  // useEffect para llamar a la API al cargar el componente  
  useEffect(() => {  
    fetchExercises();  
  }, []);  

  const handleStartExercise = (exerciseUrl: string) => {  
    Linking.openURL(exerciseUrl)  
      .catch(err => Alert.alert('Error', 'No se pudo abrir la URL'));  
  };  

  const renderItem = ({ item }: { item: { diagnostico: string, Nombre_Ejerc: string, Ejercicio: string } }) => (  
    <View style={styles.exercise}>  
      <Image source={require('../images/tobillo.png')} style={styles.exerciseImage} />  
      <Text style={styles.exerciseText}>{item.Nombre_Ejerc}</Text>  
      <TouchableOpacity  
        style={styles.startButton}  
        onPress={() => handleStartExercise(item.Ejercicio)} // Usamos item.ejercicio aquí  
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
        <View style={styles.headerContainer}>  
          <Image  
            source={require('../images/terapp.png')}  
            style={styles.logo}  
          />  
        </View>  
      </View>  
      <View style={styles.infoContainer}>  
        <Text style={styles.welcomeText}>Ejercicios!</Text>  
        <Text style={styles.description}>  
          Te vamos a acompañar en tu recuperación para que te mejores de una manera más efectiva y rápida.  
        </Text>  
      </View>  
      
      <FlatList  
        data={exercises}  
        renderItem={renderItem}  
        keyExtractor={(item, index) => index.toString()}  
        contentContainerStyle={styles.exercisesContainer}  
      />  
    </ScrollView>  
  );  
};  

export default ExerciseScreen; */








import React, { useState, useEffect } from 'react';  
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';  
import axios from 'axios';  
import styles from '../CSS/ExerciseCss';  

const ExerciseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {  
  const [exercises, setExercises] = useState([]);  
  const [selectedExercises, setSelectedExercises] = useState<{ Nombre_Ejerc: string, Ejercicio: string }[]>([]);  

  // Función para obtener ejercicios desde la API  
  const fetchExercises = async () => {  
    try {  
      const response = await axios.get('https://dabf-2800-484-3294-8800-d929-6fef-c2c3-4cb4.ngrok-free.app/ejercicios/Tobillo');
      setExercises(response.data); // Almacena la respuesta en el estado  
    } catch (error) {  
      console.error('Error al obtener los ejercicios:', error);  
      Alert.alert('Error', 'No se pudieron obtener los ejercicios');  
    }  
  };  

  // useEffect para llamar a la API al cargar el componente  
  useEffect(() => {  
    fetchExercises();  
  }, []);  

  // Manejar la selección de ejercicios  
  const handleSelectExercise = (exercise: { Nombre_Ejerc: string, Ejercicio: string }) => {  
    const isSelected = selectedExercises.some(item => item.Nombre_Ejerc === exercise.Nombre_Ejerc);  

    if (isSelected) {  
      // Si ya está seleccionado, lo eliminamos  
      setSelectedExercises(prev => prev.filter(item => item.Nombre_Ejerc !== exercise.Nombre_Ejerc));  
    } else {  
      // Si no está seleccionado, lo agregamos  
      setSelectedExercises(prev => [...prev, exercise]);  
    }  
  };  

  // Función para asignar ejercicios  
  const assignExercises = () => {
    if (selectedExercises.length === 0) {
      Alert.alert('Error', 'Debes seleccionar al menos un ejercicio');
    } else {
      // Navegar a la pantalla de ejercicios asignados pasando los ejercicios seleccionados
      navigation.navigate('AssignedExercises', { selectedExercises });
    }
  };
  

  // Renderizar cada ejercicio  
  const renderItem = ({ item }: { item: { diagnostico: string, Nombre_Ejerc: string, Ejercicio: string } }) => {  
    const isSelected = selectedExercises.some(ex => ex.Nombre_Ejerc === item.Nombre_Ejerc);  

    return (  
      <View style={styles.exercise}>  
        <Image source={require('../images/tobillo.png')} style={styles.exerciseImage} />  
        <Text style={styles.exerciseText}>{item.Nombre_Ejerc}</Text>  

        {/* Botón para seleccionar ejercicio */}  
        <TouchableOpacity  
          style={[styles.selectButton, isSelected && styles.selectedButton]}  
          onPress={() => handleSelectExercise({ Nombre_Ejerc: item.Nombre_Ejerc, Ejercicio: item.Ejercicio })}  
        >  
          <Text style={styles.selectButtonText}>{isSelected ? 'Seleccionado' : 'Seleccionar'}</Text>  
        </TouchableOpacity>  
      </View>  
    );  
  };  

  return (  
    <ScrollView contentContainerStyle={styles.container}>  
      <View style={styles.topContainer}>  
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>  
          <Text style={styles.closeButtonText}>←</Text>  
        </TouchableOpacity>  
        <View style={styles.headerContainer}>  
          <Image  
            source={require('../images/terapp.png')}  
            style={styles.logo}  
          />  
        </View>  
      </View>  

      <View style={styles.infoContainer}>  
        <Text style={styles.welcomeText}>Ejercicios!</Text>  
        <Text style={styles.description}>  
          Te vamos a acompañar en tu recuperación para que te mejores de una manera más efectiva y rápida.  
        </Text>  
      </View>  

      <FlatList  
        data={exercises}  
        renderItem={renderItem}  
        keyExtractor={(item, index) => index.toString()}  
        contentContainerStyle={styles.exercisesContainer}  
      />  

      {/* Botón para asignar ejercicios */}  
      <TouchableOpacity  
        style={styles.assignButton}  
        onPress={assignExercises}  
      >  
        <Text style={styles.assignButtonText}>Asignar Ejercicios</Text>  
      </TouchableOpacity>  
    </ScrollView>  
  );  
};  

export default ExerciseScreen;