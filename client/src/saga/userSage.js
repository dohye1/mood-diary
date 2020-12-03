import {all, fork, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
    ME_REQUEST, 
    EDIT_ME_REQUEST, 
    AVATAR_REQUEST, 
    NEW_ME_REQUEST, 
    NEW_ME_SUCCESS, 
    NEW_ME_FAILURE,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    LOGOUT_SUCCESS, 
    LOGOUT_FAILURE} from '../actions/types';

function* postLogin({payload}){
    const result = yield axios.post("/api/user/login", payload, {validateStatus : function (status){return status < 500}});
    try{
        const { status } = result;
        if(status === 200){
            yield put({type:LOGIN_SUCCESS});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message);
        yield put({type:LOGIN_FAILURE});
    }
}

function* postNewMe({payload}){
    const result = yield axios.post("/api/user", payload, {validateStatus : function (status){return status < 500}});
    try{
        const { status } = result;
        if(status === 201){
            yield put({type:NEW_ME_SUCCESS});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message)
        yield put({type:NEW_ME_FAILURE});
    }
}

function* watchUser(){
    yield takeEvery(NEW_ME_REQUEST, postNewMe);
    yield takeEvery(LOGIN_REQUEST, postLogin);
}

export default function* userSaga () {
    yield all([fork(watchUser)])
}