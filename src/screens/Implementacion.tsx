import React, { useState, useRef, useEffect } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { request, PERMISSIONS, check, RESULTS } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';

const apiUrl = 'https://51ca-152-200-176-25.ngrok-free.app/upload';

const Implementation = ({ navigation }: any) => {
  const [recording, setRecording] = useState<boolean>(false);
  const [cameraType, setCameraType] = useState<'front' | 'back'>('front');
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'pending'>('pending');
  const cameraRef = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device = devices.find(device => device.position === cameraType);

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        const status = await check(PERMISSIONS.ANDROID.CAMERA);
        if (status === RESULTS.BLOCKED || status === RESULTS.UNAVAILABLE) {
          setCameraPermission('denied');
        } else if (status === RESULTS.GRANTED) {
          setCameraPermission('granted');
        } else {
          const permissionStatus = await request(PERMISSIONS.ANDROID.CAMERA);
          setCameraPermission(permissionStatus === 'granted' ? 'granted' : 'denied');
        }
      } catch (error) {
        console.error('Error al verificar permisos:', error);
        setCameraPermission('denied');
      }
    };

    checkPermissions();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current && !recording && device) {
      try {
        setRecording(true);
        const options = { maxDuration: 60 };
        cameraRef.current.startRecording({
          ...options,
          onRecordingFinished: async (data) => {
            console.log('Video grabado:', data.path);
            const movedFilePath = await moveVideoFile(data.path);
            setVideoUri(movedFilePath);
            setRecording(false);
          },
          onRecordingError: (error) => {
            console.error('Error al grabar video:', error);
            setRecording(false);
          },
        });
      } catch (error) {
        console.error('Error al iniciar la grabación:', error);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current && recording) {
      try {
        cameraRef.current.stopRecording();
        setRecording(false);
      } catch (error) {
        console.error('Error al detener la grabación:', error);
      }
    }
  };

  const toggleCameraType = () => {
    setCameraType(prevCameraType => (prevCameraType === 'front' ? 'back' : 'front'));
  };

  const moveVideoFile = async (videoPath: string) => {
    try {
      const newDir = `${RNFS.CachesDirectoryPath}/com.terapp`;

      // Crear la carpeta si no existe
      await RNFS.mkdir(newDir);

      const cacheFilePath = `${newDir}/video.mp4`;
      await RNFS.moveFile(videoPath, cacheFilePath);
      console.log('Archivo movido a:', cacheFilePath);
      
      return cacheFilePath;
    } catch (error) {
      console.error('Error al mover el archivo:', error);
      throw error;
    }
  };

  const sendVideoToServer = async (fileUri: string) => {
    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      type: 'video/mp4',
      name: 'video.mp4',
    });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error en la red: ' + response.status);
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      Alert.alert('Éxito', 'El video se ha enviado correctamente.');

      // Eliminar el archivo temporal
      await deleteTemporaryFile(fileUri);

      navigation.navigate('AssignedExercises');
    } catch (error) {
      console.error('Error al enviar el video:', error);
      Alert.alert('Error', 'Hubo un problema al enviar el video.');
    }
  };

  const deleteTemporaryFile = async (filePath: string) => {
    try {
      await RNFS.unlink(filePath);
      console.log('Archivo temporal eliminado:', filePath);
    } catch (error) {
      console.error('Error al eliminar el archivo temporal:', error);
    }
  };

  const handleContinue = async () => {
    Alert.alert(
      'Confirmación',
      '¿Desea enviar el video?',
      [
        {
          text: 'No',
          onPress: () => {
            setVideoUri(null);
            setRecording(false);
          },
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: async () => {
            if (videoUri) {
              await sendVideoToServer(videoUri);
            } else {
              Alert.alert('Error', 'No se ha grabado ningún video.');
            }
          },
        },
      ]
    );
  };

  if (cameraPermission === 'pending') {
    return <Text>Verificando permisos de la cámara...</Text>;
  }

  if (cameraPermission === 'denied') {
    return <Text>Permiso de cámara denegado. Habilítalo en la configuración del dispositivo.</Text>;
  }

  return (
    <View style={styles.container}>
      {device ? (
        videoUri === null ? (
          <Camera
            ref={cameraRef}
            style={styles.camera}
            device={device}
            isActive={true}
            video={true}
          />
        ) : (
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: videoUri }}
              style={styles.video}
              controls={true}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        )
      ) : (
        <Text>No hay cámaras disponibles</Text>
      )}

      {device && videoUri === null && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.iconContainer} onPress={toggleCameraType}>
            <Icon name={cameraType === 'front' ? 'camera-front' : 'camera-rear'} size={30} color="#fff" />
            <Text style={styles.iconText}>
              {cameraType === 'front' ? 'Cámara Frontal' : 'Cámara Trasera'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, recording ? styles.stopButton : styles.startButton]}
            onPress={recording ? stopRecording : startRecording}
          >
            <Icon name={recording ? 'stop' : 'videocam'} size={30} color="#fff" />
            <Text style={styles.buttonText}>{recording ? 'Detener Grabación' : 'Iniciar Grabación'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  iconText: {
    color: '#fff',
    marginLeft: 10,
  },
  button: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  startButton: {
    backgroundColor: 'green',
  },
  stopButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 400,
  },
  continueButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  continueButtonText: {
    color: '#fff',
  },
});

export default Implementation;
