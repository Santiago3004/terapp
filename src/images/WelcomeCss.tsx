import { StyleSheet } from "react-native";

const WelcomeCss = StyleSheet.create({
        container: {
          flexGrow: 1,
          alignItems: 'center',
          backgroundColor: '#E0E0E0',
        },
        topContainer: {
          height: 150,
          width: '100%',
          backgroundColor: '#262a5b',
          justifyContent: 'center',
          borderBottomWidth: 4,
          borderBottomColor: '#5C6BC0',
          marginBottom: 20,
        },
        headerContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        iconContainer: {
          padding: 10,
          position: 'absolute',
          right: 10,
        },
        logo: {
          width: 200,
          height: 100,
          resizeMode: 'contain',
        },
        infoContainer: {
          width: '95%',
          backgroundColor: '#262a5b',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          marginBottom: 20,
          zIndex:-1,
          borderWidth: 2,
          borderColor: '#5C6BC0',
        },
        welcomeText: {
          fontSize: 24,
          color: '#5C6BC0',
          fontWeight: 'bold',
          marginVertical: 10,
          textAlign: 'center',
        },
        description: {
          textAlign: 'center',
          color: '#fff',
        },
        modulesContainer: {
          width: '90%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        module: {
          width: '45%',
          alignItems: 'center',
          marginBottom: 20,
        },
        moduleImage: {
          width: 120,
          height: 120,
          borderRadius: 10,
          resizeMode: 'cover',
        },
        moduleText: {
          marginTop: 10,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#5C6BC0',
          textAlign: 'center',
        },
      });
      

export default WelcomeCss;
