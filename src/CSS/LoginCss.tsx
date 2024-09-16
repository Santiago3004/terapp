import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginCss = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: hp('25%'), // Altura adaptada al 30% del alto de la pantalla
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    borderBottomWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderBottomColor: '#5C6BC0',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingTop: hp('10%'), // Padding superior adaptado al 10% del alto de la pantalla
    paddingHorizontal: wp('8%'), // Padding horizontal adaptado al 8% del ancho de la pantalla
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
  },
  logo: {
    width: wp('70%'), // Ancho adaptado al 70% del ancho de la pantalla
    height: wp('70%'), // Altura adaptada al 70% del ancho de la pantalla (mantiene la proporción cuadrada)
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#262a5b',
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
    borderWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderColor: '#5C6BC0',
  },
  loginTitle: {
    fontSize: wp('6%'), // Tamaño de fuente adaptado al 6% del ancho de la pantalla
    color: '#fff',
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: hp('1%'), // Margen superior adaptado al 1% del alto de la pantalla
  },
  forgotPassword: {
    color: '#5C6BC0',
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
  },
  boton: {
    backgroundColor: '#5C6BC0',
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
    borderWidth: hp('0.3%'), // Grosor del borde adaptado al 0.3% del alto de la pantalla
    borderColor: '#E0E0E0',
    width: wp('50%'),// Ancho adaptado al 80% del ancho de la pantalla
    height:wp('14%'),
  },
  loader: {
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4.5%'), // Tamaño de fuente adaptado al 4.5% del ancho de la pantalla
    fontWeight: 'bold',
  }
});

export default LoginCss;
