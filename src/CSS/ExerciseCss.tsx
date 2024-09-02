import { StyleSheet } from "react-native";

const ExerciseCss = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#E0E0E0',
      },
      topContainer: {
        height: 150,
        backgroundColor: '#262a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#5C6BC0',
        marginBottom: 20,
        position: 'relative',
      },
      startButton: {
        backgroundColor: '#7f00b2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
      },
      startButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
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
      logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5C6BC0',
        textAlign: 'center',
        marginVertical: 20,
      },
      exercisesContainer: {
        paddingHorizontal: 10,
      },
      exercise: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262a5b',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      },
      exerciseImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
      },
      exerciseText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#E0E0E0',
      },
      button: {
        backgroundColor: '#5C6BC0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
    

export default ExerciseCss;