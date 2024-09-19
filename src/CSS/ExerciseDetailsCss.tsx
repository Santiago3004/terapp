import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('0%'), // Añadimos un padding superior para que el contenido comience más arriba
  },
  image: {
    width: wp('55.5%'), // Aumenta el ancho de la imagen al 95% del ancho de la pantalla
    height: wp('100%'), // Ajusta la altura de la imagen
    marginBottom: hp('3%'), // Margen inferior entre la imagen y el contenedor de la información
    marginHorizontal: wp('2%'), // Margen horizontal a los lados de la imagen
    borderRadius: wp('5%'), // Bordes redondeados adaptados al 5% del ancho de la pantalla
    borderColor: '#5C6BC0', // Color del borde
  },
  
  title: {
    fontSize: wp('6%'), // Tamaño de fuente adaptado al 6% del ancho de la pantalla
    color: '#5C6BC0',
    fontWeight: 'bold',
    marginVertical: hp('1%'), // Margen vertical ajustado
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: wp('4%'),
  },
  infoContainer: {
    width: wp('90%'), // Ancho adaptado al 90% del ancho de la pantalla
    backgroundColor: '#262a5b',
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    borderRadius: wp('3%'), // Esquinas redondeadas
    alignItems: 'center',
    marginBottom: hp('5%'), // Mueve el contenedor más arriba
    zIndex: -1,
    borderWidth: hp('0.4%'), // Grosor del borde ajustado
    borderColor: '#5C6BC0',
  },
});

export default styles;
