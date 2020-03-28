import {
  StyleSheet
} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  ButtonRightAdd:{
    paddingBottom:0,
    borderBottomWidth:0
  },
  channelButton:{
    backgroundColor:Colors.primaryBtn,
    borderRadius:5,
    lineHeight:16,
    paddingTop:0,
    height:40,
    paddingBottom:0,
    justifyContent:'flex-start',
  },
  channelButtonIcon:{
    fontSize:18,
    paddingTop:2,
    marginLeft:10,
  },
  channelButtonText:{
    textTransform:'capitalize',
    fontSize:17,
    marginLeft:0,
    paddingLeft:5,
    paddingRight:10,
  },
  homeImage:{
    width:50,
    height:50,
    backgroundColor:Colors.ash2
  }
})