import { createAction } from 'redux-actions';

import {
  GET_ALL_COUNTRIES_REQUESTED,
  GET_ALL_COUNTRIES_RECEIVED,
  GET_ALL_COUNTRIES_REJECTED,
  GET_COUNTRY_BY_ALPHACODE_REQ,
  GET_COUNTRY_BY_ALPHACODE_REC,
  GET_COUNTRY_BY_ALPHACODE_REJ,
  TOGGLE_POPUP_STATUS,
  CHANGE_CURRENT_PAGE,
} from '../common';

export const getAllCountriesAction = createAction(GET_ALL_COUNTRIES_REQUESTED);
export const getAllCountriesSuccessAction = createAction(GET_ALL_COUNTRIES_RECEIVED);
export const getAllCountriesFailAction = createAction(GET_ALL_COUNTRIES_REJECTED);

export const getCountryByAlphacodeAction = createAction(GET_COUNTRY_BY_ALPHACODE_REQ);
export const getCountryByAlphacodeSuccessAction = createAction(GET_COUNTRY_BY_ALPHACODE_REC);
export const getCountryByAlphacodeFailAction = createAction(GET_COUNTRY_BY_ALPHACODE_REJ);

export const togglePopupStatusAction = createAction(TOGGLE_POPUP_STATUS);
export const changeCurrentPageAction = createAction(CHANGE_CURRENT_PAGE);
