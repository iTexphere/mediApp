import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors';

export default StyleSheet.create({
  loginWrap: {
    backgroundColor: Colors.white
  },
  loginInnerWrap: {
    flex: 1,
    padding: 20
  },
  logoArea: {
    justifyContent: 'center',
    width: '100%',
    // height:'100%',
    alignItems: 'center',
    flex: 1,
    height: 200
  },
  formArea: {
    width: '100%'
  },
  formInnerWrap: {},
  inputIcon: {
    width: 30,
    color: Colors.lightGray
  },
  usernameWrap: {
    padding: 10,
    //borderColor: Colors.black,
    borderBottomWidth: 0,
    marginBottom: 10
  },
  loginBtnWrap: {
    marginTop: 20,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 60,
    backgroundColor: Colors.primaryBtn
  },
  loginBtnTxt: {
    color: Colors.white,
    fontSize: 22
  },
  loginFooterWrap: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10
  },
  dontHaveAccntTxt: {
    fontSize: 17,
    color: Colors.black
  },
  signupTxt: {
    color: Colors.secondaryBtn,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    width: '70%'
  }
});
