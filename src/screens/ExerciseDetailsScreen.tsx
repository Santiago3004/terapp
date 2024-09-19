import React from 'react';
import { View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../CSS/ExerciseDetailsCss';

const ExerciseDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { exercise } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      </View>
      <FastImage
        style={styles.image}
        source={exercise.image} // La imagen debe ser un GIF
        resizeMode={FastImage.resizeMode.contain} // Ajusta cómo se muestra la imagen
      />
    </View>
  );
};



export default ExerciseDetailsScreen;
