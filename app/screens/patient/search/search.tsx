import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';
import styles from './styles';
import Colors from '../../../utils/Colors';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container, List, ListItem, Button, Header, Content, Text, Item, Picker, Icon, Label, Input } from 'native-base';
import { ChannelListItem } from '../../../components/ChannelListItem';
import Loader from "../../../components/Loader/index";
import AsyncStorage from "@react-native-community/async-storage";


const Search = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dr_name, setDrName] = useState<String>('');
  const [center_name, setCenterName] = useState<String>('');
  const [city, setCity] = useState<String>('Malabe');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState<Boolean>(true)
  const [token, setToken] = useState<String>('');


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

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('session');
      if (value !== null) {
        // value previously stored
        const parse = JSON.parse(value)
        console.log("value", parse.access_token);
        setToken(parse.access_token)
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {


    const fetchDoctors = async () => {
      try {
        const value = await AsyncStorage.getItem('session');
        const parse = JSON.parse(value)
        const config = {
          headers: { 'Authorization': `Bearer ${parse.access_token}` }
        };

        // setCity(parse.info.city)
        const getDoctors = await axios.post(`http://likesgun.com/api/v1/patient/src`, { dr_name, center_name, city }, config);
        // const json = await getDoctors.json();
        setDoctors(getDoctors.data);
        setLoading(false);
      } catch (err) {
        console.log("errrr", err)
        setLoading(false)
      }

    }

    getData()
    // if (token !== "") {
    fetchDoctors()
    // }


  }, [])

  const searchDoctor = async () => {
    setLoading(true);
    try {

      const config = {
        headers: { 'Authorization': `Bearer ${token}` }
      };
      const getDoctors = await axios.post(`http://likesgun.com/api/v1/patient/src`, { dr_name, center_name, city }, config);
      // const json = await getDoctors.json();
      setDoctors(getDoctors.data);
      setLoading(false);
    } catch (err) {
      setLoading(false)
      // Alert.alert()
      // alert(err)
    }
  }

  // const [chosenDate, setChosenDate] = useState(new Date())
  // console.log(chosenDate)

  // const setDate = () => {
  //   setChosenDate(chosenDate);
  // }

  // console.log(date);



  return (
    <SafeAreaView>
      <View style={styles.searchTopWrap}>
        <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
        <Loader loading={loading} />
        <View style={styles.searchWrap}>
          <Item style={styles.doctorInputrow}>
            <Icon style={styles.doctorNameIcon} type="FontAwesome" name="user-md" />
            <Input style={[styles.doctorNameInput, { lineHeight: 20, paddingTop: 20 }]} onChangeText={(val) => setDrName(val)} placeholder='Doctor - Max 20 Characters' />
          </Item>

          <Item style={styles.doctorInputrow}>
            <Icon style={styles.doctorNameIcon} type="FontAwesome" name="user-md" />
            <Input style={[styles.doctorNameInput, { lineHeight: 20, paddingTop: 20 }]} onChangeText={(val) => setCenterName(val)} placeholder='Center Name' />
          </Item>

          <Item style={styles.doctorInputrow}>
            <Icon style={styles.doctorNameIcon} type="FontAwesome" name="user-md" />
            <Input style={[styles.doctorNameInput, { lineHeight: 20, paddingTop: 20 }]} value={city} onChangeText={(val) => setCity(val)} placeholder='City' />
          </Item>

          {/* <Item picker>
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
          </Item> */}

          {/* <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View> */}

          <Item style={styles.doctorInputrow} >
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

          <Button style={styles.searchBtnWrap} onPress={searchDoctor} primary={true} full>
            <Text style={styles.searchBtnTxt}>Search</Text>
          </Button>

        </View>
      </View>

      {doctors.data && <FlatList
        data={doctors.data}
        renderItem={(item, index) => {
          return <ChannelListItem
            key={index}
            title={item.item.dr_name}
            description={item.item.specialist_in}
            url={`https://i.picsum.photos/id/91/100/100.jpg`}
            onPressChannelBtn={() => alert('channel route screen')}

          />
        }}
      />}

    </SafeAreaView>
  )
}

export default Search;