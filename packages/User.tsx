import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import { rootStackParamList } from '../Nav_types';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from '../app/screens/patient/home';
import Channel from '../app/screens/patient/channel';
import Booking from '../app/screens/patient/myBookings/booking';
import Search from '../app/screens/patient/search';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { View, Icon } from 'native-base';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { logout } from '../app/src/store/actions/authAction';
import { RootState } from '../app/src/store/types';

const HomeStack = createStackNavigator<rootStackParamList>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: Colors.white,
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

const CustomDrawerContent: React.SFC<any> = (props) => {
  // console.log(props)
  const disptach = useDispatch();
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
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: async () => {
                  await AsyncStorage.removeItem('session');
                  disptach(logout());
                  // self.navigation.navigate('Login')
                },
              },
            ],
            { cancelable: false }
          );
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNav = createDrawerNavigator();

const User = () => {
  const res = useSelector((state: RootState) => state.auth.data);
  return (
    <>
      {res && res.access_token && res.user_info.role === 'patient' ? (
        <NavigationContainer>
          <StatusBar
            backgroundColor={Colors.statusBar}
            barStyle="light-content"
          />
          <DrawerNav.Navigator
            drawerStyle={{
              backgroundColor: Colors.white,
              width: 330,
            }}
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <DrawerNav.Screen name="Home" component={HomeStackScreen} />
          </DrawerNav.Navigator>
        </NavigationContainer>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  drawerBannerWrap: {
    backgroundColor: Colors.themeBg,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: -5,
    minHeight: 100,
    padding: 20,
  },
  drawerBannerTitle: {
    fontSize: 20,
    color: Colors.white,
  },
  drawerBannerLogo: {
    width: 90,
    height: 90,
    marginBottom: 0,
    marginLeft: -15,
  },
  drawerIconSize: {
    width: 30,
    fontSize: 28,
    textAlign: 'center',
    marginRight: -10,
  },
});

export default User;
