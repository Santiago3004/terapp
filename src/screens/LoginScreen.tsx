import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
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
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
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
