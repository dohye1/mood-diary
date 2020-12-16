import { all, fork } from 'redux-saga/effects';
import userSaga from './userSage';
import diarySaga from './diarySaga';
import globalSaga from './globalSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(diarySaga), fork(globalSaga)]);
}
