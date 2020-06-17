import {
  ILoginResponseDto,
  IRegisterResponseDto,
  IPostLoginDto,
  IPostRegisterDto,
} from '../../dto';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AxiosInstance } from 'axios';

import {
  ActionTypes,
  ILoginSuccess,
  ILoginFailed,
  ILoginRequest,
  IRegisterRequest,
  IRegisterSuccess,
  IRegisterFailer,
  RootState,
} from '../types';
import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('session', JSON.stringify(data));
  } catch (e) {
    // saving error
    console.log('eeeeeee', e);
  }
};

export const auth = (
  data: IPostLoginDto
): ThunkAction<void, RootState, AxiosInstance, AnyAction> => async (
  dispatch,
  state,
  API
) => {
  dispatch(loginRequest());
  try {
    const res = await API.post(
      `/patient/signin?user_name=${data.user_name}&password=${data.password}`
    );
    storeData(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.message || err || 'Something Went Wrong'));
  }
};

export const registration = (
  data: IPostRegisterDto
): ThunkAction<void, RootState, AxiosInstance, AnyAction> => async (
  dispatch,
  state,
  API
) => {
  dispatch(registrationRequest());
  try {
    const res = await API.post('patient/signup', JSON.stringify(data));
    storeData(res.data);
    dispatch(registrationSuccess(res.data));
  } catch (err) {
    dispatch(registrationFailure(err.message || err || 'Something Went Wrong'));
  }
};

const loginRequest = (): ILoginRequest => ({
  type: ActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (data: ILoginResponseDto): ILoginSuccess => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error: string): ILoginFailed => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: error,
});

const registrationRequest = (): IRegisterRequest => ({
  type: ActionTypes.REGISTRATION_REQUEST,
});

const registrationSuccess = (data: IRegisterResponseDto): IRegisterSuccess => ({
  type: ActionTypes.REGISTRATION_SUCCESS,
  payload: data,
});

const registrationFailure = (error: string): IRegisterFailer => ({
  type: ActionTypes.REGISTRATION_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});
