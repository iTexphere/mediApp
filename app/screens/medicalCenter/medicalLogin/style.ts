import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors';

export default StyleSheet.create({
  loginWrap: {
    // borderWidth:1,
    backgroundColor: Colors.white
    //flex: 1,
    // justifyContent:'space-around',
    //alignItems: 'flex-end',
  },
  loginInnerWrap: {
    flex: 1,
    // borderWidth:1,
    padding: 20
  },
  logoArea: {
    // borderWidth:1,
    justifyContent: 'center',
    width: '100%',
    //height:'100%',
    alignItems: 'center',
    flex: 1,
    height: 200
    // height:100,
    // width:100,
    // flex:1,
    // alignSelf:'center',
  },
  formArea: {
    // maxHeight:180,
    // borderWidth:1,
  },
  formInnerWrap: {},
  inputIcon: {
    width: 30,
    color: Colors.lightGray
  },
  usernameWrap: {
    // backgroundColor:'white',
    padding: 10,
    borderColor: Colors.black,
    marginBottom: 10
    //alignItems:'flex-end',
    // backgroundColor:'black'
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
  medicalAuth: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 80
  },
});
