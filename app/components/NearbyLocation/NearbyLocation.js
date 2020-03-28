import React from 'react';
import { View, Text, } from 'react-native';
import styles from './styles';

export const NearbyLocation = ({ ...props }) => {
  return (
    <View style={styles.nearbyWrap}>
      <Text style={[styles.nearbyText, { color: 'red' }]}>Near by : </Text>
      <Text style={styles.nearbyText}>{props.location}</Text>
    </View>
  )
}