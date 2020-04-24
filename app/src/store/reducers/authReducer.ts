import { IAuthState, LoginDispatchTypes, ActionTypes } from '../types';

const initialState: IAuthState = {
  isLoading: false,
  data: null,
  disable: false,
  error: ''
};

const authReducer = (
  state: IAuthState = initialState,
  action: LoginDispatchTypes
): IAuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        disable: true,
        data: null,
        error: ''
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        disable: false,
        error: ''
      };
    case ActionTypes.LOGIN_FAILURE:
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

export default authReducer;
