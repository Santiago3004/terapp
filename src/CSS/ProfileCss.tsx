import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    backgroundColor: '#262a5b',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: hp('5%'), // Espacio inferior adaptado al 5% del alto de la pantalla
  },
  closeButton: {
    position: 'absolute',
    top: hp('-3%'), // Ajustar el espacio superior para cerrar el botón
    left: wp('-2%'), // Ajustar el espacio izquierdo para cerrar el botón
  },
  closeButtonText: {
    fontSize: wp('10%'), // Tamaño del texto del botón basado en el ancho de la pantalla
    color: '#fff',
  },
  profileImage: {
    top: hp('3%'), // Ajuste vertical basado en el alto de la pantalla
    width: wp('60%'), // Ancho adaptado al 60% del ancho de la pantalla
    height: wp('60%'), // Altura adaptada al 60% del ancho de la pantalla (mantiene la proporción cuadrada)
    borderRadius: wp('30%'), // Radio de borde basado en el ancho de la pantalla
    borderWidth: 3,
    borderColor: '#fff',
  },
  title: {
    fontSize: wp('7%'), // Tamaño de la fuente basado en el ancho de la pantalla
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('5%'), // Margen inferior adaptado al 5% del alto de la pantalla
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
    color: '#fff',
  },
  buttonContainer: {
    marginTop: hp('5%'), // Margen superior adaptado al 5% del alto de la pantalla
    alignItems: 'center',
  },
  buttonContainerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ButtonModal: {
    flex: 1,
    padding: wp('3%'), // Padding adaptado al 3% del ancho de la pantalla
    borderRadius: 5,
    marginHorizontal: wp('2%'), // Margen horizontal adaptado al 2% del ancho de la pantalla
    alignItems: 'center',
  },
  button: {
    width: wp('80%'), // Ancho adaptado al 80% del ancho de la pantalla
    height: hp('7%'), // Altura adaptada al 7% del alto de la pantalla
    backgroundColor: '#007BFF',
    paddingVertical: hp('1.5%'), // Padding vertical adaptado al 1.5% del alto de la pantalla
    paddingHorizontal: wp('5%'), // Padding horizontal adaptado al 5% del ancho de la pantalla
    borderRadius: 5,
    marginVertical: hp('1%'), // Margen vertical adaptado al 1% del alto de la pantalla
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'), // Tamaño de la fuente adaptado al 4% del ancho de la pantalla
  },
  buttonTextPrincipales: {
    color: '#fff',
    fontSize: wp('5%'), // Tamaño de la fuente adaptado al 5% del ancho de la pantalla
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#5C6BC0',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  ButtonInfo: {
    backgroundColor: '#5C6BC0',
  },
  saveButton: {
    backgroundColor: '#5C6BC0',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  infoModalView: {
    width: wp('80%'), // Ancho adaptado al 80% del ancho de la pantalla
    backgroundColor: '#262a5b',
    borderRadius: 10,
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: wp('5%'), // Tamaño de la fuente adaptado al 5% del ancho de la pantalla
    fontWeight: 'bold',
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
    color: '#E0E0E0',
  },
  infoTable: {
    marginBottom: hp('3%'), // Margen inferior adaptado al 3% del alto de la pantalla
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: hp('2%'), // Margen inferior adaptado al 2% del alto de la pantalla
  },
  infoHeader: {
    fontWeight: 'bold',
    width: wp('30%'), // Ancho adaptado al 30% del ancho de la pantalla
    color: '#E0E0E0',
  },
  infoCell: {
    flex: 1,
    color: '#5C6BC0',
  },
  modalView: {
    width: wp('80%'), // Ancho adaptado al 80% del ancho de la pantalla
    backgroundColor: '#262a5b',
    borderRadius: 10,
    padding: wp('5%'), // Padding adaptado al 5% del ancho de la pantalla
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
});

export default styles;
