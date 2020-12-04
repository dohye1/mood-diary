import {all, fork, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
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
    NEW_DIARY_FAILURE,
    DELETE_DIARY_REQUEST,
    DELETE_DIARY_SUCCESS,
    DELETE_DIARY_FAILURE,
    COUNT_REQUEST,
    COUNT_SUCCESS,
    COUNT_FAILURE
} from '../actions/types';

function* postNewDiary({payload}){
    const result = yield axios.post("/api/diary", payload, {validateStatus : function (status){return status < 500}});
    try{
        const { status, data } = result;
        console.log(result);
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

function* watchDiary(){
    yield takeEvery(NEW_DIARY_REQUEST, postNewDiary);
}

export default function* diarySaga () {
    yield all([fork(watchDiary)])
}