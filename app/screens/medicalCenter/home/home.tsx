import React, { FunctionComponent, useEffect } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styles from './style';
import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import { Text } from 'native-base';

import Colors from '../../../utils/Colors';

interface IDoctor {
  url: string;
  title: string;
  description: string;
}

const Home: FunctionComponent<{ navigation: any; firebase: any }> = ({
  navigation,
}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      <View style={styles.headerWrap}>
        <View style={styles.headerInnerWrap}>
          <View style={styles.headerLeft}>
            <EnIcon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={styles.headerMenuIcon}
            />
          </View>

          <View style={styles.headerMiddle}>
            <Text style={styles.headerTxt}>Home</Text>
          </View>

          <View style={styles.headerRight}>
            <FaIcon
              name="search"
              onPress={() => navigation.navigate('Search')}
              style={styles.headerMenuIcon}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
