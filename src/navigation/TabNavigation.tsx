import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatsScreen from '../screens/StatsScreen';
import { StyleSheet } from 'react-native';
import { TabNavigatorParamList } from './TabNavigatorTypes'; // Importa el tipo

const Tab = createBottomTabNavigator<TabNavigatorParamList>(); // Usa el tipo para el Tab.Navigator

const getIconName = (routeName: keyof TabNavigatorParamList, focused: boolean) => {
  switch (routeName) {
    case 'Welcome':
      return focused ? 'home' : 'home-outline';
    case 'Profile':
      return focused ? 'person' : 'person-outline';
    case 'Stats':
      return focused ? 'bar-chart' : 'bar-chart-outline';
    default:
      return 'help-circle-outline';
  }
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconName = getIconName(route.name as keyof TabNavigatorParamList, focused);
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? styles.iconFocused.color : styles.iconUnfocused.color}
              style={focused ? styles.iconFocused : styles.iconUnfocused} // Aplica los estilos
            />
          );
        },
        tabBarStyle: styles.tabBar, // Aplica estilo a la barra de pestañas
        tabBarActiveTintColor: styles.tabBarActiveTintColor.color,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
  );
};

// Define los estilos
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f8f8f8',
    borderTopWidth: 2,
    borderTopColor: '#e5e5e5',
    height: 55,
    paddingBottom: 5,
    paddingTop: 5,
  },
  iconFocused: {
    color: '#262a5b',
    transform: [{ scale: 1.3 }], // Agranda el ícono cuando está seleccionado
  },
  iconUnfocused: {
    color: 'gray',
    transform: [{ scale: 1 }],
  },
  tabBarActiveTintColor: {
    color: 'tomato',
  },
  tabBarInactiveTintColor: {
    color: 'gray',
  },
});

export default TabNavigator;
