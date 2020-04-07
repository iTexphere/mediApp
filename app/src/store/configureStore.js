import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import regReducer from './reducers/regReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    reg   : regReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer,compose(applyMiddleware(thunk),composeEnhancers()));
};

export default configureStore;