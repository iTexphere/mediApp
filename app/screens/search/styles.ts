import {
  StyleSheet
} from 'react-native';
import Colors from '../../utils/Colors'

export default StyleSheet.create({
  searchWrap:{
    paddingLeft:20,
    paddingRight:20,
  },
  searchTopWrap:{
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    borderBottomWidth:1,
    borderColor:Colors.ash2
  },
  doctorNameIcon:{
    color:Colors.darkGray,
    marginTop:9,
    fontSize:26,
  },
  doctorInputrow:{
    // borderWidth:1
    // borderBottomColor:Colors.primaryBtn,
  },
  doctorNameInput:{
    paddingTop:0,
    color:Colors.darkGray
    //paddingBottom:0,
  },
  dropdownStyle:{
    // paddingTop:30,
    marginTop:5,
    color:Colors.darkGray
  },
  searchBtnWrap:{
    marginTop:10,
    // padding:10,
    // marginBottom:10,
    borderRadius:5, 
    // height:60,
    backgroundColor:Colors.themeGreen,
    width:100,
    alignSelf:'center',
    marginBottom:10,
    

  },
  searchBtnTxt:{
    color:Colors.white,
    fontSize:14
  },
})