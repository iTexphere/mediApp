/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './app/utils/Colors';

import Login from './app/screens/login';
import Home from './app/screens/home';
//import Details from './app/screens/details';
import Search from './app/screens/search';
import Registration from './app/screens/registration';
import { rootStackParamList } from './Nav_types';

const DrawerNav = createDrawerNavigator();

const HomeStack = createStackNavigator<rootStackParamList>();

const HomeStackScreen = () => {
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
        name="Home"
        options={{ headerShown: false }}
        component={Home}
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
        onPress={() => /*props.navigation.navigate('Search')*/ console.log()}
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

const App: React.SFC = () => {
  return (
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
        <DrawerNav.Screen name="Home" component={HomeStackScreen} />
      </DrawerNav.Navigator>
    </NavigationContainer>
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
