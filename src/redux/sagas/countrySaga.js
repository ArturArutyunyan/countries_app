import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../constants';

function* getAllCountriesWorker() {
  try {
    const { data } = yield axios.get(process.env.REACT_APP_GET_COUNTRY_LIST_URL);
    yield put({ type: actionTypes.GET_ALL_COUNTRIES_RECEIVED, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.GET_ALL_COUNTRIES_REJECTED, error: error.message });
  }
}

function* getCountryByAlphacodeWorker({ alphaCode }) {
  try {
    const { data } = yield axios.get(`${process.env.REACT_APP_GET_COUNTRY_URL}${alphaCode}`);
    yield put({ type: actionTypes.GET_COUNTRY_BY_ALPHACODE_REC, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.GET_COUNTRY_BY_ALPHACODE_REJ, error: error.message });
  }
}

export default function* countrySagaWatcher() {
  yield takeLatest(actionTypes.GET_ALL_COUNTRIES_REQUESTED, getAllCountriesWorker);
  yield takeLatest(actionTypes.GET_COUNTRY_BY_ALPHACODE_REQ, getCountryByAlphacodeWorker);
}
