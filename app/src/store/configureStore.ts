import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import authReducer from './reducers/authReducer';
import regReducer from './reducers/regReducer';
import { API_BASE_URL } from './constant';

const axiosInstatnce = axios.create({
  baseURL: API_BASE_URL
});

export const rootReducer = combineReducers({
  auth: authReducer,
  reg: regReducer
});

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstatnce))
  );
};

export default configureStore;
