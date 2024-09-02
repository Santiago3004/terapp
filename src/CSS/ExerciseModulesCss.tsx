import { StyleSheet } from "react-native";

const ExerciseModulesCss = StyleSheet.create({
  container: {
    flexGrow: 1,
    
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
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 35,
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  backButtonText: {
    fontSize: 35,
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5C6BC0',
  },
  modulesContainer: {
    paddingHorizontal: 6,
  },
  module: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262a5b',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  moduleImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  moduleText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#5C6BC0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ExerciseModulesCss;
