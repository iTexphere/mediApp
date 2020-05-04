import React, { useEffect, FunctionComponent } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Content, Item, Icon } from 'native-base';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { medicalRegistration } from '../../../src/store/actions/index';

import { IPostMedicalRegisterDto } from '../../../src/dto';
import { RootState } from '../../../src/store/types';
import { Props } from '../../../../Nav_types';

import Loader from '../../../components/Loader/index';
import { useValidateForm } from '../../../hooks/useMedicalValidateForm';
import styles from './style';
import { validator } from './validator';

const Registration: FunctionComponent<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const response = useSelector((state: RootState) => state.medicalReg.data);
  const net_error = useSelector((state: RootState) => state.medicalReg.error);
  const disable = useSelector((state: RootState) => state.medicalReg.disable);

  const formInitial: IPostMedicalRegisterDto = {
    dr_name: '',
    specialist_in: '',
    user_name: '',
    password: '',
    start_time: '1600',
    end_time: '2000',
    open_days: '',
    city: '',
    district: '',
    dr_notes: '',
    reg_no: '',
    center_name: '',
    role: 'medical'
  };

  const handleSubmit = (payload: IPostMedicalRegisterDto) => {
    dispatch(medicalRegistration(payload));
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
                placeholder="Doctor Name"
                value={values.dr_name}
                onChangeText={text => onChange(text, 'dr_name')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.dr_name}
              />
            </Item>
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Specialist"
                value={values.specialist_in}
                onChangeText={text => onChange(text, 'specialist')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.specialist_in}
              />
            </Item>
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Open_days"
                value={values.open_days}
                onChangeText={text => onChange(text, 'open_days')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.open_days}
              />
            </Item>
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Doctor Notes"
                value={values.dr_notes}
                onChangeText={text => onChange(text, 'dr_notes')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.dr_notes}
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
