import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../constants';

function* getAllCountriesWorker() {
  try {
    const { data } = yield axios.get('https://restcountries.com/v3.1/all');
    yield put({ type: actionTypes.GET_ALL_COUNTRIES_RECEIVED, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.GET_ALL_COUNTRIES_REJECTED, error: error.message });
  }
}

export default function* countrySagaWatcher() {
  yield takeEvery(actionTypes.GET_ALL_COUNTRIES_REQUESTED, getAllCountriesWorker);
}
