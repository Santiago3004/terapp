import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Modal, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import styles from '../CSS/FisioterapeutaCss'

type FisioterapeutaHomeRouteProp = RouteProp<RootStackParamList, 'Fisioterapeuta'>;
type FisioterapeutaHomeNavigationProp = StackNavigationProp<RootStackParamList, 'Fisioterapeuta'>;

type Props = {
  route: FisioterapeutaHomeRouteProp;
  navigation: FisioterapeutaHomeNavigationProp;
};

interface Usuario {
  id: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  email: string;
  rol: string;
}

const FisioterapeutaHome: React.FC<Props> = ({route, navigation}) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState<Usuario | null>(null);
  const [infoUsuario, setInfoUsuario] = useState<Usuario | null>(null);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState('paciente');

  const { userName } = route.params;

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosSnapshot = await firestore()
          .collection('Usuarios')
          .where('rol', '==', 'paciente')
          .get();
        const usuariosList: Usuario[] = usuariosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Usuario[];
        setUsuarios(usuariosList);
      } catch (err) {
        console.error('Error al obtener usuarios:', err);
      }
    };

    fetchUsuarios();
  }, []);

  const handleEdit = (usuario: Usuario) => {
    setCurrentUsuario(usuario);
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (currentUsuario) {
      try {
        await firestore()
          .collection('Usuarios')
          .doc(currentUsuario.id)
          .update({
            nombres: currentUsuario.nombres,
            apellidos: currentUsuario.apellidos,
            telefono: currentUsuario.telefono,
            email: currentUsuario.email,
          });
        setUsuarios(prevUsuarios =>
          prevUsuarios.map(user => user.id === currentUsuario.id ? currentUsuario : user)
        );
        setModalVisible(false);
      } catch (err) {
        console.error('Error al actualizar usuario:', err);
      }
    }
  };

  const handleAddExercise = (id: string) => {
    setCurrentUsuario(usuarios.find(user => user.id === id) || null);
    setExerciseModalVisible(true);
  };

  const handleViewInfo = (usuario: Usuario) => {
    setInfoUsuario(usuario);
    setInfoModalVisible(true);
  };

  const handleEditInfo = () => {
    if (infoUsuario) {
      setCurrentUsuario(infoUsuario);
      setInfoModalVisible(false);
      setModalVisible(true);
    }
  };

  const handleSaveExercise = async () => {
    if (currentUsuario) {
      try {
        console.log('Ejercicio Guardado:', { exerciseName, exerciseDescription });
        setExerciseModalVisible(false);
        setExerciseName('');
        setExerciseDescription('');
        Alert.alert('Éxito', 'Ejercicio agregado correctamente');
      } catch (err) {
        console.error('Error al guardar ejercicio:', err);
      }
    }
  };

  const handleRegister = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Enviar correo de verificación
      await user.sendEmailVerification();

      // Guardar datos adicionales en Firestore
      await firestore().collection('Usuarios').doc(user.uid).set({
        nombres,
        apellidos,
        telefono,
        email,
        rol,
      });

      Alert.alert('Registro exitoso', 'El usuario ha sido registrado exitosamente. Por favor, verifica tu correo electrónico.');
      setRegisterModalVisible(false);
      setEmail('');
      setPassword('');
      setNombres('');
      setApellidos('');
      setTelefono('');
    } catch (error) {
      console.error('Error al registrar:', error);
      Alert.alert('Error', 'Error al registrar usuario. Por favor, verifica los datos ingresados.');
    }
  };

  const renderItem = ({ item }: { item: Usuario }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombres}</Text>
      <TouchableOpacity style={styles.actionButton} onPress={() => handleAddExercise(item.id)}>
        <Text style={styles.buttonText}>Agregar Ejercicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => handleViewInfo(item)}>
        <Text style={styles.buttonText}>Ver Información</Text> 
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.topContainer}>
      <Image
         source={require('../images/terapp.png')}
         style={styles.logo}
       />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>Bienvenido, {userName}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => setRegisterModalVisible(true)}>
        <Text style={styles.buttonText}>Agregar Paciente</Text>
      </TouchableOpacity>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.cell, styles.header]}>Nombre</Text>
          <Text style={[styles.cell, styles.header]}>Acciones</Text>
        </View>
        <FlatList
          data={usuarios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {currentUsuario && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <ScrollView contentContainerStyle={styles.modalView}>
              <Text style={styles.modalTitle}>Editar Usuario</Text>
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
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#E0E0E0"
                value={currentUsuario.email}
                onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, email: text })}
                keyboardType="email-address"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
                  <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}

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
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEditInfo}>
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={() => setInfoModalVisible(false)}>
                  <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}

      {currentUsuario && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={exerciseModalVisible}
          onRequestClose={() => setExerciseModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <ScrollView contentContainerStyle={styles.modalView}>
              <Text style={styles.modalTitle}>Agregar Ejercicio</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre del Ejercicio"
                placeholderTextColor="#E0E0E0"
                value={exerciseName}
                onChangeText={setExerciseName}
              />
              <TextInput
                style={styles.input}
                placeholder="Descripción del Ejercicio"
                placeholderTextColor="#E0E0E0"
                value={exerciseDescription}
                onChangeText={setExerciseDescription}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSaveExercise}>
                  <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setExerciseModalVisible(false)}>
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}

      {registerModalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={registerModalVisible}
          onRequestClose={() => setRegisterModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <ScrollView contentContainerStyle={styles.modalView}>
              <Text style={styles.modalTitle}>Registrar Paciente</Text>
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
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#E0E0E0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleRegister}>
                  <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setRegisterModalVisible(false)}>
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  </ScrollView>
  );
};


export default FisioterapeutaHome;