import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const BookingColumn = (
  {
    bookingNo = '0',
    ongoingNo = '0',
    ...props
  }
) => {
  return (
    <View style={styles.bookingCont}>
      <View style={styles.currentBookingRow}>
        <Text style={styles.bookingHeading}>my current bookings</Text>
        <TouchableOpacity style={styles.bookingIconWrap}><Icon style={styles.bookingIcon} type="FontAwesome" name="refresh" /></TouchableOpacity>
      </View>
      <View style={styles.currentBookingNuber}>
        <View style={styles.bookingBox}>
          <Text style={styles.bookingNoHead}>Booking No</Text>
          <Text style={[styles.bookingNo,{color:'green', fontWeight:'bold'}]}>{bookingNo}</Text>
        </View>
        <View style={styles.bookingBox}>
          <Text style={styles.bookingNoHead}>Ongoing No</Text>
  <Text style={[styles.bookingNo,{color:'red', fontWeight:'bold'}]}>{ongoingNo}</Text>
        </View>
      </View>
    </View>
  )
}


