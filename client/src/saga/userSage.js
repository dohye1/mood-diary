import {all, fork, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import {ME_REQUEST, EDIT_ME_REQUEST, NEW_ME_REQUEST, AVATAR_REQUEST, NEW_ME_SUCCESS, NEW_ME_FAILURE} from '../actions/types';
import axios from 'axios';

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
}

export default function* userSaga () {
    yield all([fork(watchUser)])
}