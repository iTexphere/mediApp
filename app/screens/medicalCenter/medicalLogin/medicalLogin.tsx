import React, { useState, useEffect, FunctionComponent } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import { Container, Content, Item, Input, Icon, Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { medicalAuth } from '../../../src/store/actions/index';
import { AuthContext } from "../../../../App";
import Loader from '../../../components/Loader/index';
import { RootState } from '../../../src/store/types';
import { Props } from '../../../../Nav_types';

const MedicalLogin: FunctionComponent<Props> = ({ navigation }) => {
  const response = useSelector((state: RootState) => state.medicalAuth.data);
  
  const error = useSelector((state: RootState) => state.medicalAuth.error);
  const disable = useSelector((state: RootState) => state.medicalAuth.disable);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('jagath');
  const [password, setPassword] = useState('12345');

  const { signIn } = React.useContext(AuthContext);

  useEffect(() => {

    

    if (error) {
      alert(error);
    }
    if (response && response.status == 'success') {
       //navigation.navigate('Home');
       console.log('medical response-xx', response)
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
      await dispatch(medicalAuth(payload));
      console.log('response123', response);
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
              source={require('../../../assests/medicalcenter.png')}
              // source={{uri:'https://via.placeholder.com/100x100.png?text=Logo'}}
              style={{ height: 200, width: 200 }}
            />
          </View>
          <View style={styles.formArea}>

            <View   >
              <Text style={{ textAlign: 'center' }} >Login with Medical</Text>
            </View>
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
                onPress={() => navigation.navigate('MedicalRegistration')}
              >
                {' '}
                Sign up here
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.medicalAuth}  >
          <Text onPress={() => navigation.navigate('Login')}  >Login as a user</Text>
        </View>
      </Content>
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

export default MedicalLogin;
