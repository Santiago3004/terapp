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
  const handlePress = (moduleName: string) => {
    if (moduleName === 'Tobillo') {
      // Navegar a la pantalla de ejercicios para el tobillo
      navigation.navigate('Exercise', { moduleName: moduleName, exercises: [] }); // Asegúrate de que "Exercise" esté definido en tu Stack Navigator
    } else {
      Alert.alert('En desarrollo', `El módulo de "${moduleName}" aún no está disponible.`);
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
      <View style={styles.infoContainer}>
        <Text style={styles.welcomeText}>Módulos</Text>
        <Text style={styles.description}>
        Seleccione el módulo donde el paciente tiene la lesión.
        </Text>
      </View>
      <View style={styles.modulesContainer}>
        {modules.map((module, index) => (
          <View key={index} style={styles.module}>
            <Image source={module.image} style={[styles.moduleImage, module.name !== 'Tobillo' && { opacity: 0.5 }]} />
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
