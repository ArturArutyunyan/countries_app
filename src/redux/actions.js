import * as actionTypes from './constants';

export const login = (payload) => ({
  type: actionTypes.AUTH_USER_REQUESTED,
  user: payload,
});

export const logout = () => ({
  type: actionTypes.LOGOUT_REQUESTED,
});

export const getAllCountries = () => ({
  type: actionTypes.GET_ALL_COUNTRIES_REQUESTED,
});

export const togglePopupStatus = (payload) => ({
  type: actionTypes.TOGGLE_POPUP_STATUS,
  popupStatus: payload,
});

export const getCountryByAlphacode = (payload) => ({
  type: actionTypes.GET_COUNTRY_BY_ALPHACODE_REQ,
  alphaCode: payload,
});

export const changeCurrentPage = (payload) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage: payload,
});