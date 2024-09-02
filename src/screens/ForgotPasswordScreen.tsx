import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import TextInput from '../components/TextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import auth from '@react-native-firebase/auth';
import styles from '../CSS/ForgotPassCss'

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;

type Props = {
  navigation: ForgotPasswordScreenNavigationProp;
};

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)


  const handlePasswordReset = () => {
    setLoading(true);
    if (!email) {
      Alert.alert('Rellena los campos requeridos!', 'Por favor ingresa un correo electrónico.');
      setLoading(false);
      return;
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Éxito', 'Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.');
        navigation.navigate('Login', {});
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'No se pudo enviar el correo de restablecimiento. Verifica tu correo e inténtalo de nuevo.');
        setLoading(false)
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../images/terapp.png')}
            style={styles.logo}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.recoverTitle}>Recuperar Contraseña</Text>

          <TextInput
            style={styles.input}
            placeholder="Ingresar Gmail"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="center"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handlePasswordReset}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Enviar</Text>
            )
          }
          </TouchableOpacity>

          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={styles.goBack} onPress={() => navigation.navigate('Login', {})}>Volver al inicio de sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};


export default ForgotPasswordScreen;
