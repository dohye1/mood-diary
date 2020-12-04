import { combineReducers } from 'redux';
import userReducer from './userReducer';
import diaryReducer from './diaryReducer';

const rootReducer = combineReducers({
    userReducer, diaryReducer
});

export default rootReducer;