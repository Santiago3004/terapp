import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, TextInput, Modal, Alert, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';
import styles from '../CSS/FisioterapeutaCss';

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

const FisioterapeutaHome: React.FC<Props> = ({ route, navigation }) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState<Usuario | null>(null);
  const [infoUsuario, setInfoUsuario] = useState<Usuario | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState('paciente');
  const [loading, setLoading] = useState(false);

  const { userName } = route.params || {};

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosSnapshot = await firestore()
          .collection('Usuarios')
          .where('rol', '==', 'paciente')
          .get();
        const usuariosList: Usuario[] = usuariosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
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
    setLoading(true);
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
          prevUsuarios.map(user =>
            user.id === currentUsuario.id ? currentUsuario : user
          )
        );
        setLoading(false);
        setModalVisible(false);
      } catch (err) {
        console.error('Error al actualizar usuario:', err);
        setLoading(false);
      }
    }
  };

  const handleAddExercise = (moduleName: string) => {
    navigation.navigate('ExerciseModules');
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

  const handleRegister = async () => {
    if (!nombres || !apellidos || !telefono || !email || !password) {
      Alert.alert('Ups!', 'Todos los campos son requeridos.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await user.sendEmailVerification();

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

      setLoading(false);
    } catch (error) {
      console.error('Error al registrar:', error);
      Alert.alert('Error', 'Error al registrar usuario. Por favor, verifica los datos ingresados.');
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: Usuario }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombres}</Text>
      <TouchableOpacity style={styles.actionButton} onPress={() => handleAddExercise('Tobillo')}>
        <Text style={styles.buttonTextAV}>Agregar Ejercicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => handleViewInfo(item)}>
        <Text style={styles.buttonTextAV}>Ver Información</Text>
      </TouchableOpacity>
    </View>
  );

  const [menuVisible, setMenuVisible] = useState(false);
  const menuHeight = useRef(new Animated.Value(0)).current;

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
        <Image
          source={require('../images/terapp.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={toggleMenu}>
          <Text style={styles.menuIcon}>≡</Text> 
        </TouchableOpacity>
        {menuVisible && (
          <Animated.View style={[styles.menu, { height: menuHeight }]}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ProfileFi')}>
              <Text style={styles.menuText}>Mi cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={styles.menuText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
      <View style={styles.infoContainer}>
      <View style={styles.infoContainerN}>
        <Text style={styles.title}>Bienvenido Fisioterapeuta, {userName}</Text>
      </View>
        <TouchableOpacity style={styles.addButton} onPress={() => setRegisterModalVisible(true)}>
          <Text style={styles.buttonTextAV}>Agregar Paciente</Text>
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
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#E0E0E0"
                  value={currentUsuario.email}
                  onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, email: text })}
                />
                <View style={styles.buttonContainerModal}>
              <TouchableOpacity style={[styles.ButtonModal, styles.saveButton, loading && { opacity: 0.6 }]} onPress={handleSave}disabled={loading}>
                {loading ? (
                <Text style={styles.buttonTextCarga}>Guardando...</Text>
                ) : (
                 <Text style={styles.buttonTextAV}>Guardar</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ButtonModal, styles.cancelButton]} onPress={() => setModalVisible(false)}>
               <Text style={styles.buttonTextModal}>Cancelar</Text>
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
                 <View style={styles.infoRow}>
                   <Text style={styles.infoHeader}>Rol:</Text>
                   <Text style={styles.infoCell}>{infoUsuario.rol}</Text>
                 </View>
               </View>
               <View style={styles.buttonContainerModal}>
               <TouchableOpacity style={[styles.ButtonModal, styles.editButton]} onPress={handleEditInfo}>
                 <Text style={styles.buttonTextModal}>Editar</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.ButtonModal, styles.cancelButton]} onPress={() => setInfoModalVisible(false)}>
                 <Text style={styles.buttonTextModal}>Cerrar</Text>
               </TouchableOpacity>
               </View>
             </ScrollView>
           </View>
         </Modal>
        )}

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
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#E0E0E0"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#E0E0E0"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <View style={styles.buttonContainerModal}>
              <TouchableOpacity style={[styles.ButtonModal, styles.editButton]} onPress={handleRegister}>
                 <Text style={styles.buttonTextModal}>{loading ? 'Registrando...' : 'Registrar'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ButtonModal, styles.cancelButton]}onPress={() => setRegisterModalVisible(false)}>
                <Text style={styles.buttonTextModal}>Cancelar</Text>
              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default FisioterapeutaHome;
