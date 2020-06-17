import React, { useEffect, useState, useRef } from 'react';

import { AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/src/store/types';

import MedicalModule from './packages/Client';
import UserModule from './packages/User';
import AuthModule from './packages/Auth';
import { loginSuccess } from './app/src/store/actions/authAction';
import { ILoginResponseDto } from './app/src/dto';
import { NavigationContainer } from '@react-navigation/native';
import Loader from './app/components/Loader';
import { medicalLoginSuccess } from './app/src/store/actions/medicalAuthActions';

export default function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (componentJustMounted.current) {
      const authChek = async () => {
        const session = await AsyncStorage.getItem('session');
        if (session !== null) {
          const user = (await JSON.parse(session)) as ILoginResponseDto;
          setLoading(false);
          console.log('USER', user);
          // TODO - Validate token in production
          if (user && user.user_info.role === 'patient')
            dispatch(loginSuccess(user));
          if (user && user.user_info.role === 'medical')
            dispatch(medicalLoginSuccess(user));
        } else {
          setLoading(false);
        }
        componentJustMounted.current = false;
      };
      authChek();
    }
  }, []);

  // const renderChild = () => {
  //   if (res && res.access_token && res.user_info.role === 'patient') {
  //     return <UserModule />;
  //   } else if (res && res.access_token && res.user_info.role === 'medical') {
  //     return <MedicalModule />;
  //   } else {
  //     return (
  //       <NavigationContainer>
  //         <AuthModule />
  //       </NavigationContainer>
  //     );
  //   }
  // };

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <UserModule />
          <MedicalModule />
          <NavigationContainer>
            <AuthModule />
          </NavigationContainer>
        </>
      )}
    </>
  );
}
