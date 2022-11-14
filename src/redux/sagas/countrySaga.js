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
    yield put(getAllCountriesFailAction(error));
  }
}

function* getCountryByAlphacodeWorker({ payload }) {
  try {
    const { data } = yield axios.get(`${process.env.REACT_APP_GET_COUNTRY_URL}${payload}`);
    const country = data.length ? data[0] : null;
    yield put(getCountryByAlphacodeSuccessAction(country));
  } catch (error) {
    yield put(getCountryByAlphacodeFailAction(error));
  }
}

export default function* countrySagaWatcher() {
  yield takeLatest(GET_ALL_COUNTRIES_REQUESTED, getAllCountriesWorker);
  yield takeLatest(GET_COUNTRY_BY_ALPHACODE_REQ, getCountryByAlphacodeWorker);
}
