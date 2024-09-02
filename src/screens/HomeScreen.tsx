import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import styles from '../CSS/HomeCss';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../images/terapp.png')}
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



export default HomeScreen;
