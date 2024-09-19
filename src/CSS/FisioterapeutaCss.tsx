import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FisioterapeutaCss = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#E0E0E0',
    },
    topContainer: {
      height: hp('20%'), // Altura al 20% del alto de la pantalla
      width: wp('100%'), // Ancho al 100% del ancho de la pantalla
      backgroundColor: '#262a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 4,
      borderBottomColor: '#5C6BC0',
    },
    iconContainer: {
      padding: wp('2.5%'),
      position: 'absolute',
      right: wp('2%'),
    },
    menuIcon: {
      fontSize: wp('15%'), // Tamaño del ícono basado en el ancho de la pantalla
      color: '#5C6BC0',
    },
    menu: {
      position: 'absolute',
      top: hp('12%'),
      right: wp('2%'),
      width: wp('40%'), // Ancho del menú al 50% de la pantalla
      height: hp('2%'), // Altura del menú al 25% de la pantalla
      backgroundColor: '#262a5b',
      borderRadius: 5,
      borderWidth: 3,
      borderColor: '#5C6BC0',
      overflow: 'hidden',
      zIndex: 5,
    },
    menuItem: {
      padding: hp('1.2%'),
      borderBottomWidth: 3,
      borderBottomColor: '#5C6BC0',
    },
    menuText: {
      fontSize: wp('3.5%'), // Tamaño de la fuente responsivo
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
    },
    logo: {
      width: wp('40%'),
      height: hp('20%'),
      resizeMode: 'contain',
    },
    infoContainer: {
      padding: wp('5%'),
      zIndex: -1,
    },
    infoContainerN:{
      width: wp('90%'), // Ancho adaptado al 90% del ancho de la pantalla
    backgroundColor: '#262a5b',
    padding: wp('4%'), // Padding adaptado al 4% del ancho de la pantalla
    borderRadius: wp('3%'), // Radio de borde adaptado al 3% del ancho de la pantalla
    alignItems: 'center',
    marginBottom: 2, // Margen inferior adaptado al 2% del alto de la pantalla
    zIndex: -100,
    borderWidth: hp('0.4%'), // Grosor del borde adaptado al 0.5% del alto de la pantalla
    borderColor: '#5C6BC0',
    },
    title: {
      fontSize: wp('5%'), // Tamaño de fuente adaptado al 6% del ancho de la pantalla
      color: '#fff',
      fontWeight: 'bold',
      marginVertical: hp('1.5%'), // Margen vertical adaptado al 1.5% del alto de la pantalla
      textAlign: 'center',
    },
    addButton: {
      backgroundColor: '#8E24AA',
      padding: hp('1.5%'),
      marginVertical: hp('1.5%'),
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonTextAV: {
      color: '#fff',
      fontSize: wp('3.5%'), // Tamaño de la fuente adaptado al 4% del ancho de la pantalla
    },
    buttonTextCarga: {
      color: 'red',
      fontSize: wp('3.5%'), // Tamaño de la fuente adaptado al 4% del ancho de la pantalla
    },
    buttonTextModal: {
      color: '#fff',
      fontSize: wp('4%'), 
    },
    table: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#5C6BC0',
      borderRadius: 5,
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: '#262a5b',
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
      borderRadius: 3,
    },
    cell: {
      flex: 1,
      padding: wp('3%'),
      borderColor: '#E0E0E0',
      borderBottomWidth: 2,
      color:'#262a5b',
    },
    header: {
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#fff'
    },
    actionButton: {
      backgroundColor: '#5C6BC0',
      padding: wp('2%'),
      marginHorizontal: wp('1%'),
      borderRadius: 5,
      alignItems: 'center',
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      width: wp('80%'),
      backgroundColor: '#262a5b',
      borderRadius: 10,
      padding: wp('5%'),
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#E0E0E0',
    },
    row: {
      flexDirection: 'row',
      paddingVertical: hp('1%'),
      borderBottomWidth: 2,
      borderBottomColor: '#5C6BC0',
      alignItems: 'center',
    },
    infoModalView: {
      width: wp('80%'),
      backgroundColor: '#262a5b',
      borderRadius: 10,
      padding: wp('5%'),
      borderWidth: 2,
      borderColor: '#E0E0E0',
    },
    modalTitle: {
      fontSize: wp('4.5%'),
      fontWeight: 'bold',
      marginBottom: hp('2.5%'),
      color: '#E0E0E0',
    },
    input: {
      width: '100%',
      padding: wp('3%'),
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 5,
      marginBottom: hp('1.5%'),
      color:'#fff'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      flex: 1,
      padding: wp('3%'),
      borderRadius: 5,
      marginHorizontal: wp('1%'),
      alignItems: 'center',
    },
    saveButton: {
      backgroundColor: '#5C6BC0',
    },
    cancelButton: {
      backgroundColor: '#dc3545',
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

    editButton: {
      backgroundColor: '#5C6BC0',
    },
    closeButton: {
      backgroundColor: '#6c757d',
    },
    infoTable: {
      marginBottom: hp('2%'),
    },
    infoRow: {
      flexDirection: 'row',
      marginBottom: hp('1.5%'),
    },
    infoHeader: {
      fontWeight: 'bold',
      width: wp('25%'),
      color:'#E0E0E0'
    },
    infoCell: {
      flex: 1,
      color: '#5C6BC0',
    },
    infoText: {
      fontSize: 16,
      color: '#333',
      marginVertical: 10,
      lineHeight: 22,
    }  
      });

export default FisioterapeutaCss;