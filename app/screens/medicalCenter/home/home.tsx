import React, { useState, FunctionComponent, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, FlatList } from 'react-native';
import styles from './style';
import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { ChannelListItem } from '../../../components/ChannelListItem';
import { BookingColumn } from '../../../components/BookingColumn';
import { NearbyLocation } from '../../../components/NearbyLocation';
import { Container, Content, List, Text } from 'native-base';
import database from '@react-native-firebase/database';
import Colors from '../../../utils/Colors';
import Loader from '../../../components/Loader';

interface IDoctor {
  url: string;
  title: string;
  description: string;
}

// interface IFirbase {
//   issueNo: string;
//   ongoingno: string;
// }

const Home: FunctionComponent<{ navigation: any, firebase: any }> = ({ navigation }) => {
  const [ongoingno, setOngoingno] = useState({});
  const [loading, setLoading] = useState<Boolean>(true)
  const [doctors, setDoctors] = useState([]);
  const [booking, setBooking] = useState<any>({});
  const [city, setCity] = useState('');

  useEffect(() => {



  }, [])



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
            <Text style={styles.headerTxt}>Home</Text>
          </View>

          <View style={styles.headerRight}>
            <FaIcon
              name="IssueNo"
              onPress={() => navigation.navigate('issueNo')}
              style={styles.headerMenuIcon}
            />
          </View>
        </View>
      </View>
      <View style={styles.bookWrap}>
        <BookingColumn bookingNo={booking.booking_info && booking.booking_info.booking_no ? booking.booking_info.booking_no : 0} ongoingNo={'' + ongoingno ? ongoingno.ongoing_no : 0} />
        <NearbyLocation location={city || ''} />
      </View>
      <Container>
        <Content>
          <List>
            {doctors && <FlatList
              data={doctors}
              renderItem={({ item, index }) => (
                <ChannelListItem
                  key={index}
                  title={item.dr_name}
                  description={item.specialist_in}
                  url={`https://i.picsum.photos/id/91/100/100.jpg`}
                  onPressChannelBtn={() => navigation.navigate('Channel', item)}
                />
              )}
            />}

          </List>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
