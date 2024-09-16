import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import styles from '../CSS/ExerciseModulesCss';

type ExerciseModulesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ExerciseModules'>;

interface Props {
  navigation: ExerciseModulesScreenNavigationProp;
}

const modules = [
  { name: 'Cadera', image: require('../images/cadera.png') },
  { name: 'Femur', image: require('../images/femur.png') },
  { name: 'Tibia-peroné', image: require('../images/tibia-perone.png') },
  { name: 'Rodilla', image: require('../images/rodilla.png') },
  { name: 'Tobillo', image: require('../images/tobillo.png') },
  { name: 'Pie', image: require('../images/pie.png') }
];

const ExerciseModulesScreen: React.FC<Props> = ({ navigation }) => {
  const [exercises, setExercises] = useState<any[]>([]); // Para almacenar los ejercicios

  const handlePress = (moduleName: string) => {
    if (moduleName !== 'Tobillo') {
      Alert.alert('En desarrollo', `El módulo de "${moduleName}" aún no se encuentra disponible 🚧.`);
    } else {
      // Llamada a la API para obtener los ejercicios
      fetch(`https://dabf-2800-484-3294-8800-d929-6fef-c2c3-4cb4.ngrok-free.app/ejercicios/${moduleName}`)
        .then(response => {
          console.log('Estado de la respuesta:', response.status); // Verifica el estado de la respuesta
          return response.text(); // Obtén el texto de la respuesta
        })
        .then(text => {
          console.log('Texto de la respuesta:', text); // Verifica el texto de la respuesta
          try {
            const data = JSON.parse(text); // Intenta parsear el texto como JSON
            setExercises(data); // Almacena los ejercicios obtenidos
            navigation.navigate('Exercise', { moduleName, exercises: data });
          } catch (error) {
            console.error('Error al parsear JSON:', error);
            Alert.alert('Error', 'Formato de respuesta inesperado.');
          }
        })
        .catch(error => {
          console.error('Error al obtener ejercicios:', error);
          Alert.alert('Error', 'No se pudieron obtener los ejercicios. Inténtalo de nuevo más tarde.');
        });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
            <Text style={styles.closeButtonText}>←</Text>
          </TouchableOpacity>
          <Image source={require('../images/terapp.png')} style={styles.logo} />
        </View>
      </View>
      <Text style={styles.title}>Módulos</Text>
      <View style={styles.modulesContainer}>
        {modules.map((module, index) => (
          <View key={index} style={styles.module}>
            <Image
              source={module.image}
              style={[
                styles.moduleImage,
                module.name !== 'Tobillo' && { opacity: 0.5 }
              ]}
            />
            <Text style={styles.moduleText}>{module.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress(module.name)}
              disabled={module.name !== 'Tobillo'}
            >
              <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ExerciseModulesScreen;
