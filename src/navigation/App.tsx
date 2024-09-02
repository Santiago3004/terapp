import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FisioterapeutaHome from '../screens/FisioterapeutaHome';
import CentroSaludHome from '../screens/CentroSaludHome';
import firestore from '@react-native-firebase/firestore';

export type RootStackParamList = {
  Home: undefined;
  Login: { reset?: boolean };
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: { userName: string };
  Exercise: { moduleName: string };
  Profile: undefined;
  Fisioterapeuta: { userName: string };
  CentroSalud: { userName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  useEffect(() => {
    const testFirestore = async () => {
      try {
        const docRef = firestore().collection('Usuarios').doc('testUser');
        const doc = await docRef.get();

        if (doc.exists) {
          console.log('Firestore está funcionando correctamente:', doc.data());
        } else {
          console.log('No se encontró el documento de prueba en la colección Usuarios. Creando el documento...');
          await docRef.set({ nombre: 'Usuario de prueba', email: 'test@example.com', rol: 'paciente' });
          console.log('Documento de prueba creado en la colección Usuarios.');
        }
      } catch (error) {
        console.error('Error al conectar con Firestore:', error);
        Alert.alert('Error', 'Error al conectar con Firestore');
      }
    };

    testFirestore();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Fisioterapeuta" component={FisioterapeutaHome} />
        <Stack.Screen name="CentroSalud" component={CentroSaludHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


/* import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FisioterapeutaHome from '../screens/FisioterapeutaHome';
import CentroSaludHome from '../screens/CentroSaludHome';
import ExerciseModulesScreen from '../screens/ExerciseModulesScreen'; // Asegúrate de importar correctamente

export type RootStackParamList = {
  Home: undefined;
  Login: { reset?: boolean };
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: { userName: string };
  Exercise: undefined;
  ExerciseModules: undefined; // Asegúrate de definir correctamente aquí
  Profile: undefined;
  Fisioterapeuta: { userName: string };
  CentroSalud: { userName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="ExerciseModules" component={ExerciseModulesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Fisioterapeuta" component={FisioterapeutaHome} />
        <Stack.Screen name="CentroSalud" component={CentroSaludHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; */
