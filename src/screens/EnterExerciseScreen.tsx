import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EnterExerciseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [instructions, setInstructions] = useState('');
  const [exerciseImage, setExerciseImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setExerciseImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    navigation.navigate('ExerciseDetail', { instructions, exerciseImage });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Instrucciones del ejercicio:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Escribe las instrucciones aquí..."
      />
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>
      {exerciseImage && <Image source={{ uri: exerciseImage }} style={styles.image} />}
      <Button title="Guardar Ejercicio" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ADD8E6',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4B0082',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default EnterExerciseScreen;
