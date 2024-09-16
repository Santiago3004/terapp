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
      width: wp('50%'), // Ancho del menú al 50% de la pantalla
      height: hp('25%'), // Altura del menú al 25% de la pantalla
      backgroundColor: '#5C6BC0',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#7f00b2',
      overflow: 'hidden',
      zIndex: 7,
    },
    menuItem: {
      padding: hp('1.2%'),
      borderBottomWidth: 1,
      borderBottomColor: '#7f00b2',
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
    },
    title: {
      fontSize: wp('6%'), // Tamaño de la fuente basado en el ancho de la pantalla
      fontWeight: 'bold',
      marginBottom: hp('2.5%'),
      color: '#5C6BC0',
      zIndex: -3,
    },
    addButton: {
      backgroundColor: '#8E24AA',
      padding: hp('1.5%'),
      marginVertical: hp('1.5%'),
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: wp('3.3%'),
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
      borderBottomColor: '#5C6BC0',
      borderRadius: 3,
    },
    cell: {
      flex: 1,
      padding: wp('3%'),
      borderColor: '#5C6BC0',
      borderBottomWidth: 1,
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
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
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