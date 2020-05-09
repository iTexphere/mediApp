import {
  ILoginResponseDto,
  IMedicalRegisterResponseDto,
  IPostMedicalLoginDto,
  IPostMedicalRegisterDto,
} from "../../dto";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import {
  ActionTypes,
  IMedicalLoginRequest,
  IMedicalLoginFailed,
  IMedicalLoginSuccess,
  IMedicalRegisterRequest,
  IMedicalRegisterSuccess,
  IMedicalRegisterFailer,
  RootState,
} from "../types";

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem("session", JSON.stringify(data));
  } catch (e) {
    // saving error
    console.log("eeeeeee", e);
  }
};

export const medicalAuth = (
  data: IPostMedicalLoginDto
): ThunkAction<void, RootState, AxiosInstance, AnyAction> => async (
  dispatch,
  state,
  API
) => {
  dispatch(medicalLoginRequest());
  try {
    const res = await API.post(`medical/signin`, data);
    storeData(res.data);
    dispatch(medicalLoginSuccess(res.data));
  } catch (err) {
    dispatch(medicalLoginFailure(err.message || err || "Something Went Wrong"));
  }
};

export const medicalRegistration = (
  data: IPostMedicalRegisterDto
): ThunkAction<void, RootState, AxiosInstance, AnyAction> => async (
  dispatch,
  state,
  API
) => {
  dispatch(medicalRegistrationRequest());
  try {
    const res = await API.post("medical/signup", data);
    dispatch(medicalRegistrationSuccess(res.data));
  } catch (err) {
    dispatch(
      medicalRegistrationFailure(err.message || err || "Something Went Wrong")
    );
  }
};

const medicalLoginRequest = (): IMedicalLoginRequest => ({
  type: ActionTypes.MEDICAL_LOGIN_REQUEST,
});

const medicalLoginSuccess = (
  data: ILoginResponseDto
): IMedicalLoginSuccess => ({
  type: ActionTypes.MEDICAL_LOGIN_SUCCESS,
  payload: data,
});

const medicalLoginFailure = (error: string): IMedicalLoginFailed => ({
  type: ActionTypes.MEDICAL_LOGIN_FAILURE,
  payload: error,
});

const medicalRegistrationRequest = (): IMedicalRegisterRequest => ({
  type: ActionTypes.MEDICAL_REGISTRATION_REQUEST,
});

const medicalRegistrationSuccess = (
  data: IMedicalRegisterResponseDto
): IMedicalRegisterSuccess => ({
  type: ActionTypes.MEDICAL_REGISTRATION_SUCCESS,
  payload: data,
});

const medicalRegistrationFailure = (error: string): IMedicalRegisterFailer => ({
  type: ActionTypes.MEDICAL_REGISTRATION_FAILURE,
  payload: error,
});
