import { ILoginResponseDto, IRegisterResponseDto } from '../dto';
import { rootReducer } from './configureStore';

/**
 * Root store type
 */

export type RootState = ReturnType<typeof rootReducer>;

/**
 * Action's disptach types
 */

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  REGISTRATION_REQUEST = 'REGISTRATION_REQUEST',
  REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
  REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'
}

/**
 * Reducer's states types
 */

export interface IAuthState {
  isLoading: boolean;
  data: ILoginResponseDto | IRegisterResponseDto | any;
  disable: boolean;
  error: string;
}

/**
 * Actions return types
 */

export interface ILoginRequest {
  type: typeof ActionTypes.LOGIN_REQUEST;
}

export interface ILoginSuccess {
  type: typeof ActionTypes.LOGIN_SUCCESS;
  payload: ILoginResponseDto;
}

export interface ILoginFailed {
  type: typeof ActionTypes.LOGIN_FAILURE;
  payload: string;
}

export interface IRegisterRequest {
  type: typeof ActionTypes.REGISTRATION_REQUEST;
}

export interface IRegisterSuccess {
  type: typeof ActionTypes.REGISTRATION_SUCCESS;
  payload: IRegisterResponseDto;
}

export interface IRegisterFailer {
  type: typeof ActionTypes.REGISTRATION_FAILURE;
  payload: string;
}

export type LoginDispatchTypes = ILoginRequest | ILoginSuccess | ILoginFailed;
export type RegisterDispatchTypes =
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailer;
