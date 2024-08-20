import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';

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

const WelcomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const { userName } = route.params;
  const [menuVisible, setMenuVisible] = useState(false);
  const menuHeight = useRef(new Animated.Value(0)).current;

  const handleModulePress = (moduleName: string) => {
    if (moduleName === 'Tobillo') {
      navigation.navigate('Exercise');
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../images/terapp.png')} 
            style={styles.logo}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={toggleMenu}>
            <Text style={styles.menuIcon}>≡</Text> 
          </TouchableOpacity>
        </View>
        {menuVisible && (
          <Animated.View style={[styles.menu, { height: menuHeight }]}>
            <TouchableOpacity style={styles.menuItem} >
              <Text style={styles.menuText} onPress={() => navigation.navigate('Profile')}>Mi cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} >
              <Text style={styles.menuText} onPress={() => navigation.navigate('Register')}>Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} >
              <Text style={styles.menuText}onPress={() => navigation.navigate('Home')}>Cerrar sesión</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.welcomeText}>Bienvenido, {userName}!</Text>
        <Text style={styles.description}>
          Elige la parte de tu cuerpo donde tengas la lesión. Te vamos a acompañar en tu recuperación para que te mejores de una manera más efectiva y rápida.
        </Text>
      </View>

      <View style={styles.modulesContainer}>
        {modules.map((module, index) => (
          <TouchableOpacity key={index} style={styles.module} onPress={() => handleModulePress(module.name)}>
            <Image source={module.image} style={styles.moduleImage} />
            <Text style={styles.moduleText}>{module.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  topContainer: {
    height: 150,
    width: '100%',
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#5C6BC0',
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
    position: 'absolute',
    right: 10,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  menuIcon: {
    fontSize: 60,
    color: '#5C6BC0',
  },
  menu: {
    position: 'absolute',
    top: 90,
    right:2,
    width: 130,
    height:190,
    backgroundColor: '#5C6BC0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7f00b2',
    overflow: 'hidden',
    zIndex: 1,
  },
  menuItem: {
    padding: 8.5,
    borderBottomWidth: 1,
    borderBottomColor: '#7f00b2',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  infoContainer: {
    width: '95%',
    backgroundColor: '#262a5b',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    zIndex:-1,
    borderWidth: 2,
    borderColor: '#5C6BC0',
  },
  welcomeText: {
    fontSize: 24,
    color: '#5C6BC0',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
  },
  modulesContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  module: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  moduleImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  moduleText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C6BC0',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
