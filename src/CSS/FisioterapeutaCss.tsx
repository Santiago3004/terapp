import { StyleSheet } from "react-native";

const FisioterapeutaCss = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#E0E0E0',
    },
    topContainer: {
      height: 150,
      width: '100%',
      backgroundColor: '#262a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 4,
      borderBottomColor: '#5C6BC0',
    },
    logo: {
      width: 190,
      height: 190,
      resizeMode: 'contain',
    },
    infoContainer: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#5C6BC0',
    },
    addButton: {
      backgroundColor: '#8E24AA',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
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
      padding: 10,
      borderColor: '#5C6BC0',
      borderBottomWidth: 1,
    },
    header: {
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#fff'
    },
    actionButton: {
      backgroundColor: '#5C6BC0',
      padding: 10,
      marginHorizontal: 5,
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
      width: '80%',
      backgroundColor: '#262a5b',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#E0E0E0',
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      alignItems: 'center',
    },
    infoModalView: {
      width: '80%',
      backgroundColor: '#262a5b',
      borderRadius: 10,
      padding: 20,
      borderWidth: 2,
      borderColor: '#E0E0E0',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#E0E0E0',
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 5,
      marginBottom: 10,
      color:'#fff'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      flex: 1,
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5,
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
      marginBottom: 20,
    },
    infoRow: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoHeader: {
      fontWeight: 'bold',
      width: 100,
      color:'#E0E0E0'
    },
    infoCell: {
      flex: 1,
      color: '#5C6BC0',
    },
  });

export default FisioterapeutaCss;
  