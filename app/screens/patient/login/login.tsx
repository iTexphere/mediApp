import React, { useState, useEffect, FunctionComponent, useContext } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { Container, Content, Item, Input, Icon, Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../../src/store/actions/index';
import { AuthContext } from "../../../../App";

import Loader from '../../../components/Loader/index';
import { RootState } from '../../../src/store/types';
import { Props } from '../../../../Nav_types';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Login: FunctionComponent<Props> = ({ navigation }) => {
  const response = useSelector((state: RootState) => state.auth.data);
  const error = useSelector((state: RootState) => state.auth.error);
  const disable = useSelector((state: RootState) => state.auth.disable);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = React.useContext(AuthContext);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (response && response.status == 'success') {
      
    } else if (response && response.status.length > 0) {
      alert('Invalid username or password.');
    }
  }, [response, error]);

  const validate = () => {
    let isError = false;
    if (username.length === 0) {
      alert('Username is required !');
      isError = true;
    } else if (password.length === 0) {
      alert('password is required !');
      isError = true;
    }
    return isError;
  };

  const handleSubmit = async () => {
    let isInvalid = validate();
    const payload = {
      user_name: username,
      password: password
    };
    if (!isInvalid) {
      await dispatch(auth(payload));
      signIn(payload)
      
    }
  };

  return (
    <Container style={styles.loginWrap}>
      <Loader loading={disable} />
      <Content disableKBDismissScroll={true}>
        <View style={styles.loginInnerWrap}>
          {/* logo */}
          <View style={styles.logoArea}>
            <Image
              source={require('../../../assests/logo1.png')}
              // source={{uri:'https://via.placeholder.com/100x100.png?text=Logo'}}
              style={{ height: 200, width: 200 }}
            />
          </View>

          {/* form */}
          <View style={styles.formArea}>
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Username"
                value={username}
                onChangeText={val => setUsername(val)}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="lock" style={styles.inputIcon} />
              <Input
                secureTextEntry={true}
                maxLength={20}
                placeholder="Password"
                value={password}
                onChangeText={val => setPassword(val)}
              />
            </Item>

            <Button
              style={styles.loginBtnWrap}
              onPress={handleSubmit}
              primary={true}
              disabled={disable}
              block
            >
              <Text style={styles.loginBtnTxt}>Login</Text>
            </Button>

            <View style={styles.loginFooterWrap}>
              <Text style={styles.dontHaveAccntTxt}>
                Don't have an account?
              </Text>
              <Text
                style={[styles.dontHaveAccntTxt, styles.signupTxt]}
                onPress={() => navigation.navigate('Registration')}
              >
                {' '}
                Sign up here
              </Text>
            </View>
          </View>
        </View>

      </Content>

      <View style={styles.medicalAuth}  >
        <Text onPress={() => navigation.navigate('Auth')}  >Login with Medical center</Text>
      </View>


    </Container>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     response: state.auth.data,
//     disable: state.auth.disable,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLogin: (payload) => dispatch(auth(payload)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);

export default Login;
