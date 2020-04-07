import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  data: "",
  disable: false,
  error: "",
};

const regReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        disable: true,
        data: "",
        error: "",
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        disable: false,
        error: "",
      };
    case REGISTRATION_FAILURE:
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

export default regReducer;
