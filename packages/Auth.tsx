import React from 'react';

import { rootStackAuthList } from '../Nav_types';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../app/screens/patient/login';
import Registration from '../app/screens/patient/patientRegistration';
import MedicalLogin from '../app/screens/medicalCenter/medicalLogin';
import MedicalRegistration from '../app/screens/medicalCenter/medicalRegister';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../app/src/store/types';

const AuthStack = createStackNavigator<rootStackAuthList>();

const AuthStackScreen = () => {
  const res = useSelector((state: RootState) => state.auth.data);
  const mediRes = useSelector((state: RootState) => state.medicalAuth.data);

  return (
    <>
      {(res && res.access_token) || (mediRes && mediRes.access_token) ? null : (
        <AuthStack.Navigator
          screenOptions={{
            headerTintColor: Colors.white,
          }}
        >
          <AuthStack.Screen
            name="UserLogin"
            options={{ headerShown: false }}
            component={Login}
          />
          <AuthStack.Screen
            name="UserReg"
            options={{ headerShown: false }}
            component={Registration}
          />
          <AuthStack.Screen
            name="ClientLogin"
            options={{ headerShown: false }}
            component={MedicalLogin}
          />
          <AuthStack.Screen
            name="ClientReg"
            options={{ headerShown: false }}
            component={MedicalRegistration}
          />
        </AuthStack.Navigator>
      )}
    </>
  );
};

export default AuthStackScreen;
