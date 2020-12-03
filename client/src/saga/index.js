import {all, fork} from 'redux-saga/effects';
import userSaga from './userSage';

export default function* rootSaga(){
    yield all([fork(userSaga)])
}