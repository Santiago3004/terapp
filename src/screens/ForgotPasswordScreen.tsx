// src/screens/ForgotPasswordScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;

type Props = {
  navigation: ForgotPasswordScreenNavigationProp;
};


const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../images/terapp.png')} // Ajusta la ruta de la imagen según tu estructura de carpetas
            style={styles.logo}
          />
        </View>
      </View>

      {/* Formulario de Recuperación de Contraseña */}
      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.recoverTitle}>Recuperar Contraseña</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Ingrese su Gmail"
            placeholderTextColor="#8A2BE2"
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="center"
          />

          <Button
            title="Enviar"
            onPress={() => {}}
          />

          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={styles.goBack} onPress={() => navigation.navigate('Home')}>Volver al inicio de sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 170,
    backgroundColor: '#77c2fd',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#7f00b2',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  recoverTitle: {
    fontSize: 24,
    color: '#8A2BE2',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#8A2BE2',
    color: '#000',
    marginBottom: 20,
    padding: 5,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  goBack: {
    color: '#8A2BE2',
    fontSize: 14,
  },
});

export default ForgotPasswordScreen;
