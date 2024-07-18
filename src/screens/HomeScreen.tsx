import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
        <Image 
            source={require('../images/ress-tesh.png')} // Ajusta la ruta de la imagen según tu estructura de carpetas
            style={styles.logo}
          />
        </View>
      </View>
      
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="REGISTRARSE"
            onPress={() => navigation.navigate('Register')}
            customStyles={{
              button: styles.registerButton,
              buttonText: styles.registerButtonText,
            }}

          />
          <Button
            title="INICIAR SESIÓN"
            onPress={() => navigation.navigate('Login')} 
          />
        </View>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>QUE ES TERAPP</Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          Esta aplicación te va ayudar a la rehabilitación de fracturas por medio de diferentes ejercicios físicos y va medir tu avance.
        </Text>
      </View>
      <Image 
        source={require('../images/logo.png')} 
        style={styles.logoOverlay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 170, // Establecer una altura fija
    backgroundColor: '#77c2fd', // Azul oscuro
    justifyContent: 'center',
    borderBottomWidth: 4, // Añadir el borde inferior
    borderBottomColor: '#7f00b2', // Color morado
  },
  bottomContainer: {
    flex: 1, // Ajustar para que ocupe el resto del espacio
    backgroundColor: '#ADD8E6', // Azul claro
    paddingTop:90,
    paddingHorizontal:30,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 180, // Ajusta el tamaño de la imagen según tus necesidades
    height: 180, // Ajusta el tamaño de la imagen según tus necesidades
    resizeMode: 'contain', // Ajusta el tamaño de la imagen según tus necesidades
  },
  buttonContainer: {
    backgroundColor: '#3B7BBF',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#00BFFF', // Borde azul claro
  },
  registerButton: {
    backgroundColor: '#fff',
    borderColor: '#808080',
    borderWidth: 1,
  },
  registerButtonText: {
    color: '#000',
  },
  infoButton: {
    backgroundColor: '#7f00b2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: -5,
  },
  logoOverlay: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default HomeScreen;
