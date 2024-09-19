import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FisioterapeutaHome from '../screens/FisioterapeutaHome';
import ExerciseModulesScreen from '../screens/ExerciseModulesScreen';
import TabNavigator from './TabNavigation'; 
import Implementation from '../screens/Implementacion';
import WelcomeScreen from '../screens/WelcomeScreen';
import AssignedExercisesScreen from '../screens/AssignedExercisesScreen'; 
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen'; 
import ProfileFiScreen from '../screens/ProfileFiScreen';

export interface ExcerciseType {
  id: number,
  name: string
}

export type RootStackParamList = {
  Home: undefined;
  Login: { reset?: boolean };
  Welcome: { userName: string };
  Fisioterapeuta: { userName: string };
  Exercise: { moduleName: string, exercises: any[] };
  Register: undefined;
  ForgotPassword: undefined;
  ExerciseModules: undefined;
  TabNavigator: { userName: string };
  Profile: undefined;
  ProfileFi: undefined;
  Implementacion:undefined;
  AssignedExercises: { moduleName: string; selectedExercises: string[] };
  ExerciseDetails: { exercise: { name: string; image: any; description: string } }; 
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} /> 
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="ExerciseModules" component={ExerciseModulesScreen} />
        <Stack.Screen name="Fisioterapeuta" component={FisioterapeutaHome} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileFi" component={ProfileFiScreen} />
        <Stack.Screen name="Implementacion" component={Implementation}/>
        <Stack.Screen name="AssignedExercises" component={AssignedExercisesScreen} />
        <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetailsScreen}
        options={{
        headerShown: true,
        title: 'Volver',
        headerTitleStyle: {
          color: 'white', // Cambia el color del título
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: '#262a5b', // Cambia el color de fondo de la cabecera
        },
        headerTintColor: 'white', // Cambia el color de la flecha de retroceso
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




