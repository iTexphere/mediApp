import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  //Text,
  StatusBar,
  //Button,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import styles from './style';
import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { ChannelListItem } from '../../components/ChannelListItem';
import { BookingColumn } from '../../components/BookingColumn';
import { NearbyLocation } from '../../components/NearbyLocation';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon, Text, Button } from 'native-base';
import Colors from '../../utils/Colors';


const Home = ({ navigation }) => {
  const [dataArray, setDataArray] = useState([
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
  ])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      <View style={styles.headerWrap}>
        <View style={styles.headerInnerWrap}>
          <View style={styles.headerLeft}>
            <EnIcon name="menu" onPress={() => navigation.openDrawer()} style={styles.headerMenuIcon} />
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
            <FaIcon name="search" onPress={() => navigation.navigate('Search')} style={styles.headerMenuIcon} />
          </View>
        </View>
      </View>
      <View style={styles.bookWrap}>
        <BookingColumn
        bookingNo={'25'}
        ongoingNo={12}
        />
        <NearbyLocation
        location={'A/30, Srilanka, 100890'}
        />
      </View>
      <Container>
        <Content>
          <List>
            <FlatList
              data={dataArray}
              renderItem={(item, index) => {
                return <ChannelListItem
                  key={index}
                  title={item.item.title}
                  description={item.item.description}
                  url={item.item.url}
                  onPressChannelBtn={() => alert('channel route screen')}

                />
              }}
            />

          </List>
        </Content>
      </Container>


    </SafeAreaView>
  )
}

export default Home;