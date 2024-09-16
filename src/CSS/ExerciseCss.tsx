/* import { StyleSheet } from "react-native";

const ExerciseCss = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center', // Centra horizontalmente todos los elementos hijos
    backgroundColor: '#f8f8f8', // Asegúrate de que haya un color de fondo adecuado
  },
      topContainer: {
        height: 150,
        width: '100%',
        backgroundColor: '#262a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#5C6BC0',
        marginBottom: 20,
        position: 'relative',
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
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
        width: 370,
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
      // Otros estilos que ya tienes...

  selectButton: {
    backgroundColor: '#007bff',  // Color para el botón de seleccionar
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#28a745',  // Cambia el color cuando está seleccionado (verde)
  },
  selectButtonText: {
    color: '#fff',  // Texto blanco
    fontWeight: 'bold',
  },
  assignButton: {
    backgroundColor: '#ff5722',  // Color del botón de "Asignar Ejercicios"
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'center',  // Centrar el botón en el contenedor
  },
  assignButtonText: {
    color: '#fff',  // Texto blanco
    fontSize: 18,
    fontWeight: 'bold',
  },
    });
    

export default ExerciseCss; */

import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ExerciseCss = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  topContainer: {
    height: hp('20%'), // Altura adaptada al 20% del alto de la pantalla
    width: '100%',
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto
    borderBottomColor: '#5C6BC0',
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto
    position: 'relative',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('3%'), // Padding horizontal adaptado al 3% del ancho de la pantalla
  },
  infoContainer: {
    width: '95%',
    backgroundColor: '#262a5b',
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho
    alignItems: 'center',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto
    zIndex: -1,
    borderWidth: hp('0.3%'), // Grosor del borde adaptado al 0.3% del alto
    borderColor: '#5C6BC0',
  },
  welcomeText: {
    fontSize: wp('6%'), // Tamaño de fuente adaptado al 6% del ancho
    color: '#5C6BC0',
    fontWeight: 'bold',
    marginVertical: hp('2%'), // Margen vertical adaptado al 2% del alto
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
  },
  startButton: {
    backgroundColor: '#7f00b2',
    paddingVertical: hp('2%'), // Padding vertical adaptado al 2% del alto
    paddingHorizontal: wp('5%'), // Padding horizontal adaptado al 5% del ancho
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho
    marginTop: hp('2%'), // Margen superior adaptado al 2% del alto
  },
  startButtonText: {
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: hp('1%'), // Adaptado al 1% del alto de la pantalla
    left: wp('2%'), // Adaptado al 2% del ancho de la pantalla
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
  },
  closeButtonText: {
    fontSize: wp('8%'), // Tamaño de fuente adaptado al 8% del ancho
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
  logo: {
    width: wp('50%'), // Ancho adaptado al 50% del ancho de la pantalla
    height: hp('15%'), // Altura adaptada al 15% del alto de la pantalla
    resizeMode: 'contain',
  },
  title: {
    fontSize: wp('6%'), // Tamaño de fuente adaptado al 6% del ancho
    fontWeight: 'bold',
    color: '#5C6BC0',
    textAlign: 'center',
    marginVertical: hp('3%'), // Margen vertical adaptado al 3% del alto
  },
  exercisesContainer: {
    paddingHorizontal: wp('3%'), // Padding horizontal adaptado al 3% del ancho de la pantalla
    width: wp('90%'), // Ancho adaptado al 90% del ancho de la pantalla
  },
  exercise: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262a5b',
    padding: wp('3%'), // Padding adaptado al 3% del ancho
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho
  },
  exerciseImage: {
    width: wp('12%'), // Ancho adaptado al 12% del ancho de la pantalla
    height: hp('6%'), // Altura adaptada al 6% del alto de la pantalla
    resizeMode: 'contain',
  },
  exerciseText: {
    flex: 1,
    marginLeft: wp('3%'), // Margen izquierdo adaptado al 3% del ancho
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho
    color: '#E0E0E0',
  },
  button: {
    backgroundColor: '#5C6BC0',
    paddingVertical: hp('2%'), // Padding vertical adaptado al 2% del alto
    paddingHorizontal: wp('5%'), // Padding horizontal adaptado al 5% del ancho
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho
    margin: wp('5%'), // Margen adaptado al 5% del ancho
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho
    fontWeight: 'bold',
  },
  selectButton: {
    backgroundColor: '#007bff', // Color para el botón de seleccionar
    paddingVertical: hp('2%'), // Padding vertical adaptado al 2% del alto
    paddingHorizontal: wp('5%'), // Padding horizontal adaptado al 5% del ancho
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho
    marginTop: hp('2%'), // Margen superior adaptado al 2% del alto
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#28a745', // Cambia el color cuando está seleccionado (verde)
  },
  selectButtonText: {
    color: '#fff', // Texto blanco
    fontWeight: 'bold',
  },
  assignButton: {
    backgroundColor: '#ff5722', // Color del botón de "Asignar Ejercicios"
    paddingVertical: hp('2.5%'), // Padding vertical adaptado al 2.5% del alto
    paddingHorizontal: wp('8%'), // Padding horizontal adaptado al 8% del ancho
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho
    marginVertical: hp('3%'), // Margen vertical adaptado al 3% del alto
    alignSelf: 'center', // Centrar el botón en el contenedor
  },
  assignButtonText: {
    color: '#fff', // Texto blanco
    fontSize: wp('4.5%'), // Tamaño de fuente adaptado al 4.5% del ancho
    fontWeight: 'bold',
  },
});

export default ExerciseCss;
