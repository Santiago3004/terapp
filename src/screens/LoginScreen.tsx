import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from '../CSS/LoginCss'

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      let errorMessage = '';

      if (!email && !password) {
        errorMessage = 'Por favor, ingresa tu correo electrónico y contraseña.';
      } else if (!email) {
        errorMessage = 'Por favor, ingresa tu correo electrónico.';
      } else if (!password) {
        errorMessage = 'Por favor, ingresa tu contraseña.';
      }

      Alert.alert('Campos requeridos', errorMessage);
      return;
    }

    setLoading(true);

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert('Verificación requerida', 'Por favor, verifica tu correo electrónico antes de iniciar sesión.');
        await auth().signOut();
        setLoading(false);
        return;
      }

      const userDoc = await firestore().collection('Usuarios').doc(user.uid).get();
      const userData = userDoc.data();

      if (userData) {
        const userName = userData.nombres;
        const userRole = userData.rol;

        if (!userRole) {
          Alert.alert('Error', 'El rol del usuario no está definido');
          setLoading(false)
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
      setLoading(false);
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
            placeholderTextColor="#fff"
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="center"
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#fff"
            secureTextEntry
            textAlign="center"
            onChangeText={setPassword}
            value={password}
          />
          
          <TouchableOpacity
            style={styles.boton}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            )}
          </TouchableOpacity>
          

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



export default LoginScreen;
