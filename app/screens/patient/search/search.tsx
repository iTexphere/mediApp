import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  ScrollView
} from 'react-native';
import styles from './styles';
import Colors from '../../../utils/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container, List, ListItem, Button, Header, Content, Text, Item, Picker, Icon, Label, Input } from 'native-base';
import { ChannelListItem } from '../../../components/ChannelListItem'

import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
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
    
  ])
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // const [chosenDate, setChosenDate] = useState(new Date())
  // console.log(chosenDate)

  // const setDate = () => {
  //   setChosenDate(chosenDate);
  // }

  // console.log(date);

  const [hospital, setHospital] = useState('');

  const [specialization, setSpecialization] = useState('')

  return (
    <SafeAreaView>
      <View style={styles.searchTopWrap}>
        <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
        <View style={styles.searchWrap}>
          <Item style={styles.doctorInputrow}>
            <Icon style={styles.doctorNameIcon} type="FontAwesome" name="user-md" />
            <Input style={[styles.doctorNameInput, { lineHeight: 20, paddingTop: 20 }]} placeholder='Doctor - Max 20 Characters' />
          </Item>

          <Item picker>
            <Icon style={styles.doctorNameIcon} type="FontAwesome" name="h-square" />
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Any Hospital"
              // placeholderStyle={{ color: Colors.darkGray }}
              style={styles.dropdownStyle}
              selectedValue={hospital}
              onValueChange={(txt) => setHospital(txt)}
            >
              <Picker.Item label="Any Hospital" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />

            </Picker>
          </Item>

          <Item picker>
            <Icon style={styles.doctorNameIcon} type="FontAwesome" name="plus-square" />
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Any Specialization"
              // placeholderStyle={{ color: Colors.darkGray }}
              style={styles.dropdownStyle}
              selectedValue={specialization}
              onValueChange={(txt) => setSpecialization(txt)}
            >
              <Picker.Item label="Any Hospital" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />

            </Picker>
          </Item>

          {/* <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View> */}

          <Item style={styles.doctorInputrow} onPress={showDatepicker}>
            <Icon style={[styles.doctorNameIcon, { fontSize: 22 }]} type="FontAwesome" name="calendar" />
            <Input style={[styles.doctorNameInput, { lineHeight: 20, paddingTop: 20 }]} value={` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} placeholder='Any date' disabled />
          </Item>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <Button style={styles.searchBtnWrap} onPress={() => alert('search')} primary={true} full>
            <Text style={styles.searchBtnTxt}>Search</Text>
          </Button>

        </View>
      </View>

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
    </SafeAreaView>
  )
}

export default Search;