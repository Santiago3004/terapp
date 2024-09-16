import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ExerciseModulesCss = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E0E0E0', // Padding adaptado al 4% del ancho de la pantalla
  },
  topContainer: {
    height: hp('20%'), // Altura adaptada al 20% del alto de la pantalla
    width: '100%',
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    borderBottomWidth: wp('1%'), // Ancho del borde adaptado al 1% del ancho de la pantalla
    borderBottomColor: '#5C6BC0',
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('3%'), // Padding horizontal adaptado al 3% del ancho de la pantalla
  },
  logo: {
    width: wp('50%'), // Ancho adaptado al 50% del ancho de la pantalla
    height: hp('15%'), // Altura adaptada al 15% del alto de la pantalla
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: hp('2%'), // Espacio superior adaptado al 2% del alto de la pantalla
    left: wp('2%'), // Espacio izquierdo adaptado al 2% del ancho de la pantalla
    padding: wp('2%'), // Padding adaptado al 2% del ancho de la pantalla
  },
  closeButtonText: {
    fontSize: wp('8%'), // Tamaño del texto adaptado al 8% del ancho de la pantalla
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: wp('2%'), // Espacio izquierdo adaptado al 2% del ancho de la pantalla
    padding: wp('2%'), // Padding adaptado al 2% del ancho de la pantalla
  },
  backButtonText: {
    fontSize: wp('8%'), // Tamaño del texto adaptado al 8% del ancho de la pantalla
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
  title: {
    fontSize: wp('6%'), // Tamaño de la fuente adaptado al 6% del ancho de la pantalla
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp('2%'), // Espacio vertical adaptado al 2% del alto de la pantalla
    color: '#262a5b',
  },
  modulesContainer: {
    paddingHorizontal: wp('2%'), // Padding horizontal adaptado al 2% del ancho de la pantalla
  },
  module: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262a5b',
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho de la pantalla
  },
  moduleImage: {
    width: wp('12%'), // Ancho adaptado al 12% del ancho de la pantalla
    height: wp('12%'), // Altura adaptada al 12% del ancho de la pantalla
    resizeMode: 'contain',
  },
  moduleText: {
    flex: 1,
    marginLeft: wp('3%'), // Margen izquierdo adaptado al 3% del ancho de la pantalla
    fontSize: wp('4%'), // Tamaño de la fuente adaptado al 4% del ancho de la pantalla
    color: '#fff',
  },
  button: {
    backgroundColor: '#5C6BC0',
    paddingVertical: hp('1%'), // Padding vertical adaptado al 1% del alto de la pantalla
    paddingHorizontal: wp('4%'), // Padding horizontal adaptado al 4% del ancho de la pantalla
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho de la pantalla
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de la fuente adaptado al 4% del ancho de la pantalla
    fontWeight: 'bold',
  },
});

export default ExerciseModulesCss;
