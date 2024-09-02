import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import styles from '../CSS/ProfileCss';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

interface Usuario {
  id: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  email: string;
  rol: string;
}

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const usuarioDoc = await firestore().collection('Usuarios').doc(currentUser.uid).get();
          const usuarioData = usuarioDoc.data() as Usuario;
          setUsuario(usuarioData);
          setNombres(usuarioData.nombres);
          setApellidos(usuarioData.apellidos);
          setTelefono(usuarioData.telefono);
          setEmail(usuarioData.email);
        }
      } catch (err) {
        console.error('Error al obtener la información del usuario:', err);
      }
    };

    fetchUsuario();
  }, []);

  const handleSaveChanges = async () => {
    if (usuario) {
      try {
        await firestore().collection('Usuarios').doc(usuario.id).update({
          nombres,
          apellidos,
          telefono,
          email,
        });
        Alert.alert('Éxito', 'Los cambios se han guardado exitosamente.');
      } catch (err) {
        console.error('Error al guardar los cambios:', err);
        Alert.alert('Error', 'Hubo un problema al guardar los cambios. Por favor, inténtalo de nuevo.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.replace('Home');
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
      Alert.alert('Error', 'Hubo un problema al cerrar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require('../images/perfil.png')} // Usa una imagen de perfil por defecto
        />
      </View>
      <Text style={styles.title}>Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombres"
        placeholderTextColor="#E0E0E0"
        value={nombres}
        onChangeText={setNombres}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#E0E0E0"
        value={apellidos}
        onChangeText={setApellidos}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        placeholderTextColor="#E0E0E0"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#E0E0E0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;