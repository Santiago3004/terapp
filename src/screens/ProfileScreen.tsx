import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image, ActivityIndicator, Modal } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
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
  fotoPerfil?: string;
}

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  // Modal States
  const [modalVisible, setModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState<Usuario | null>(null);
  const [infoUsuario, setInfoUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const usuarioDoc = await firestore().collection('Usuarios').doc(currentUser.uid).get();
          if (usuarioDoc.exists) {
            const usuarioData = usuarioDoc.data() as Usuario;
            setUsuario({ ...usuarioData, id: usuarioDoc.id });
            setNombres(usuarioData.nombres);
            setApellidos(usuarioData.apellidos);
            setTelefono(usuarioData.telefono);
            setEmail(usuarioData.email);
            setFotoPerfil(usuarioData.fotoPerfil);
          } else {
            console.log('El documento del usuario no existe.');
            Alert.alert('Error', 'No se encontró el documento del usuario.');
          }
        }
      } catch (err) {
        console.error('Error al obtener la información del usuario:', err);
      }
    };
  
    fetchUsuario();
  }, []);
  

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, async (response) => {
      if (response.didCancel) {
        console.log('El usuario canceló la selección de la imagen.');
      } else if (response.errorCode) {
        console.error('Error al seleccionar la imagen: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;
        await uploadImage(imageUri);
      }
    });
  };

  const uploadImage = async (imageUri: string | undefined) => {
    const currentUser = auth().currentUser;
    if (!currentUser) {
      console.error('No hay usuario autenticado');
      Alert.alert('Error', 'No se encontró al usuario autenticado.');
      return;
    }

    const usuarioDocRef = firestore().collection('Usuarios').doc(currentUser.uid);
    const usuarioDoc = await usuarioDocRef.get();
    if (!usuarioDoc.exists) {
      console.error('El documento del usuario no existe en Firestore');
      Alert.alert('Error', 'No se encontró la información del usuario en Firestore.');
      return;
    }

    const filename = `${currentUser.uid}/profilePicture.jpg`;
    const storageRef = storage().ref(filename);
    setLoading(true);

    try {
      if (imageUri) {
        await storageRef.putFile(imageUri);
      } else {
        throw new Error('La URI de la imagen es undefined');
      }
      const downloadURL = await storageRef.getDownloadURL();
      setFotoPerfil(downloadURL);

      await usuarioDocRef.update({
        fotoPerfil: downloadURL,
      });

      Alert.alert('Éxito', 'La foto de perfil se ha actualizado exitosamente.');
    } catch (err) {
      console.error('Error al subir la imagen: ', err);
      Alert.alert('Error', 'Hubo un problema al subir la imagen. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveChanges = async () => {
    if (usuario) {
      setLoading(true);
      try {
        await firestore().collection('Usuarios').doc(usuario.id).update({
          nombres,
          apellidos,
          telefono,

        });
        Alert.alert('Éxito', 'Los cambios se han guardado exitosamente.');
        setLoading(false);
      } catch (err) {
        console.error('Error al guardar los cambios:', err);
        Alert.alert('Error', 'Hubo un problema al guardar los cambios. Por favor, inténtalo de nuevo.');
        setLoading(false);
      }
    }
  };
  

  const handleLogout = async () => {
    setLoading(true);
    try {
      await auth().signOut();
      navigation.replace('Home');
      setLoading(false);
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
      Alert.alert('Error', 'Hubo un problema al cerrar sesión. Por favor, inténtalo de nuevo.');
      setLoading(false);
    }
  };

  const handleViewInfo = () => {
    if (usuario) {
      setInfoUsuario(usuario);
      setInfoModalVisible(true);
    }
  };

  const handleEdit = () => {
    if (infoUsuario) {
      setCurrentUsuario(infoUsuario);
      setInfoModalVisible(false);
      setModalVisible(true);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    if (currentUsuario) {
      try {
        await firestore().collection('Usuarios').doc(currentUsuario.id).update({
          nombres: currentUsuario.nombres,
          apellidos: currentUsuario.apellidos,
          telefono: currentUsuario.telefono,
          email: currentUsuario.email,
        });
        setUsuario(currentUsuario);
        Alert.alert('Éxito', 'Los cambios se han guardado exitosamente.');
        setLoading(false);
      } catch (err) {
        console.error('Error al guardar los cambios:', err);
        Alert.alert('Error', 'Hubo un problema al guardar los cambios. Por favor, inténtalo de nuevo.');
        setLoading(false);
      } finally {
        setModalVisible(false);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileImageContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>←</Text>
        </TouchableOpacity>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <Image
              style={styles.profileImage}
              source={fotoPerfil ? { uri: fotoPerfil } : require('../images/perfil.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{nombres ? `${nombres} ${apellidos}` : 'Perfil'}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,styles.ButtonInfo ]} onPress={handleViewInfo}>
          <Text style={styles.buttonText}>Ver Información</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton, loading && { opacity: 0.6 }]} 
        onPress={handleLogout}
        disabled={loading}
        >
          {loading ? (
            <Text style={styles.buttonText}>Cerrando Sesión...</Text>
          ) : (
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          )
        }
        </TouchableOpacity>
      </View>

      {/* Modal de Información del Usuario */}
      {infoUsuario && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={infoModalVisible}
          onRequestClose={() => setInfoModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <ScrollView contentContainerStyle={styles.infoModalView}>
              <Text style={styles.modalTitle}>Información del Paciente</Text>
              <View style={styles.infoTable}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoHeader}>Nombres:</Text>
                  <Text style={styles.infoCell}>{infoUsuario.nombres}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoHeader}>Apellidos:</Text>
                  <Text style={styles.infoCell}>{infoUsuario.apellidos}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoHeader}>Teléfono:</Text>
                  <Text style={styles.infoCell}>{infoUsuario.telefono}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoHeader}>Email:</Text>
                  <Text style={styles.infoCell}>{infoUsuario.email}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoHeader}>Rol:</Text>
                  <Text style={styles.infoCell}>{infoUsuario.rol}</Text>
                </View>
              </View>
              <View style={styles.buttonContainerModal}>
              <TouchableOpacity style={[styles.ButtonModal, styles.editButton]} onPress={handleEdit}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ButtonModal, styles.cancelButton]} onPress={() => setInfoModalVisible(false)}>
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}

      {/* Modal de Edición */}
      {currentUsuario && (
        <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalBackground}>
    <ScrollView contentContainerStyle={styles.modalView}>
      <Text style={styles.modalTitle}>Editar Información</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombres"
        placeholderTextColor="#E0E0E0"
        value={currentUsuario.nombres}
        onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, nombres: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#E0E0E0"
        value={currentUsuario.apellidos}
        onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, apellidos: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        placeholderTextColor="#E0E0E0"
        value={currentUsuario.telefono}
        onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, telefono: text })}
        keyboardType="phone-pad"
      />
      <View style={styles.buttonContainerModal}>
        <TouchableOpacity 
          style={[styles.ButtonModal, styles.saveButton, loading && { opacity: 0.6 }]} 
          onPress={handleSave}
          disabled={loading}
        >
          {loading ? (
            <Text style={styles.buttonText}>Guardando...</Text>
          ) : (
            <Text style={styles.buttonText}>Guardar</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ButtonModal, styles.cancelButton]} onPress={() => setModalVisible(false)}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
</Modal>

      )}
    </ScrollView>
  );
};

export default ProfileScreen;
