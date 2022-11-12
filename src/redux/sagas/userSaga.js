import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../constants';

function* loginUserWorker({ user }) {
  try {
    const { data } = yield axios.post(process.env.REACT_APP_LOGIN_URL, user);

    if (data.error) throw new Error(data.error);
    if (user.rememberMe) localStorage.setItem('token', data.token);
    yield put({ type: actionTypes.AUTH_USER_RECEIVED });
  } catch (error) {
    yield put({ type: actionTypes.AUTH_USER_REJECTED, error: error.message });
  }
}

function* logoutUserWorker() {
  localStorage.removeItem('token');
  yield put({ type: actionTypes.LOGOUT_RECEIVED });
}

export default function* userSagaWatcher() {
  yield takeLatest(actionTypes.AUTH_USER_REQUESTED, loginUserWorker);
  yield takeLatest(actionTypes.LOGOUT_REQUESTED, logoutUserWorker);
}
