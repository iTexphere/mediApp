import React from 'react';
import { View, Text, Container, Content } from 'native-base';
import styles from './style';
import { SafeAreaView, StatusBar, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

export default function IssueingNext({ navigation }) {
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
            <Text style={styles.headerTxt}>Issueing Next</Text>
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
      <Container>
        <Content>
          <View style={styles.issueInnerWrap}>
            <Text>Center Code - 12345</Text>
            <Text>Center Name - Rusiru Medical Center</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 20,
            }}
          >
            <Text>Next Number</Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 50,
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <TextInput
                style={{
                  flex: 0.8,
                  height: 70,
                  borderWidth: 1,
                }}
              ></TextInput>
              <Button title="Issue" color="red" onPress={() => {}} />
            </View>
            <Text>On Going number</Text>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <TextInput
                style={{
                  flex: 0.8,
                  height: 70,
                  borderWidth: 1,
                }}
              ></TextInput>
              <Button title="Next" color="#2196F3" onPress={() => {}} />
            </View>
          </View>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
