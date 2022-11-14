import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { AUTH_USER_REQUESTED, LOGOUT_REQUESTED } from '../common';
import { loginSuccessAction, loginFailAction, logoutSuccessAction } from '../actions';

function* loginUserWorker({ payload }) {
  try {
    const { data } = yield axios.post(process.env.REACT_APP_LOGIN_URL, payload);

    if (data.error) throw new Error(data.error);
    if (payload.rememberMe) localStorage.setItem('token', data.token);
    yield put(loginSuccessAction());
  } catch (error) {
    yield put(loginFailAction());
  }
}

function* logoutUserWorker() {
  localStorage.removeItem('token');
  yield put(logoutSuccessAction());
}

export default function* userSagaWatcher() {
  yield takeLatest(AUTH_USER_REQUESTED, loginUserWorker);
  yield takeLatest(LOGOUT_REQUESTED, logoutUserWorker);
}
