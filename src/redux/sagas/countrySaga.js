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

function* getCountryByAlphacodeWorker({alphaCode}) {
  try {
    const { data } = yield axios.get(`https://restcountries.com/v3.1/alpha/${alphaCode}`);
    yield put({ type: actionTypes.GET_COUNTRY_BY_ALPHACODE_REC, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.GET_COUNTRY_BY_ALPHACODE_REJ, error: error.message });
  }
}

export default function* countrySagaWatcher() {
  yield takeEvery(actionTypes.GET_ALL_COUNTRIES_REQUESTED, getAllCountriesWorker);
  yield takeEvery(actionTypes.GET_COUNTRY_BY_ALPHACODE_REQ, getCountryByAlphacodeWorker);
}
