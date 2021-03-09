import { combineReducers } from 'redux';
import authReducer from "./auth";
import listReducer from './list';

const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer
});

export default rootReducer