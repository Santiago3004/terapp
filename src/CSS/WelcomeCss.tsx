import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeCss = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  topContainer: {
    height: hp('20%'), // Altura adaptada al 20% del alto de la pantalla
    width: '100%',
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    borderBottomWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderBottomColor: '#5C6BC0',
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('3%'), // Padding horizontal adaptado al 3% del ancho de la pantalla
  },
  iconContainer: {
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
    position: 'absolute',
    right: wp('3%'), // Espacio adaptado al 3% del ancho de la pantalla desde el borde derecho
  },
  logo: {
    width: wp('50%'), // Ancho adaptado al 50% del ancho de la pantalla
    height: hp('15%'), // Altura adaptada al 15% del alto de la pantalla
    resizeMode: 'contain',
  },
  infoContainer: {
    width: wp('90%'), // Ancho adaptado al 90% del ancho de la pantalla
    backgroundColor: '#262a5b',
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    zIndex: -1,
    borderWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderColor: '#5C6BC0',
  },
  welcomeText: {
    fontSize: wp('6%'), // Tamaño de fuente adaptado al 6% del ancho de la pantalla
    color: '#5C6BC0',
    fontWeight: 'bold',
    marginVertical: hp('1.5%'), // Margen vertical adaptado al 1.5% del alto de la pantalla
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
  },
  modulesContainer: {
    width: wp('90%'), // Ancho adaptado al 90% del ancho de la pantalla
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  module: {
    width: wp('45%'), // Ancho adaptado al 45% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
  },
  moduleImage: {
    width: wp('30%'), // Ancho adaptado al 30% del ancho de la pantalla
    height: wp('30%'), // Altura adaptada al 30% del ancho de la pantalla para mantener proporción cuadrada
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho de la pantalla
    resizeMode: 'cover',
  },
  moduleText: {
    marginTop: hp('1.5%'), // Margen superior adaptado al 1.5% del alto de la pantalla
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
    fontWeight: 'bold',
    color: '#5C6BC0',
    textAlign: 'center',
  },
});

export default WelcomeCss;
