// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../images/terapp.png')} 
            style={styles.logo}
          />
        </View>
      </View>
      
      {/* Formulario de Inicio de Sesión */}
      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.loginTitle}>Iniciar sesión</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Gmail"
            placeholderTextColor="#8A2BE2"
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="center"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#8A2BE2"
            secureTextEntry
            textAlign="center"
          />

          <Button
            title="Iniciar sesión"
            onPress={() => {}}
          />

          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>¿Ha olvidado su contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.register} onPress={() => navigation.navigate('Register')}>Regístrese</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 250, // Establecer una altura fija
    backgroundColor: '#77c2fd', // Azul oscuro
    justifyContent: 'center',
    borderBottomWidth: 4, // Añadir el borde inferior
    borderBottomColor: '#7f00b2', // Color morado
  },
  bottomContainer: {
    flex: 1, // Ajustar para que ocupe el resto del espacio
    backgroundColor: '#ADD8E6', // Azul claro
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 280, // Ajusta el tamaño de la imagen según tus necesidades
    height: 280, // Ajusta el tamaño de la imagen según tus necesidades
    resizeMode: 'contain', // Ajusta el tamaño de la imagen según tus necesidades
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 24,
    color: '#8A2BE2',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#8A2BE2',
    color: '#000',
    marginBottom: 20,
    padding: 5,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  forgotPassword: {
    color: '#8A2BE2',
    fontSize: 14,
  },
  register: {
    color: '#8A2BE2',
    fontSize: 14,
  },
});

export default LoginScreen;