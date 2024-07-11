import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Asegúrate de que la ruta es correcta

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Rees-tesh</Text>
        </View>
      </View>
      
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.registerButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerButtonText}>REGISTRARSE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>QUE ES TERAPP</Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          Esta aplicación te va ayudar a la rehabilitación de fracturas por medio de diferentes ejercicios físicos y va medir tu avance.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#1E90FF', // Azul oscuro
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#ADD8E6', // Azul claro
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Color del texto blanco
    paddingHorizontal: 20, // Espacio interno horizontal para el texto
  },
  buttonContainer: {
    backgroundColor: '#3B7BBF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#00BFFF', // Borde azul claro
  },
  registerButton: {
    backgroundColor: '#fff', // Fondo blanco
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#00BFFF', // Azul claro
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  infoButton: {
    backgroundColor: '#6A5ACD',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButtonText: {
    color: '#000', // Letra negra
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
