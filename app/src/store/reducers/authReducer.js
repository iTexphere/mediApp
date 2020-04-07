import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  data: "",
  disable: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        disable: true,
        data: "",
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        disable: false,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.data,
        disable: false,
        data: "",
      };
    default:
      return state;
  }
};

export default authReducer;
