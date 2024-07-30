import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/App';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const ProfileScreen: React.FC<Props> = ({ route, navigation }) => {
  /* const { userName, email, phone } = route.params; */

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText} onPress={() => navigation.navigate('Profile')}>←</Text>
        </TouchableOpacity>
        <View style={styles.profilePicture}>
          <Text style={styles.profileIcon}>👤</Text>
        </View>
        {/* <Text style={styles.name}>{userName}</Text>
        <Text style={styles.location}>{email}</Text>
        <Text style={styles.location}>{phone}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  profileIcon: {
    fontSize: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#777',
  },
});

export default ProfileScreen;
