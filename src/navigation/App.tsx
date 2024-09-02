import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FisioterapeutaHome from '../screens/FisioterapeutaHome';
import ExerciseModulesScreen from '../screens/ExerciseModulesScreen'; // Asegúrate de importar correctamente
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatsScreen from '../screens/StatsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type RootStackParamList = {
  Home: undefined;
  Login: { reset?: boolean };
  Register: undefined;
  ForgotPassword: undefined;
  Exercise: { moduleName: string };
  ExerciseModules: undefined; // Asegúrate de definir correctamente aquí
  Fisioterapeuta: { userName: string };
  CentroSalud: { userName: string };
  TabNavigator: { userName: string };
  Profile: undefined;
  Welcome: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator(); 

const routeName = 'Welcome';
const iconSize = 30;
const iconColor = '#000';

const getIconName = (routeName: string, focused: boolean) => {
  switch (routeName) {
    case 'Welcome':
      return focused ? 'home' : 'home-outline';
    case 'Profile':
      return focused ? 'person' : 'person-outline';
    case 'Stats':
      return focused ? 'bar-chart-sharp' : 'bar-chart-outline';
    default:
      return 'help-circle-outline';
  }
};


import { RouteProp } from '@react-navigation/native';

type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'TabNavigator'>;

const TabNavigatior = ({route}: {route: any}) => {
  const { userName } = route.params;
  
  return (
    <Tab.Navigator
    initialRouteName={routeName}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const iconName = getIconName(route.name, focused);
        return <Ionicons name={iconName} size={iconSize} color={iconColor}/>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
      headerShown: false,
    })}
  >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} /> 
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
  )
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigatior} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="ExerciseModules" component={ExerciseModulesScreen} />
        <Stack.Screen name="Fisioterapeuta" component={FisioterapeutaHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




