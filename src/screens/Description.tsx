import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../CSS/DescriptionCss';

const DescriptionScreen: React.FC = () => {
  const navigation = useNavigation();

  // Obtener los parámetros de la navegación
  const route = useRoute();
  const { selectedExercises } = route.params as { selectedExercises: { Nombre_Ejerc: string, Ejercicio: string }[] };

  // Renderizar cada ejercicio asignado
  const renderItem = ({ item }: { item: { Nombre_Ejerc: string, Ejercicio: string } }) => {
    return (
      <View style={styles.exerciseItem}>
        <Text style={styles.exerciseTitle}>{item.Nombre_Ejerc}</Text>
        <Text style={styles.exerciseDescription}>{item.Ejercicio}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Ejercicios Asignados</Text>
        </View>
      </View>

      <FlatList
        data={selectedExercises}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={() => Alert.alert('Ejercicios confirmados')}>
        <Text style={styles.confirmButtonText}>Confirmar Ejercicios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DescriptionScreen;
