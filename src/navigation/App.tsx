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
import WelcomeScreen from '../screens/WelcomeScreen';
import AssignedExercisesScreen from '../screens/AssignedExercisesScreen'; 

export interface ExcerciseType {
  id: number,
  name: string
}

export type RootStackParamList = {
  Home: undefined;
  Login: { reset?: boolean };
  Welcome: { userName: string };
  Fisioterapeuta: { userName: string };
  Exercise: { moduleName: string, exercises: ExcerciseType[] };
  Register: undefined;
  ForgotPassword: undefined;
  ExerciseModules: undefined;
  TabNavigator: undefined;
  Profile: undefined;
  AssignedExercises: { moduleName: string };
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
        <Stack.Screen name="AssignedExercises" component={AssignedExercisesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;