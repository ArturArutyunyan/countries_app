import { all, call } from 'redux-saga/effects';

import authSagaWatcher from './authSaga';
import countrySagaWatcher from './countrySaga';

function* rootSaga() {
  yield all([
    call(authSagaWatcher),
    call(countrySagaWatcher),
  ]);
}

export default rootSaga;
