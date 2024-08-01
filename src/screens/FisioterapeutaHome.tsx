import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TextInput, Modal, Alert, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

interface Usuario {
  id: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  email: string;
  rol: string;
}

const FisioterapeutaHome: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosSnapshot = await firestore()
          .collection('Usuarios')
          .where('rol', '==', 'paciente')  // Filtrar por el rol de paciente
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
    Alert.alert('Agregar Ejercicio', `Agregar ejercicio para el usuario con ID: ${id}`);
    // Lógica para agregar ejercicio
  };

  const renderItem = ({ item }: { item: Usuario }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombres}</Text>
      <Text style={styles.cell}>{item.apellidos}</Text>
      <Text style={styles.cell}>{item.telefono}</Text>
      <Text style={styles.cell}>{item.email}</Text>
      <Button title="Editar" onPress={() => handleEdit(item)} />
      <Button title="Agregar Ejercicio" onPress={() => handleAddExercise(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, Fisioterapeuta</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Nombres</Text>
          <Text style={[styles.cell, styles.header]}>Apellidos</Text>
          <Text style={[styles.cell, styles.header]}>Teléfono</Text>
          <Text style={[styles.cell, styles.header]}>Email</Text>
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
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombres"
              value={currentUsuario.nombres}
              onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, nombres: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellidos"
              value={currentUsuario.apellidos}
              onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, apellidos: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              value={currentUsuario.telefono}
              onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, telefono: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={currentUsuario.email}
              onChangeText={(text) => setCurrentUsuario({ ...currentUsuario, email: text })}
            />
            <View style={styles.buttonContainer}>
              <Button title="Guardar" onPress={handleSave} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  table: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',  // Alinea verticalmente los botones
  },
  cell: {
    flex: 1,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: '#ddd',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding: 35,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default FisioterapeutaHome;
