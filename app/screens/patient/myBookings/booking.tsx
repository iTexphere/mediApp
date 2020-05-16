import React, { useState, FunctionComponent, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, FlatList } from 'react-native';
import styles from './style';
import { Button, Text, H3 } from 'native-base';
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
import Icon from 'react-native-vector-icons/AntDesign';
import database from '@react-native-firebase/database';
import Colors from '../../../utils/Colors';
import Loader from '../../../components/Loader';

interface IDoctor {
    url: string;
    title: string;
    description: string;
}


const Booking: FunctionComponent<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [issueNo, setIssueNo] = useState<any>({});
    const [booking, setBooking] = useState<any>({});


    const reload = async () => {
        setLoading(true)
        try {
            const value = await AsyncStorage.getItem('session');
            if (value !== null) {
                const parse = JSON.parse(value)
                const config = {
                    headers: { 'Authorization': `Bearer ${parse.access_token}` }
                };

                const getBookings = await axios.get(`http://likesgun.com/api/v1/patient/my-booking`, config)

                const data = getBookings.data.data

                setBooking(data[0])
                setLoading(false)
            }
        } catch (err) {
            setLoading(false)
            console.log("errrrrrrrr", err)
        }
    }


    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            try {
                const value = await AsyncStorage.getItem('session');
                if (value !== null) {
                    const parse = JSON.parse(value)
                    const config = {
                        headers: { 'Authorization': `Bearer ${parse.access_token}` }
                    };

                    const getBookings = await axios.get(`http://likesgun.com/api/v1/patient/my-booking`, config)

                    const data = getBookings.data.data

                    setBooking(data[0])
                    setLoading(false)
                }
            } catch (err) {
                setLoading(false)
                console.log("errrrrrrrr", err)
            }
        }

        fetchData();

    }, [])

    useEffect(() => {
        if (booking.medical) {
            database()
                .ref(`/${booking.medical.id}`)
                .on('value', (snapshot: any) => {
                    setIssueNo(snapshot.val())
                });
        }
    }, [database, booking])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
            <Loader loading={loading} />
            <View style={{ padding: 20 }}  >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <H3 >My Current Bookings</H3>
                    <Icon name={'reload1'} onPress={reload} size={22} />
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 40 }}  >
                    <View style={{ borderWidth: 1, borderStyle: 'solid', padding: 20, alignItems: 'center', borderColor: 'lightgrey' }}  >
                        <Text>Booked No</Text>
                        <Text style={{ fontSize: 25, color: 'blue', fontWeight: 'bold' }}  >{booking.booking_info ? booking.booking_info.booking_no : 0}</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderStyle: 'solid', padding: 20, borderLeftWidth: 0, borderColor: 'lightgrey', alignItems: 'center' }}  >
                        <Text>OnGoing No</Text>
                        <Text style={{ fontSize: 25, color: 'red', fontWeight: 'bold' }}  >{issueNo.ongoing_no || 0}</Text>
                    </View>
                </View>
                <View style={{ padding: 10 }} >
                    <Text style={{ color: 'grey', padding: 10 }}>Ref No: 05001225</Text>
                    <Text style={{ color: 'grey', padding: 10 }}  >Center Name: {booking.medical ? booking.medical.center_name : ''}</Text>
                    <Text style={{ color: 'grey', padding: 10 }}  >{booking.medical ? booking.medical.dr_name : ''} </Text>
                    <Text style={{ color: 'grey', padding: 10 }} >Date/Time: {booking.booking_info ? new Date(booking.booking_info.booking_date).toLocaleString() : ''}</Text>
                </View>
                <View >
                    <Button
                        style={styles.loginBtnWrap}
                        // onPress={handleBooking}
                        primary={true}
                        //   disabled={disable}
                        block
                    >
                        <Text style={styles.loginBtnTxt}>Navigate</Text>
                    </Button>
                    <Button
                        style={styles.loginBtnWrap}
                        // onPress={handleBooking}
                        primary={true}
                        //   disabled={disable}
                        block
                    >
                        <Text style={styles.loginBtnTxt}>Upload Prescription</Text>
                    </Button>
                    <Button
                        style={styles.loginBtnWrap}
                        // onPress={handleBooking}
                        primary={true}
                        //   disabled={disable}
                        block
                    >
                        <Text style={styles.loginBtnTxt}>Previous Bookings</Text>
                    </Button>
                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 0 }} >
                <Button
                    style={styles.backBtnWrap}
                    onPress={() => navigation.goBack()}
                    primary={true}
                    //   disabled={disable}
                    block
                >
                    <Text style={styles.backBtnTxt}>Back</Text>
                </Button>
            </View>

        </SafeAreaView>
    );
};

export default Booking;
