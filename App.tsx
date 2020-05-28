/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState, createContext, useReducer, useMemo, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from './app/utils/Colors';

import Login from './app/screens/patient/login';
import Home from './app/screens/patient/home';
//import Details from './app/screens/details';
import Search from './app/screens/patient/search';
import Booking from './app/screens/patient/myBookings/booking';
import Loader from "./app/components/Loader";
import Registration from './app/screens/patient/patientRegistration';
import MedicalLogin from './app/screens/medicalCenter/medicalLogin';
import MedicalRegistration from './app/screens/medicalCenter/medicalRegister';
import AsyncStorage from "@react-native-community/async-storage";
// import database from '@react-native-firebase/database';
import { rootStackParamList } from './Nav_types';
import Channel from './app/screens/patient/channel';

export const AuthContext = createContext();



const DrawerNav = createDrawerNavigator();

const HomeStack = createStackNavigator<rootStackParamList>();


const AuthStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: Colors.white
      }}
    >
      <HomeStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <HomeStack.Screen
        name="Registration"
        options={{ headerShown: false }}
        component={Registration}
      />
      <HomeStack.Screen
        name="Auth"
        options={{ headerShown: false }}
        component={MedicalLogin}
      />
      <HomeStack.Screen
        name="MedicalRegistration"
        options={{ headerShown: false }}
        component={MedicalRegistration}
      />
    </HomeStack.Navigator>
  );
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: Colors.white
      }}
    >
      <HomeStack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <HomeStack.Screen
        name="Channel"
        options={{ headerShown: false }}
        component={Channel}
      />
      <HomeStack.Screen
        name="Booking"
        options={{ headerShown: false }}
        component={Booking}
      />
      <HomeStack.Screen
        name="Search"
        options={{ headerStyle: { backgroundColor: Colors.headerBackground } }}
        component={Search}
      />
    </HomeStack.Navigator>
  );
};

const CustomDrawerContent: React.SFC<any> = props => {
  const { signOut } = React.useContext(AuthContext);
  // console.log(props)
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerBannerWrap}>
        {/* <Image source={require('./app/assests/logo1.png')} style={{height:100, width:100}}/> */}
        <Text style={styles.drawerBannerTitle}>Medical App </Text>
      </View>

      <DrawerItem
        label="Home"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'home'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Search"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'search'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => props.navigation.navigate('Search')}
      />
      <DrawerItem
        label="My Profile"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'user'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => /*props.navigation.navigate('Search')*/ console.log()}
      />
      <DrawerItem
        label="My Bookings"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'book'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => props.navigation.navigate('Booking')}
      />
      <DrawerItem
        label="Logout"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'logout'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => {


          Alert.alert(
            'Logout',
            'Are you sure you want to logout ?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              {
                text: 'OK', onPress: async () => {

                  signOut();
                  await AsyncStorage.removeItem('session')

                  // self.navigation.navigate('Login')
                }
              }
            ],
            { cancelable: false }
          );
        }}
      />
      {/* <DrawerItem
        label="Home"
        icon={({ focused, color, size }) => <Icon color={color} name={'home'} style={styles.drawerIconSize} />}
        activeTintColor={'#000'}
        focused={props.state.index === 0 ? true : false}
        onPress={()=> props.navigation.navigate('Home')}
      /> */}
    </DrawerContentScrollView>
  );
};

const CustomDrawerContentMedical: React.SFC<any> = props => {
  const { signOut } = React.useContext(AuthContext);
  // console.log(props)
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerBannerWrap}>
        {/* <Image source={require('./app/assests/logo1.png')} style={{height:100, width:100}}/> */}
        <Text style={styles.drawerBannerTitle}>Medical App </Text>
      </View>

      <DrawerItem
        label="Home"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'medicalHome'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => props.navigation.navigate('medicalHome')}
      />
      <DrawerItem
        label="Issue Number"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'issueNo'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => props.navigation.navigate('issueNo')}
      />
      <DrawerItem
        label="Logout"
        icon={({ focused, color, size }) => (
          <Icon color={color} name={'logout'} style={styles.drawerIconSize} />
        )}
        activeTintColor={Colors.primaryBtn}
        focused={props.state.index === 0 ? true : false}
        onPress={() => {


          Alert.alert(
            'Logout',
            'Are you sure you want to logout ?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              {
                text: 'OK', onPress: async () => {

                  signOut();
                  await AsyncStorage.removeItem('session')

                  // self.navigation.navigate('Login')
                }
              }
            ],
            { cancelable: false }
          );
        }}
      />
      {/* <DrawerItem
        label="Home"
        icon={({ focused, color, size }) => <Icon color={color} name={'home'} style={styles.drawerIconSize} />}
        activeTintColor={'#000'}
        focused={props.state.index === 0 ? true : false}
        onPress={()=> props.navigation.navigate('Home')}
      /> */}
    </DrawerContentScrollView>
  );
};

const App: React.SFC = ({ navigation }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            // isLoading: false,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  // const [token, setToken] = useState<String>('')
  // const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        const session = await AsyncStorage.getItem('session');
        if (session !== null) {
          const json = JSON.parse(session);
          userToken = json.access_token
        }
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  if (state.isLoading) {
    // console.log("Token", state.userToken)
    return <Loader loading={state.isLoading} />
  }



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
        <DrawerNav.Navigator
          drawerStyle={{
            backgroundColor: Colors.white,
            width: 330
          }}
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}
        >
          {state.userToken == null ? <DrawerNav.Screen name="Login" component={AuthStackScreen} /> : <DrawerNav.Screen name="Home" component={HomeStackScreen} />}

        </DrawerNav.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  drawerBannerWrap: {
    backgroundColor: Colors.themeBg,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: -5,
    minHeight: 100,
    padding: 20
  },
  drawerBannerTitle: {
    fontSize: 20,
    color: Colors.white
  },
  drawerBannerLogo: {
    width: 90,
    height: 90,
    marginBottom: 0,
    marginLeft: -15
  },
  drawerIconSize: {
    width: 30,
    fontSize: 28,
    textAlign: 'center',
    marginRight: -10
  }
});

export default App;
