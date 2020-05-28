import { MedicalRegisterDispatchTypes, IMedicalAuthState, ActionTypes } from '../types';

const initialState: IMedicalAuthState = {
  isLoading: false,
  data: null,
  disable: false,
  error: ''
};

const medicalRegReducer = (
  state = initialState,
  action: MedicalRegisterDispatchTypes
): IMedicalAuthState => {
  switch (action.type) {
    case ActionTypes.MEDICAL_REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        disable: true,
        data: null,
        error: ''
      };
    case ActionTypes.MEDICAL_REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        disable: false,
        error: ''
      };
    case ActionTypes.MEDICAL_REGISTRATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        disable: false,
        data: null
      };
    default:
      return state;
  }
};

export default medicalRegReducer;
