import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ForgotPasswordCss = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: hp('20%'), // Altura adaptada al 20% del alto de la pantalla
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    borderBottomWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderBottomColor: '#5C6BC0',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingTop: hp('15%'), // Padding superior adaptado al 15% del alto de la pantalla
    paddingHorizontal: wp('7.5%'), // Padding horizontal adaptado al 7.5% del ancho de la pantalla
  },
  button: {
    backgroundColor: '#5C6BC0',
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('1%'), // Margen inferior adaptado al 1% del alto de la pantalla
    borderWidth: hp('0.3%'), // Grosor del borde adaptado al 0.3% del alto de la pantalla
    borderColor: '#E0E0E0',
    width: wp('50%'),
    height: wp('14%'), // Ancho adaptado al 80% del ancho de la pantalla
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
  },
  logo: {
    width: wp('70%'), // Ancho adaptado al 70% del ancho de la pantalla
    height: wp('70%'), // Altura adaptada al 70% del ancho de la pantalla
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#262a5b',
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    borderRadius: wp('2.5%'), // Radio de borde adaptado al 2.5% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
    borderWidth: hp('0.5%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderColor: '#5C6BC0',
  },
  recoverTitle: {
    fontSize: wp('6%'), // Tamaño de fuente adaptado al 6% del ancho de la pantalla
    color: '#fff',
    marginBottom: hp('2.5%'), // Margen inferior adaptado al 2.5% del alto de la pantalla
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderBottomWidth: hp('0.2%'), // Grosor del borde inferior adaptado al 0.2% del alto de la pantalla
    borderBottomColor: '#fff',
    color: '#000',
    marginBottom: hp('2.5%'), // Margen inferior adaptado al 2.5% del alto de la pantalla
    padding: hp('1%'), // Padding adaptado al 1% del alto de la pantalla
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: hp('2.5%'), // Margen superior adaptado al 2.5% del alto de la pantalla
  },
  goBack: {
    color: '#5C6BC0',
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
  },
  errorText: {
    color: 'red',
    marginBottom: hp('1%'), // Margen inferior adaptado al 1% del alto de la pantalla
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4.5%'), // Tamaño de fuente adaptado al 4.5% del ancho de la pantalla
    fontWeight: 'bold',
  },
  loader: {
    marginBottom: hp('1.5%'), // Margen inferior adaptado al 1.5% del alto de la pantalla
  },
});

export default ForgotPasswordCss;
