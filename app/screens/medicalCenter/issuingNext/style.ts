import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors';

export default StyleSheet.create({
  headerWrap: {
    // borderWidth:1,
    backgroundColor: Colors.themeBg,
    //
  },
  bookWrap: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderWidth: 0,
  },
  headerInnerWrap: {
    marginHorizontal: 10,
    marginVertical: 3,
    // backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  issueInnerWrap: {
    flex: 1,
    // borderWidth:1,
    padding: 20,
  },
  headerLeft: {
    padding: 10,
  },
  headerRight: {
    padding: 10,
  },
  headerMiddle: {
    // borderWidth:1,
    flex: 1,
    marginHorizontal: 5,
  },
  headerInput: {
    height: 50,
    // borderWidth:1,
    fontSize: 18,
    lineHeight: 21,
    color: Colors.white,
  },
  headerTxt: {
    fontSize: 18,
    lineHeight: 21,
    color: Colors.white,
  },
  headerMenuIcon: {
    color: Colors.white,
    fontSize: 30,
  },
  renderIitemRowWrap: {
    borderWidth: 1,
    borderColor: Colors.ash2,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  homeImage: {},
});
