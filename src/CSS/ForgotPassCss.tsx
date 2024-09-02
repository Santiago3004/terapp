import { StyleSheet } from "react-native";

const ForgotPasswordCss = StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      height: 170,
      backgroundColor: '#262a5b',
      justifyContent: 'center',
      borderBottomWidth: 4,
      borderBottomColor: '#5C6BC0',
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: '#E0E0E0',
      paddingTop: 120,
      paddingHorizontal: 30,
    },
    button: {
      backgroundColor: '#5C6BC0',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 1,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width: '80%',
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
      borderWidth: 2,
      borderColor: '#5C6BC0',
    },
    recoverTitle: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 20,
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      color: '#000',
      marginBottom: 20,
      padding: 5,
      textAlign: 'center',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginTop: 20,
    },
    goBack: {
      color: '#5C6BC0',
      fontSize: 14,
    },
    errorText:{
      color: 'red',
      marginBottom: 10
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    loader: {
      marginBottom: 10,
    },
  });

export default ForgotPasswordCss