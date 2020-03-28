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
import EnIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon, Text, Button } from 'native-base';
import styles from './styles';

export const ChannelListItem = ({
  title = 'Default title',
  description = 'default description',
  url,
  rightBtnTxt = 'Channel',
  onPressChannelBtn,
  ...props
}) => {
  // console.log(url)
  return (
    <ListItem onPress={onPressChannelBtn} avatar>
      <Left>
        <Thumbnail style={styles.homeImage}
          //source={{uri:url}}
          source={require('../../assests/homeListdemo.png')}
        // onPress={onPressChannelBtn}
        />
      </Left>
      <Body style={{ borderBottomWidth: 0 }}>
        <Text
        // onPress={onPressChannelBtn}
        >{title}</Text>
        <Text note>{description}</Text>
      </Body>
      <Right style={styles.ButtonRightAdd}>
        <Button
          onPress={onPressChannelBtn}
          iconLeft
          style={styles.channelButton}>
          <Icon style={styles.channelButtonIcon} type="FontAwesome" name="stethoscope" />
          <Text style={styles.channelButtonText}>{rightBtnTxt}</Text>
        </Button>
      </Right>
    </ListItem>
  )
}

