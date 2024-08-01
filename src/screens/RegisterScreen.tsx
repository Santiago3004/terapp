// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState('paciente');

  const handleRegister = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Enviar correo de verificación
      await user.sendEmailVerification();

      // Guardar datos adicionales en Firestore
      await firestore().collection('Usuarios').doc(user.uid).set({
        nombres,
        apellidos,
        telefono,
        email,
        rol,
      });

      Alert.alert('Registro exitoso', 'El usuario ha sido registrado exitosamente. Por favor, verifica tu correo electrónico.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al registrar:', error);
      Alert.alert('Error', 'Error al registrar usuario. Por favor, verifica los datos ingresados.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../images/terapp.png')} 
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.registerTitle}>Registrar</Text>
          
          <TextInput
            placeholder="Nombres"
            placeholderTextColor="#8A2BE2"
            textAlign="center"
            onChangeText={setNombres}
            value={nombres}
          />
          
          <TextInput
            placeholder="Apellidos"
            placeholderTextColor="#8A2BE2"
            textAlign="center"
            onChangeText={setApellidos}
            value={apellidos}
          />

          <TextInput
            placeholder="Teléfono"
            placeholderTextColor="#8A2BE2"
            keyboardType="phone-pad"
            textAlign="center"
            onChangeText={setTelefono}
            value={telefono}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#8A2BE2"
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="center"
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#8A2BE2"
            secureTextEntry
            textAlign="center"
            onChangeText={setPassword}
            value={password}
          />
          
          <Button
            title="Registrar"
            onPress={handleRegister}
          />

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>¿Ya tienes una cuenta? Iniciar sesión</Text>
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
    height: 250,
    backgroundColor: '#77c2fd',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#7f00b2',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerTitle: {
    fontSize: 24,
    color: '#8A2BE2',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 1,
  },
  loginLink: {
    color: '#8A2BE2',
    fontSize: 14,
  },
});

export default RegisterScreen;
