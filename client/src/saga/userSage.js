import {all, fork, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
    ME_REQUEST, 
    ME_SUCCESS, 
    ME_FAILURE, 
    EDIT_ME_REQUEST, 
    EDIT_ME_SUCCESS,
    EDIT_ME_FAILURE, 
    NEW_ME_REQUEST, 
    NEW_ME_SUCCESS, 
    NEW_ME_FAILURE,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    LOGOUT_SUCCESS, 
    LOGOUT_FAILURE,
    LOGOUT_REQUEST} from '../actions/types';

function* postLogin({payload}){
    const result = yield axios.post("/api/user/login", payload, {validateStatus : function (status){return status < 500}});
    try{
        const { status, data } = result;
        if(status === 200){
            yield put({type:LOGIN_SUCCESS, data});
            console.log( data +"여기 있음!!!")
            localStorage.setItem('user_token', data.user.token);
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

function* getMe(){
    const result = yield axios.get("/api/user", {validateStatus : function (status){return status < 500}});
    try{
        const { status, data} = result;
        if(status === 200){
            yield put({type:ME_SUCCESS, data});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message)
        yield put({type:ME_FAILURE});
    }
}

function* postEditMe({payload}){
    const result = yield axios.patch("/api/user", payload, {validateStatus : function (status){return status < 500}});
    try{
        const { status, data } = result;
        if(status === 200){
            console.log(data);
            yield put({type:EDIT_ME_SUCCESS, data});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message);
        yield put({type:EDIT_ME_FAILURE});
    }
}

function* deleteMe(){
    const result = yield axios.delete("/api/user", {validateStatus : function (status){return status < 500}});
    try{
        const { status } = result;
        if(status === 200){
            yield alert(result.data.message);
            yield localStorage.removeItem('user_token');
            yield put({type:LOGOUT_SUCCESS});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message);
        yield put({type:LOGOUT_FAILURE});
    }
}

function* watchUser(){
    yield takeEvery(NEW_ME_REQUEST, postNewMe);
    yield takeEvery(LOGIN_REQUEST, postLogin);
    yield takeEvery(ME_REQUEST, getMe);
    yield takeEvery(EDIT_ME_REQUEST, postEditMe);
    yield takeLatest(LOGOUT_REQUEST, deleteMe);
}

export default function* userSaga () {
    yield all([fork(watchUser)])
}