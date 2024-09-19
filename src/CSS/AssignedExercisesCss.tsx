import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  topContainer: {
    height: hp('20%'),
    width: '100%',
    backgroundColor: '#262a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: hp('0.5%'),
    borderBottomColor: '#5C6BC0',
    marginBottom: hp('2%'),
    position: 'relative',
  },
  logo: {
    width: wp('50%'),
    height: hp('15%'),
    resizeMode: 'contain',
  },
  infoContainer: {
    width: wp('90%'),
    backgroundColor: '#262a5b',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
    zIndex: -1,
    borderWidth: hp('0.5%'),
    borderColor: '#5C6BC0',
  },
  welcomeText: {
    fontSize: wp('5%'),
    color: '#5C6BC0',
    fontWeight: 'bold',
    marginVertical: hp('1.5%'),
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: wp('4%'),
  },
  exercisesContainer: {
    paddingHorizontal: wp('4%'),
  },
  exercise: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262a5b',
    padding: wp('3%'),
    marginBottom: hp('2%'),
    borderRadius: wp('2%'),
    borderWidth: 2.5,
    borderColor: '#5C6BC0',
    width: wp('80%'),
  },
  exerciseImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('1%'),
    borderWidth: 1.5,
    borderColor: '#fff',
    resizeMode: 'contain',
  },
  exerciseText: {
    flex: 1,
    marginLeft: wp('3%'),
    fontSize: wp('4%'),
    color: '#fff',
  },
});

export default styles;
