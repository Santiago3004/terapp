import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
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
  closeButton: {
    position: 'absolute',
    top: hp('2%'), // Ajustado al 2% del alto de la pantalla
    left: wp('2%'), // Ajustado al 2% del ancho de la pantalla
    padding: wp('2%'), // Ajustado al 2% del ancho de la pantalla
  },
  closeButtonText: {
    fontSize: wp('12%'), // Tamaño de fuente ajustado al 8% del ancho de la pantalla
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
  logo: {
    width: wp('50%'), // Ancho adaptado al 50% del ancho de la pantalla
    height: hp('15%'), // Altura adaptada al 15% del alto de la pantalla
    resizeMode: 'contain',
  },
  title: {
    fontSize: wp('6%'), // Tamaño de fuente ajustado al 6% del ancho de la pantalla
    fontWeight: 'bold',
    color: '#7f00b2',
    textAlign: 'center',
    marginVertical: hp('2%'), // Margen vertical ajustado al 2% del alto de la pantalla
  },
  exercisesContainer: {
    paddingHorizontal: wp('4%'), // Padding horizontal ajustado al 4% del ancho de la pantalla
  },
  exercise: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262a5b',
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    borderRadius: wp('2%'),
    borderWidth: 2.5,
    borderColor: '#5C6BC0',
    width: wp('80%'),   // Radio de borde ajustado al 2% del ancho de la pantalla
  },
  exerciseImage: {
    width: wp('12%'), // Ancho adaptado al 12% del ancho de la pantalla
    height: wp('22%'),
    borderRadius: wp('1%'),
    borderWidth: 1.5,
    borderColor: '#fff', // Altura adaptada al 12% del ancho de la pantalla
    resizeMode: 'contain',
  },
  exerciseText: {
    flex: 1,
    marginLeft: wp('3%'), // Margen izquierdo adaptado al 3% del ancho de la pantalla
    fontSize: wp('4%'), // Tamaño de la fuente adaptado al 4% del ancho de la pantalla
    color: '#fff',
  },
  infoContainer: {
    width: wp('90%'), // Ancho ajustado al 90% del ancho de la pantalla
    backgroundColor: '#262a5b',
    padding: wp('4%'), // Padding ajustado al 4% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde ajustado al 3% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('2%'), // Margen inferior ajustado al 2% del alto de la pantalla
    zIndex: -1,
    borderWidth: hp('0.5%'), // Grosor del borde ajustado al 0.5% del alto de la pantalla
    borderColor: '#5C6BC0',
  },
  welcomeText: {
    fontSize: wp('5%'), // Tamaño de fuente ajustado al 5% del ancho de la pantalla
    color: '#5C6BC0',
    fontWeight: 'bold',
    marginVertical: hp('1.5%'), // Margen vertical ajustado al 1.5% del alto de la pantalla
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de fuente ajustado al 4% del ancho de la pantalla
  },
  
  
  

  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  buttonsContainer: {
    flexDirection: 'column', // Mantiene la dirección de los botones en vertical
    alignItems: 'center', // Alinea los botones en el centro horizontalmente
    marginTop: hp('2%'), // Espacio superior adaptado
  },
  selectButton: {
    backgroundColor: '#5C6BC0', // Color para el botón "Seleccionar"
    paddingVertical: hp('1%'), // Padding vertical adaptado
    paddingHorizontal: wp('4%'), // Padding horizontal adaptado
    borderRadius: wp('3%'), // Bordes redondeados adaptados
    marginBottom: hp('1.5%'), // Espacio entre botones adaptado
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#7f00b2', // Color para el botón "Seleccionado"
    paddingVertical: hp('1%'), // Padding vertical adaptado
    paddingHorizontal: wp('3%'), // Padding horizontal adaptado
    borderRadius: wp('3%'), // Bordes redondeados adaptados
    marginBottom: hp('1.5%'), // Espacio entre botones adaptado
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('3.5%'), // Tamaño de fuente adaptado
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#fff', // Color verde para el botón "Ver Ejercicio"
    paddingVertical: hp('1%'), // Padding vertical adaptado
    paddingHorizontal: wp('3%'), // Padding horizontal adaptado
    borderRadius: wp('3%'), // Bordes redondeados adaptados
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#262a5b',
    fontSize: wp('3.5%'), // Tamaño de fuente adaptado
    fontWeight: 'bold',
  },
  assignButton: {
    backgroundColor: '#7f00b2',
    paddingVertical: hp('1.5%'), // Padding vertical adaptado
    paddingHorizontal: wp('5%'), // Padding horizontal adaptado
    borderRadius: wp('3%'), // Bordes redondeados adaptados
    alignItems: 'center',
    marginVertical: hp('2.5%'), // Espacio vertical adaptado
  },
  assignButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'), // Tamaño de fuente adaptado
    fontWeight: 'bold',
  },
});

export default styles;
