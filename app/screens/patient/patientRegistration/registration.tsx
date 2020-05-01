import React, { useEffect, FunctionComponent } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Content, Item, Icon } from 'native-base';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { registration } from '../../../src/store/actions/index';

import { IPostRegisterDto } from '../../../src/dto';
import { RootState } from '../../../src/store/types';
import { Props } from '../../../../Nav_types';

import Loader from '../../../components/Loader/index';
import { useValidateForm } from '../../../hooks/useValidateForm';
import styles from './style';
import { validator } from './validator';

const Registration: FunctionComponent<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const response = useSelector((state: RootState) => state.reg.data);
  const net_error = useSelector((state: RootState) => state.reg.error);
  const disable = useSelector((state: RootState) => state.reg.disable);

  const formInitial: IPostRegisterDto = {
    first_name: '',
    last_name: '',
    user_name: '',
    password: '',
    nic: '',
    email: '',
    mobile_number: '',
    city: '',
    district: '',
    role: 'patient'
  };

  const handleSubmit = (payload: IPostRegisterDto) => {
    dispatch(registration(payload));
  };

  const { onChange, onSubmit, errors, values } = useValidateForm(
    handleSubmit,
    formInitial,
    validator
  );

  useEffect(() => {
    if (net_error) {
      alert(net_error);
    }
    if (response && response.status == 'success') {
      navigation.navigate('Home');
    } else if (response && response.status.length > 0) {
      alert('Invalid username or password.');
    }
  }, [response, net_error]);

  return (
    <Container style={styles.loginWrap}>
      <Loader loading={disable} />
      <Content disableKBDismissScroll={true}>
        <View style={styles.loginInnerWrap}>
          {/* logo */}
          <View style={styles.logoArea}>
            <Image
              source={require('../../../assests/logo1.png')}
              style={{ height: 200, width: 200 }}
            />
          </View>

          {/* form */}
          <View style={styles.formArea}>
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="First Name"
                value={values.first_name}
                onChangeText={text => onChange(text, 'first_name')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.first_name}
              />
            </Item>
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Last Name"
                value={values.last_name}
                onChangeText={text => onChange(text, 'last_name')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.last_name}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Nic"
                value={values.nic}
                onChangeText={text => onChange(text, 'nic')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.nic}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Email"
                value={values.email}
                onChangeText={text => onChange(text, 'email')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.email}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="User Name"
                value={values.user_name}
                onChangeText={text => onChange(text, 'user_name')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.user_name}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="lock" style={styles.inputIcon} />
              <Input
                secureTextEntry={true}
                maxLength={20}
                placeholder="Password"
                value={values.password}
                onChangeText={text => onChange(text, 'password')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.password}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="District"
                value={values.district}
                onChangeText={text => onChange(text, 'district')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.district}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="City"
                value={values.city}
                onChangeText={text => onChange(text, 'city')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.city}
              />
            </Item>

            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Mobile Number"
                value={values.mobile_number}
                onChangeText={text => onChange(text, 'mobile_number')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.mobile_number}
              />
            </Item>

            <Button
              style={styles.loginBtnWrap}
              onPress={() => onSubmit()}
              disabled={disable}
              title="Register"
            />
            <View style={styles.loginFooterWrap}>
              <Text style={styles.dontHaveAccntTxt}>
                Already have an account?
              </Text>
              <Text
                style={[styles.dontHaveAccntTxt, styles.signupTxt]}
                onPress={() => navigation.navigate('Login')}
              >
                {' '}
                Login
              </Text>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Registration;
