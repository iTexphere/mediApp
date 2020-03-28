import {
  StyleSheet
} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  bookingCont:{
    backgroundColor:Colors.white,
  },
  currentBookingRow:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10,
    justifyContent:'center',
  },
  bookingHeading:{
    fontSize:20,
    textTransform:'capitalize',
    marginRight:15,
  },
  bookingIconWrap:{
   padding:7,
  },
  bookingIcon:{
    fontSize:22,
    paddingTop:2,
    color:Colors.primaryBtn,
  },
  currentBookingNuber:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:0,
    padding:15,
  },
  bookingBox:{
    
    // borderWidth:1,
    // borderColor:Colors.lightGray,
  },
  bookingNoHead:{
    fontSize:19,
    color:Colors.secondaryBtn,
  },
  bookingNo:{
    alignSelf:'center',
    fontSize:26,
  }
})