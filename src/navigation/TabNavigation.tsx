import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatsScreen from '../screens/StatsScreen';
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
          return <Ionicons name={iconName} size={30} color="#000" />;
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
  );
};

export default TabNavigator;
