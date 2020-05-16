import React, { useState, FunctionComponent, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, FlatList } from 'react-native';
import styles from './style';
import { Button, Text, H3 } from 'native-base';
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
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

const Channel: FunctionComponent<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [ issueNo, setIssueNo  ] = useState<any>({});

    

    const handleBooking = async () => {
        const { id } = route.params;
        setLoading(true)
        try {

            const value = await AsyncStorage.getItem('session');
            if (value !== null) {
                const parse = JSON.parse(value)
                const config = {
                    headers: { 'Authorization': `Bearer ${parse.access_token}` }
                };
                
                const getBook = await axios.get(`http://likesgun.com/api/v1/patient/booking/${id}`, config)
                
                // console.log("dataaaaaaaaaa", getBook.data  )
                setLoading(false)
                const data = getBook.data.data

                
                alert( `Your booking is recorded and booking number is ${data.booking_no}` )
            }
        } catch (err) {
            setLoading(false)
            alert("You already have a booking here, Please try again tomorrow")
            console.log("errrrrrrrr", err)
        }
    }

    useEffect(() => {
        const { id } = route.params;
        database()
          .ref(`/${id}`)
          .on('value', (snapshot: any) => {
            setIssueNo(snapshot.val())
          });
      }, [database])

    const { dr_name, specialist_in, center_name, dr_notes, reg_no, city, created_at } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
            <Loader loading={loading} />
            <View style={{ marginTop: 20, alignItems: 'flex-end', marginRight: 30 }} >
                <Text>Reg: {reg_no}</Text>
            </View>
            <View style={{ padding: 30 }} >
                <View   >
                    <H3 style={{ textAlign: 'center', color: "red" }}  >{center_name}</H3>
                </View>
                <View style={{ alignItems: 'center', margin: 20 }} >
                    <Text>Image</Text>
                </View>
                <View style={{ margin: 20 }}  >
                    <Text style={styles.textWrap1}  >{dr_name}</Text>
                    <Text style={styles.textWrap1}  >Specialist in: {specialist_in}</Text>
                    <Text style={styles.textWrap1}  >Dr Note: {dr_notes}</Text>
                </View>
                <View style={{ margin: 20 }} >
                    <Text style={styles.textWrap2}  >Date: {new Date(created_at).toLocaleDateString()}</Text>
                    <Text style={styles.textWrap2} >Sessioin Start time: 5:00pm</Text>
                    <Text style={styles.textWrap2}  >Issuing Number: {issueNo.issueNo}</Text>
                    <Text style={styles.textWrap2} >City: {city}</Text>
                    <Text style={styles.textWrap2}  >Dr Fee: Rs. 500.00</Text>
                    <Text style={styles.textWrap2}  >App Fee: Rs. 25.00</Text>
                </View>
                <Text style={{ color: '#d3d3d3' }} >(Note: Dr Fee may vary according to the drugs)</Text>
                <Button
                    style={styles.loginBtnWrap}
                    onPress={handleBooking}
                    primary={true}
                    //   disabled={disable}
                    block
                >
                    <Text style={styles.loginBtnTxt}>Book</Text>
                </Button>
            </View>

        </SafeAreaView>
    );
};

export default Channel;
