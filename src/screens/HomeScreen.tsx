import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../images/ress-tesh.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.outerContainer}>
          <Button
            title="INICIAR SESIÓN"
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          />
          <View style={styles.infoContainer}>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoButtonText}>QUE ES TERAPP</Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              Esta aplicación te va ayudar a la rehabilitación de fracturas por medio de diferentes ejercicios físicos y va medir tu avance.
            </Text>
          </View>
        </View>
      </View>
      
      <Image
        source={require('../images/logo.png')}
        style={styles.logoOverlay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  topContainer: {
    height: 220,
    backgroundColor: '#77c2fd',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#7f00b2',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  outerContainer: {
    backgroundColor: '#3B7BBF', // Azul
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#7f00b2',
    width: '80%',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  infoButton: {
    backgroundColor: '#7f00b2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '60%',
    alignItems: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  logoOverlay: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: '26%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default HomeScreen;
