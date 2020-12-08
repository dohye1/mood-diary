import {all, fork, takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {
    DIARY_REQUEST,
    DIARY_SUCCESS,
    DIARY_FAILURE,
    EDIT_DIARY_REQUEST,
    EDIT_DIARY_SUCCESS,
    EDIT_DIARY_FAILURE,
    NEW_DIARY_REQUEST,
    NEW_DIARY_SUCCESS,
    NEW_DIARY_FAILURE
} from '../actions/types';

function* getDiary(){
    const result = yield axios.get("/api/diary", {headers: {local_token:localStorage.getItem("user_token")}, validateStatus : function (status){return status < 500}});
    try{
        const { status, data } = result;
        if(status === 200){
            yield put({type:DIARY_SUCCESS, data});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message)
        yield put({type:DIARY_FAILURE});
    }
}

function* postDiary({payload}){
    const result = yield axios.post("/api/diary", payload, {headers: {local_token:localStorage.getItem("user_token")}, validateStatus : function (status){return status < 500}});
    try{
        const { status, data } = result;
        if(status === 201){
            yield put({type:NEW_DIARY_SUCCESS, data});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message)
        yield put({type:NEW_DIARY_FAILURE});
    }
}

function* patchDiary({payload}){
    const result = yield axios.patch("/api/diary", payload, {headers: {local_token:localStorage.getItem("user_token")}, validateStatus : function (status){return status < 500}});
    try{
        const { status, data } = result;
        if(status === 200){
            yield alert(result.data.message);
            yield put({type:EDIT_DIARY_SUCCESS, data});
        }else{
            throw new Error();
        }
    }catch(error){
        yield alert(result.data.message)
        yield put({type:EDIT_DIARY_FAILURE});
    }
}

function* watchDiary(){
    yield takeEvery(DIARY_REQUEST, getDiary);
    yield takeEvery(NEW_DIARY_REQUEST, postDiary);
    yield takeEvery(EDIT_DIARY_REQUEST, patchDiary);
}

export default function* diarySaga () {
    yield all([fork(watchDiary)])
}