import {
  IMedicalAuthState,
  MedicalLoginDispatchTypes,
  ActionTypes,
} from '../types';

const initialState: IMedicalAuthState = {
  isLoading: false,
  data: null,
  disable: false,
  error: '',
};

const medicalAuthReducer = (
  state: IMedicalAuthState = initialState,
  action: MedicalLoginDispatchTypes
): IMedicalAuthState => {
  switch (action.type) {
    case ActionTypes.MEDICAL_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        disable: true,
        data: null,
        error: '',
      };
    case ActionTypes.MEDICAL_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        disable: false,
        error: '',
      };
    case ActionTypes.MEDICAL_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        disable: false,
        data: null,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoading: false,
        error: null,
        disable: false,
        data: null,
      };
    default:
      return state;
  }
};

export default medicalAuthReducer;
