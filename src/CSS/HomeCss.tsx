import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeCss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  topContainer: {
    height: hp('25%'), // Altura adaptada al 25% del alto de la pantalla
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderBottomColor: '#5C6BC0',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'), // Padding horizontal adaptado al 5% del ancho de la pantalla
  },
  outerContainer: {
    backgroundColor: '#262a5b',
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho de la pantalla
    alignItems: 'center',
    width: wp('90%'), // Ancho adaptado al 90% del ancho de la pantalla
    borderWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderColor: '#5C6BC0',
  },
  logo: {
    width: wp('50%'), // Ancho adaptado al 50% del ancho de la pantalla
    height: wp('50%'), // Altura adaptada al 50% del ancho de la pantalla para mantener proporción cuadrada
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#5C6BC0',
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    borderWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderColor: '#E0E0E0',
    width: wp('80%'), // Ancho adaptado al 80% del ancho de la pantalla
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho de la pantalla
    alignItems: 'center',
    width: wp('80%'), // Ancho adaptado al 90% del ancho de la pantalla
  },
  infoButton: {
    backgroundColor: '#8E24AA',
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho de la pantalla
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    width: wp('60%'), // Ancho adaptado al 60% del ancho de la pantalla
    alignItems: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
  },
  description: {
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
    color: '#333',
    textAlign: 'center',
  },
  logoOverlay: {
    width: wp('25%'), // Ancho adaptado al 30% del ancho de la pantalla
    height: hp('15%'), // Altura adaptada al 15% del alto de la pantalla
    resizeMode: 'contain',
    position: 'absolute',
    top: hp('25%'), // Espacio desde el borde superior adaptado al 20% del alto de la pantalla
    left: wp('52%'), // Espacio desde el borde izquierdo adaptado al 35% del ancho de la pantalla para centrar el logo
    transform: [{ translateX: -wp('15%') }, { translateY: -hp('7.5%') }], // Ajuste para centrar el logo
  },
});

export default HomeCss;
