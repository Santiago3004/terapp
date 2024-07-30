// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};
 
const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('')
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () =>{
    if(nombres && apellidos && telefono && email && password){
      try{
        //Registro del usuario por Firebase Auth
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Mensaje al correo
        await user.sendEmailVerification();

        // Aqui se guarda la informacion adicional del usuario
        await firestore().collection('Pacientes').doc(user.uid).set({
          nombres,
          apellidos,
          telefono,
          email,
        });
        Alert.alert('Registro exitoso', 'El usuario ha sido registrado correctamente. Por favor, verifica tu correo electrónico.');
        navigation.navigate('Login');

      }
      catch(error){
        console.error(error);
        Alert.alert('', 'Ingresa Una Contraseña Segura De Al Menos 6 Caracteres');
      }
    }
    else{
      Alert.alert('Error', 'Todos los campos son obligatorios');
    }
    
  };



  return (
    <View style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../images/terapp.png')} // Ajusta la ruta de la imagen según tu estructura de carpetas
            style={styles.logo}
          />
        </View>
      </View>

      {/* Formulario de Registro */}
      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.registerTitle}>Registrarse</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Nombres"
            autoCapitalize="words"
            textAlign="center"
            placeholderTextColor="#8A2BE2"
            onChangeText={setNombres}
            value={nombres}
          />

          <TextInput
            style={styles.input}
            placeholder="Apellidos"
            autoCapitalize="words"
            textAlign="center"
            placeholderTextColor="#8A2BE2"
            onChangeText={setApellidos}
            value={apellidos}
          />

          <TextInput
            style={styles.input}
            placeholder="Telefono"
            textAlign="center"
            placeholderTextColor="#8A2BE2"
            onChangeText={setTelefono}
            value={telefono}
          />

          <TextInput
            style={styles.input}
            placeholder="Gmail"
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="center"
            placeholderTextColor="#8A2BE2"
            onChangeText={setEmail}
            value={email}
            
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            textAlign="center"
            placeholderTextColor="#8A2BE2"
            onChangeText={setPassword}
            value={password}

          />

          <Button
            title="Registrarse"
            onPress={handleRegister}
          />

          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={styles.goBack} onPress={() => navigation.navigate('Login')}>¿Ya tienes una cuenta? Inicia sesión</Text>
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
    height: 170,
    backgroundColor: '#77c2fd',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#7f00b2',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    paddingTop: 60,
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
    padding: 10,
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
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#8A2BE2',
    marginBottom: 20,
    padding: 5,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  goBack: {
    color: '#8A2BE2',
    fontSize: 14,
  },
});

export default RegisterScreen;
