import { all, call } from 'redux-saga/effects';

import userSagaWatcher from './userSaga';
import countrySagaWatcher from './countrySaga';

function* rootSaga() {
  yield all([
    call(userSagaWatcher),
    call(countrySagaWatcher),
  ]);
}

export default rootSaga;
