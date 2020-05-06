import React, { useState, FunctionComponent, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, FlatList } from 'react-native';
import styles from './style';
import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import { ChannelListItem } from '../../../components/ChannelListItem';
import { BookingColumn } from '../../../components/BookingColumn';
import { NearbyLocation } from '../../../components/NearbyLocation';
import { Container, Content, List, Text } from 'native-base';
import database from '@react-native-firebase/database';
import Colors from '../../../utils/Colors';

interface IDoctor {
  url: string;
  title: string;
  description: string;
}

// interface IFirbase {
//   issueNo: string;
//   ongoingno: string;
// }

const Home: FunctionComponent<{ navigation: any }> = ({ navigation }) => {
  const [ ongoingno, setOngoingno   ] = useState({});
  const [dataArray, setDataArray] = useState<IDoctor[]>([
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Amit Goswami',
      description: 'Phychologist'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Utpal Das',
      description: 'Physician'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Villanian Desug',
      description: 'Gynocholist'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Sunil Guha',
      description: 'General Doctor'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Amit Goswami',
      description: 'Phychologist'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Utpal Das',
      description: 'Physician'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Villanian Desug',
      description: 'Gynocholist'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Sunil Guha',
      description: 'General Doctor'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Amit Goswami',
      description: 'Phychologist'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Utpal Das',
      description: 'Physician'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Villanian Desug',
      description: 'Gynocholist'
    },
    {
      url: 'https://i.picsum.photos/id/91/100/100.jpg',
      title: 'Dr. Sunil Guha',
      description: 'General Doctor'
    }
  ]);

  useEffect(() => {
    database()
      .ref('/MedicalCenter')
      .on('value', (snapshot: any) => {
        setOngoingno(snapshot.val())
      });
  }, ongoingno)


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
            {/* <TextInput
              style={styles.headerInput}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder="Search"
              placeholderTextColor="white"
            /> */}
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
      <View style={styles.bookWrap}>
        <BookingColumn bookingNo={'25'} ongoingNo={'' + ongoingno.ongoingno} />
        <NearbyLocation location={'A/30, Srilanka, 100890'} />
      </View>
      <Container>
        <Content>
          <List>
            <FlatList
              data={dataArray}
              renderItem={({ item, index }) => (
                <ChannelListItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  onPressChannelBtn={() => alert('channel route screen')}
                />
              )}
            />
          </List>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
