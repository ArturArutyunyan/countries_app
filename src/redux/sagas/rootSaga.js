import { all, call } from 'redux-saga/effects';
import userSagaWatcher from './userSaga';

function* rootSaga() {
  yield all([
    call(userSagaWatcher),
  ]);
}

export default rootSaga;