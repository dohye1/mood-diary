import { combineReducers } from 'redux';
import userReducer from './userReducer';
import diaryReducer from './diaryReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  userReducer,
  diaryReducer,
  globalReducer
});

export default rootReducer;
