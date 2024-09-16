import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Animated, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import auth from '@react-native-firebase/auth'; 
import firestore from '@react-native-firebase/firestore';
import styles from '../CSS/WelcomeCss';

type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;
type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  route: WelcomeScreenRouteProp;
  navigation: WelcomeScreenNavigationProp;
};

const modules = [
  { name: 'Cadera', image: require('../images/cadera.png') },
  { name: 'Femur', image: require('../images/femur.png') },
  { name: 'Tibia-peroné', image: require('../images/tibia-perone.png') },
  { name: 'Rodilla', image: require('../images/rodilla.png') },
  { name: 'Tobillo', image: require('../images/tobillo.png') },
  { name: 'Pie', image: require('../images/pie.png') }
];

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const [userName, setUserName] = useState('Usuario');
  const [menuVisible, setMenuVisible] = useState(false);
  const menuHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userDoc = await firestore()
            .collection('Usuarios')
            .doc(user.uid)
            .get();
  
          if (userDoc.exists) {
            const userData = userDoc.data();
            setUserName(userData?.nombres || 'Usuario');
          } else {
            console.error('No se encontró el documento del usuario en Firestore');
          }
        }
      } catch (error) {
        console.error('Error al obtener el nombre de usuario: ', error);
        Alert.alert(
          'Error',
          'No se pudo cargar el nombre de usuario. Por favor, intenta de nuevo más tarde.',
        );
      }
    };
  
    fetchUserName();
  }, []);
  

  const handleModulePress = (moduleName: string) => {
    if (moduleName !== 'Tobillo') {
      Alert.alert('En desarrollo', `El módulo de "${moduleName}" aun no se encuentra disponible 🚧.`);
    } else {
      navigation.navigate('AssignedExercises', { moduleName });
    }
  };

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(menuHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(menuHeight, {
        toValue: 120,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.replace('Home');
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../images/terapp.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.welcomeText}>
          {userName === 'Usuario' ? 'Cargando...' : `Bienvenido, ${userName}!`}
        </Text>

        <Text style={styles.description}>
          Elige la parte de tu cuerpo donde tengas la lesión. Te vamos a acompañar en tu recuperación para que te mejores de una manera más efectiva y rápida.
        </Text>
      </View>

      <View style={styles.modulesContainer}>
        {modules.map((module, index) => (
          <TouchableOpacity key={index} style={styles.module} onPress={() => handleModulePress(module.name)}>
            <Image 
            source={module.image} 
            style={[
              styles.moduleImage,
              module.name !== 'Tobillo' && { opacity: 0.5 }
            ]} />
            <Text style={styles.moduleText}>{module.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;
