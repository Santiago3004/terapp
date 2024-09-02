import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
          navigation.navigate('Welcome', { userName });
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

      let errorMessage

      // Verifica si `err` tiene un código de error
      if (err && err.code) {
        // Imprime `err.code` para depuración
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
            errorMessage = 'Error desconocido. Por favor, intenta nuevamente.';
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
          
          <Button
            style={styles.boton}
            title="Iniciar sesión"
            onPress={handleLogin}
          />
          {loading && <ActivityIndicator size="large" color="#8A2BE2" style={styles.loader} />}

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
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#5C6BC0',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
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
    backgroundColor: '#262a5b',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#5C6BC0',
  },
  loginTitle: {
    fontSize: 24,
    color: '#fff',
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
    color: '#5C6BC0',
    fontSize: 14,
  },
  boton:{
    backgroundColor: '#5C6BC0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    width: '80%',
  },
  loader:{
    marginBottom: 10
  }
});

export default LoginScreen;
