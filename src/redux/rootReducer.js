import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import reducerCounter from './counter/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: reducerCounter,
});

export default rootReducer;
