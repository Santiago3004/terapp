import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert('Verificación requerida', 'Por favor, verifica tu correo electrónico antes de iniciar sesión.');
        await auth().signOut();
        return;
      }

      const userDoc = await firestore().collection('Usuarios').doc(user.uid).get();
      const userData = userDoc.data();

      if (userData) {
        const userName = userData.nombres;
        const userRole = userData.rol;

        if (!userRole) {
          Alert.alert('Error', 'El rol del usuario no está definido');
          return;
        }

        switch (userRole) {
          case 'paciente':
            navigation.navigate('Welcome', { userName });
            break;
          case 'fisioterapeuta':
            navigation.navigate('Fisioterapeuta', { userName });
            break;
          default:
            Alert.alert('Error', 'Rol de usuario no reconocido');
            break;
        }
      } else {
        Alert.alert('Error', 'No se encontraron datos del usuario');
      }
    } catch (err: any) {
      console.error('Error al iniciar sesión:', err);
      let errorMessage = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';

      if (err.code) {
        switch (err.code) {
          case 'auth/user-not-found':
            errorMessage = 'Usuario no encontrado. Por favor, verifica tu correo electrónico.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Contraseña incorrecta. Por favor, verifica tu contraseña.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Correo electrónico inválido. Por favor, verifica tu correo electrónico.';
            break;
          default:
            errorMessage = 'Error desconocido. Por favor, intenta nuevamente.';
            break;
        }
      }

      Alert.alert('Error', errorMessage);
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
          <Text style={styles.loginTitle}>Iniciar sesión</Text>
          
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
            title="Iniciar sesión"
            onPress={handleLogin}
          />

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>¿Ha olvidado su contraseña?</Text>
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
  loginTitle: {
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
  forgotPassword: {
    color: '#8A2BE2',
    fontSize: 14,
  },
});

export default LoginScreen;
