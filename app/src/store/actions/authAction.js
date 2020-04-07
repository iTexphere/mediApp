import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from "./actionTypes";
import { API_ENDPOINT, API_VERSION } from "../constant";

export const auth = (data) => {
  return (dispatch) => {
    dispatch(loginRequest());
    fetch(`${API_ENDPOINT}${API_VERSION}/signin`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json().then((data) => {
          dispatch(loginSuccess(data));
        });
      })
      .catch((error) => {
        dispatch(loginFailure("Failed to login."));
      });
  };
};

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data: data,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error: error,
});

export const registration = (data) => {

  return (dispatch) => {
    dispatch(registrationRequest());
    fetch(`${API_ENDPOINT}${API_VERSION}/signup`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json().then((data) => {
          dispatch(registrationSuccess(data));
        });
      })
      .catch((error) => {
        dispatch(registrationFailure("Failed to register User."));
      });
  };
};

const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

const registrationSuccess = (data) => ({
  type: REGISTRATION_SUCCESS,
  data: data,
});

const registrationFailure = (error) => ({
  type: REGISTRATION_FAILURE,
  error: error,
});
