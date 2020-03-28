import React, {useState} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import styles from './style';
import { Container, Content, Form, Item, Input, Icon, Button, Label } from 'native-base';

const Login = (props) => {
  const [ username, setUsername] = useState('rohan25');
  const [ password, setPassword] = useState('12345');

  const setUsernameFun = (username) => {
    setUsername(username);
  }

  const setPasswordFun = (password) => {
    setPassword(password);
  }


  return (
    <Container style={styles.loginWrap}>
      <Content disableKBDismissScroll={true}>
      <View style={styles.loginInnerWrap}>
        {/* logo */}
        <View style={styles.logoArea}>
          <Image
            source={require('../../assests/logo1.png')}
            // source={{uri:'https://via.placeholder.com/100x100.png?text=Logo'}}
            style={{height:200, width:200}}
          />
        </View>

        {/* form */}
        <View style={styles.formArea}>
          <Item style={styles.usernameWrap}>
            <Icon name='person' style={styles.inputIcon} />
            <Input spellCheck={false} placeholder="Username" value={username} onChangeText={setUsernameFun} />
          </Item>

          <Item style={styles.usernameWrap}>
            <Icon name='lock' style={styles.inputIcon}/>
            <Input secureTextEntry={true} maxLength={20} placeholder="Password" value={password} onChangeText={setPasswordFun} />

          </Item>

          <Button style={styles.loginBtnWrap} onPress={()=> props.navigation.navigate('Home')} primary={true} block>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </Button>

          <View style={styles.loginFooterWrap}>
            <Text style={styles.dontHaveAccntTxt}>Don't have an account?</Text>
            <Text style={[styles.dontHaveAccntTxt, styles.signupTxt]} onPress={()=>alert('Signup')}> Sign up here</Text>
          </View>
          
        </View>
      
    
      </View>
      </Content>
    </Container>
  )
}

export default Login;