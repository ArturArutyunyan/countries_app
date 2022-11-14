import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { GET_ALL_COUNTRIES_REQUESTED, GET_COUNTRY_BY_ALPHACODE_REQ } from '../common';
import {
  getAllCountriesSuccessAction,
  getAllCountriesFailAction,
  getCountryByAlphacodeSuccessAction,
  getCountryByAlphacodeFailAction,
} from '../actions';

function* getAllCountriesWorker() {
  try {
    const { data } = yield axios.get(process.env.REACT_APP_GET_COUNTRY_LIST_URL);
    yield put(getAllCountriesSuccessAction(data));
  } catch (error) {
    yield put(getAllCountriesFailAction());
  }
}

function* getCountryByAlphacodeWorker({ alphaCode }) {
  try {
    const { data } = yield axios.get(`${process.env.REACT_APP_GET_COUNTRY_URL}${alphaCode}`);
    yield put(getCountryByAlphacodeSuccessAction(data));
  } catch (error) {
    yield put(getCountryByAlphacodeFailAction());
  }
}

export default function* countrySagaWatcher() {
  yield takeLatest(GET_ALL_COUNTRIES_REQUESTED, getAllCountriesWorker);
  yield takeLatest(GET_COUNTRY_BY_ALPHACODE_REQ, getCountryByAlphacodeWorker);
}
