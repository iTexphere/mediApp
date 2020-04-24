import { RegisterDispatchTypes, IAuthState, ActionTypes } from '../types';

const initialState: IAuthState = {
  isLoading: false,
  data: null,
  disable: false,
  error: ''
};

const regReducer = (
  state = initialState,
  action: RegisterDispatchTypes
): IAuthState => {
  switch (action.type) {
    case ActionTypes.REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        disable: true,
        data: null,
        error: ''
      };
    case ActionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        disable: false,
        error: ''
      };
    case ActionTypes.REGISTRATION_FAILURE:
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

export default regReducer;
