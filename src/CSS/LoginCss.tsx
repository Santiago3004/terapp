import { StyleSheet } from "react-native";

const LoginCss = StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      height: 250,
      backgroundColor: '#262a5b',
      justifyContent: 'center',
      borderBottomWidth: 4,
      borderBottomColor: '#5C6BC0',
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: '#E0E0E0',
      paddingTop: 80,
      paddingHorizontal: 30,
    },
    headerContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    logo: {
      width: 280,
      height: 280,
      resizeMode: 'contain',
    },
    formContainer: {
      width: '100%',
      backgroundColor: '#262a5b',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 3,
      borderColor: '#5C6BC0',
    },
    loginTitle: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 20,
      fontWeight: 'bold',
    },
    footer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 1,
    },
    forgotPassword: {
      color: '#5C6BC0',
      fontSize: 14,
    },
    boton:{
      backgroundColor: '#5C6BC0',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width: '80%',
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },

    loader:{
      marginBottom: 10
    }
  });

  export default LoginCss;