import React, { useEffect, useState } from 'react';
import { View, Text, Container, Content } from 'native-base';
import styles from './style';
import { SafeAreaView, StatusBar, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import database from '@react-native-firebase/database';

import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/store/types';
import Loader from '../../../components/Loader';

export default function IssueingNext({ navigation, route }) {
  const res = useSelector((state: RootState) => state.medicalAuth.data);
  const [issue, setIssue] = useState<any>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const { id } = res.user_info.info;
    database()
      .ref(`/${id}`)
      .on('value', (snapshot: any) => {
        console.log(snapshot.val());
        setIssue(snapshot.val());
      });
  }, [database, res]);

  const updateNext = () => {
    const { id } = res.user_info.info;
    setLoading(true);
    database()
      .ref(`/${id}`)
      .update({
        issued_no: issue.issued_no++,
      })
      .finally(() => setLoading(false));
  };

  const onGoingUpdate = () => {
    const { id } = res.user_info.info;
    setLoading(true);
    database()
      .ref(`/${id}`)
      .update({
        ongoing_no: issue.ongoing_no++,
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      <Loader loading={loading} />
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
            <Text>Center Code - {res.user_info.info.reg_no || '-'}</Text>
            <Text>Center Name - {res.user_info.info.center_name || '-'}</Text>
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
              <View
                style={{
                  flex: 0.8,
                  height: 70,
                  borderWidth: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 40 }}>{issue.issued_no + 1 || 1}</Text>
              </View>
              <Button
                title="Issue"
                color="red"
                onPress={() => {
                  updateNext();
                }}
              />
            </View>
            <Text>On Going number</Text>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  flex: 0.8,
                  height: 70,
                  borderWidth: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 40 }}>{issue.ongoing_no || 0}</Text>
              </View>
              <Button
                title="Next"
                color="#2196F3"
                onPress={() => {
                  onGoingUpdate();
                }}
              />
            </View>
          </View>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
