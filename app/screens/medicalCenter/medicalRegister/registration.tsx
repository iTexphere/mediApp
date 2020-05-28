import React, { useEffect, FunctionComponent, useState } from 'react';
import { View, Image, Text, Platform, ToastAndroid } from 'react-native';
import { Container, Content, Item, Icon } from 'native-base';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { medicalRegistration } from '../../../src/store/actions/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IPostMedicalRegisterDto } from '../../../src/dto';
import { RootState } from '../../../src/store/types';
import { Props } from '../../../../Nav_types';
import { AuthContext } from "../../../../App";
import Loader from '../../../components/Loader/index';
import { useValidateForm } from '../../../hooks/useMedicalValidateForm';
import styles from './style';
import { validator } from './validator';


const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

const Registration: FunctionComponent<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const response = useSelector((state: RootState) => state.medicalReg.data);
  const net_error = useSelector((state: RootState) => state.medicalReg.error);
  const disable = useSelector((state: RootState) => state.medicalReg.disable);

  const { signUp } = React.useContext(AuthContext);

  const [start_time, setStartTime] = useState(new Date(1598051730000));
  const [end_time, setEndTime] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [mode2, setMode2] = useState('date');
  const [visible, setVisible] = useState(false)
  const [show2, setShow2] = useState(false);

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
    // signUp(payload);
  };

  const { onChange, onSubmit, errors, values } = useValidateForm(
    handleSubmit,
    formInitial,
    validator
  );

  const startTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    const getHours = new Date(currentDate).getHours()
    const getMins = new Date(currentDate).getMinutes()
    const exactNum = parseInt(`${getHours}${getMins}`)
    onChange(exactNum, 'start_time')
    setStartTime(currentDate);
  };

  const endTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow2(Platform.OS === 'ios');
    const getHours = new Date(currentDate).getHours()
    const getMins = new Date(currentDate).getMinutes()
    const exactNum = parseInt(`${getHours}${getMins}`)
    onChange(exactNum, 'end_time')
    setEndTime(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('time');
  };

  const showMode2 = currentMode => {
    setShow2(true);
    setMode2(currentMode);
  };

  const showDatepicker2 = () => {
    showMode2('time');
  };

  useEffect(() => setVisible(false), [visible]);

  useEffect(() => {
    if (net_error) {
      alert(net_error);
    }
    if (response && response.status == 'success') {
      setVisible(true);
      navigation.navigate('Auth');
    } else if (response && response.status.length > 0) {
      alert('Invalid username or password.');
    }
  }, [response, net_error]);

  return (
    <Container style={styles.loginWrap}>
      <Loader loading={disable} />
      <Toast visible={visible} message="Your account has been created, We will contact you soon" />
      <Content disableKBDismissScroll={true}>
        <View style={styles.loginInnerWrap}>
          {/* logo */}
          <View style={styles.logoArea}>
            <Image
              source={require('../../../assests/medicalcenter.png')}
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
                onChangeText={text => onChange(text, 'specialist_in')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.specialist_in}
              />
            </Item>
            <Item style={styles.usernameWrap} onPress={showDatepicker}  >
              <Icon style={[styles.doctorNameIcon, { fontSize: 22 }]} type="FontAwesome" name="calendar" />
              <Input style={[styles.doctorNameInput, { lineHeight: 20, paddingTop: 20 }]} defaultValue={start_time.toLocaleTimeString()} placeholder='Start Time' disabled />
            </Item>
            <Item style={styles.usernameWrap} onPress={showDatepicker2}  >
              <Icon style={[styles.doctorNameIcon, { fontSize: 22 }]} type="FontAwesome" name="calendar" />
              <Input style={[styles.doctorNameInput, { lineHeight: 20, paddingTop: 20 }]} defaultValue={end_time.toLocaleTimeString()} placeholder='End Time' disabled />
            </Item>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={start_time}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={startTimeChange}
              />
            )}
            {show2 && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={end_time}
                mode={mode2}
                is24Hour={true}
                display="default"
                onChange={endTimeChange}
              />
            )}
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Open days"
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
                placeholder="Registration No"
                value={values.reg_no}
                onChangeText={text => onChange(text, 'reg_no')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.reg_no}
              />
            </Item>
            <Item style={styles.usernameWrap}>
              <Icon name="person" style={styles.inputIcon} />
              <Input
                spellCheck={false}
                placeholder="Center Name"
                value={values.center_name}
                onChangeText={text => onChange(text, 'center_name')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.center_name}
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
