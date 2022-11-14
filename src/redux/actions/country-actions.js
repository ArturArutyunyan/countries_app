import { createAction } from 'redux-actions';

import {
  GET_ALL_COUNTRIES_REQUESTED,
  GET_ALL_COUNTRIES_RECEIVED,
  GET_ALL_COUNTRIES_REJECTED,
  GET_COUNTRY_BY_ALPHACODE_REQUESTED,
  GET_COUNTRY_BY_ALPHACODE_RECEIVED,
  GET_COUNTRY_BY_ALPHACODE_REJECTED,
  TOGGLE_POPUP_STATUS,
  CHANGE_CURRENT_PAGE,
} from '../common';

export const getAllCountriesAction = createAction(GET_ALL_COUNTRIES_REQUESTED);
export const getAllCountriesSuccessAction = createAction(GET_ALL_COUNTRIES_RECEIVED);
export const getAllCountriesFailAction = createAction(GET_ALL_COUNTRIES_REJECTED);

export const getCountryByAlphacodeAction = createAction(GET_COUNTRY_BY_ALPHACODE_REQUESTED);
export const getCountryByAlphacodeSuccessAction = createAction(GET_COUNTRY_BY_ALPHACODE_RECEIVED);
export const getCountryByAlphacodeFailAction = createAction(GET_COUNTRY_BY_ALPHACODE_REJECTED);

export const togglePopupStatusAction = createAction(TOGGLE_POPUP_STATUS);
export const changeCurrentPageAction = createAction(CHANGE_CURRENT_PAGE);
