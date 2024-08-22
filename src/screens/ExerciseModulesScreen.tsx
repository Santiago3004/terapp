import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';

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
    if (moduleName !== 'Tobillo') {
      Alert.alert('En desarrollo', `El módulo de ${moduleName} aun no se encuentra disponible 🚧.`);
    } else {
      navigation.navigate('Exercise', { moduleName });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Módulos de Ejercicios</Text>
      </View>
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
            >
              <Text style={styles.buttonText}>Ver Ejercicios</Text>
            </TouchableOpacity>
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
    paddingHorizontal: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  backButtonText: {
    fontSize: 35,
    color: '#7f00b2',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7f00b2',
  },
  modulesContainer: {
    paddingHorizontal: 6,
  },
  module: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FBF6F5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  moduleImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  moduleText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#7f00b2',
  },
  button: {
    backgroundColor: '#7f00b2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ExerciseModulesScreen;
