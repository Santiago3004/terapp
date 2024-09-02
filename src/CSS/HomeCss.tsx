import { StyleSheet } from "react-native";

const HomeCss = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E0E0E0',
    },
    topContainer: {
      height: 220,
      backgroundColor: '#262a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 4,
      borderBottomColor: '#5C6BC0',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
      
    },
    outerContainer: {
      backgroundColor: '#262a5b', // Azul
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
      borderWidth: 2,
      borderColor: '#5C6BC0',
    },
    logo: {
      width: 190,
      height: 190,
      resizeMode: 'contain',
    },
    button: {
      backgroundColor: '#5C6BC0',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width: '80%',
    },
    infoContainer: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
    },
    infoButton: {
      backgroundColor: '#8E24AA',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
      width: '60%',
      alignItems: 'center',
    },
    infoButtonText: {
      color: '#fff',
      fontSize: 14,
    },
    description: {
      fontSize: 16,
      color: '#333',
      textAlign: 'center',
    },
    logoOverlay: {
      width: 100,
      height: 120,
      resizeMode: 'contain',
      position: 'absolute',
      top: '26%',
      left: '50%',
      transform: [{ translateX: -50 }, { translateY: -50 }],
    },
  });

export default HomeCss;
