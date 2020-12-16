import { all, fork, takeEvery, put } from 'redux-saga/effects';
import { BG_REQUEST, BG_SUCCESS, BG_FAILURE } from '../actions/types';

function* changeBG({ payload }) {
  try {
    yield put({ type: BG_SUCCESS, data: payload });
    yield alert('배경색 변경 성공!');
  } catch (error) {
    yield alert('배경색 변경에 실패했습니다.');
    yield put({ type: BG_FAILURE });
  }
}

function* watchGlobal() {
  yield takeEvery(BG_REQUEST, changeBG);
}

export default function* globalSaga() {
  yield all([fork(watchGlobal)]);
}
