import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import TextInput from '../components/TextInput';
import styles from '../CSS/LoginCss';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
          setLoading(false);
          return;
        }

        if (userRole === 'paciente') {
          navigation.navigate('TabNavigator', { userName: userName });
        } else if (userRole === 'fisioterapeuta') {
          navigation.navigate('Fisioterapeuta', { userName });
        } else {
          Alert.alert('Error', 'Rol de usuario no reconocido');
        }
      } else {
        Alert.alert('Error', 'No se encontraron datos del usuario');
      }
    } catch (err: any) {
      console.error('Error al iniciar sesión:', err);

      let errorMessage = 'Error Desconocido. Por favor, intenta nuevamente'

      // Verifica si err tiene un código de error
      if (err && err.code) {
        // Imprime err.code para depuración
        console.log('Código de error:', err.code);
        switch (err.code) {
          case 'auth/user-not-found':
            errorMessage = 'Usuario no encontrado. Por favor, verifica el correo electrónico.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Contraseña incorrecta. Verifica que la contraseña sea correcta.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Correo electrónico inválido. Asegúrate de ingresar un correo electrónico válido.';
            break;
          case 'auth/user-disabled':
            errorMessage = 'La cuenta de usuario ha sido desactivada. Contacta al soporte para más detalles.';
            break;
          case 'auth/network-request-failed':
            errorMessage = 'Error de red. Por favor, verifica tu conexión a Internet y vuelve a intentar.';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Demasiados intentos fallidos. Intenta nuevamente más tarde.';
            break;
          default:
            errorMessage = 'Contraseña incorrecta. Verifica que la contraseña sea correcta.';
            break;
        }
      } else {
        // Imprime el error completo para depuración
        console.log('Error completo:', err);
      }

      Alert.alert('Error', errorMessage);
    } finally {
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