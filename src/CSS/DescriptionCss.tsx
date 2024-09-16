import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DescriptionCss = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E0E0E0',
  },
  topContainer: {
    height: hp('15%'),
    width: wp('100%'),
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#5C6BC0',
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  closeButton: {
    position: 'absolute',
    left: wp('2%'),
    top: hp('1%'),
  },
  closeButtonText: {
    fontSize: wp('6%'),
    color: '#E0E0E0',
  },
  listContainer: {
    padding: wp('5%'),
  },
  exerciseItem: {
    backgroundColor: '#5C6BC0',
    borderRadius: 5,
    padding: wp('4%'),
    marginBottom: hp('2%'),
  },
  exerciseTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  exerciseDescription: {
    fontSize: wp('4%'),
    color: '#E0E0E0',
  },
  confirmButton: {
    backgroundColor: '#8E24AA',
    padding: hp('1.5%'),
    borderRadius: 5,
    alignItems: 'center',
    margin: wp('5%'),
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
  },
});

export default DescriptionCss;
