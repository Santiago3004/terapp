import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp('6%'), // Tamaño de fuente adaptado al 6% del ancho de la pantalla
    fontWeight: 'bold',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
    textAlign: 'center',
  },
  exerciseContainer: {
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    backgroundColor: '#f0f0f0',
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho de la pantalla
  },
  exerciseName: {
    fontSize: wp('5%'), // Tamaño de fuente adaptado al 5% del ancho de la pantalla
    fontWeight: 'bold',
  },
  exerciseDetail: {
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
    color: '#666',
  },
  backButton: {
    marginTop: hp('3%'), // Margen superior adaptado al 3% del alto de la pantalla
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    backgroundColor: '#2196F3',
    borderRadius: wp('2%'), // Radio de borde adaptado al 2% del ancho de la pantalla
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de fuente adaptado al 4% del ancho de la pantalla
    fontWeight: 'bold',
  },
});
