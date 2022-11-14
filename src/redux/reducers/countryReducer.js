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

const initialState = {
  countries: [],
  country: [],
  isLoading: false,
  error: '',
  popupStatus: false,
  currentPage: 1,
};

export default function countryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_COUNTRIES_REQUESTED:
    case GET_COUNTRY_BY_ALPHACODE_REQ:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ALL_COUNTRIES_RECEIVED:
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
      };

    case GET_COUNTRY_BY_ALPHACODE_REC:
      return {
        ...state,
        isLoading: false,
        country: action.payload,
      };

    case GET_ALL_COUNTRIES_REJECTED:
    case GET_COUNTRY_BY_ALPHACODE_REJ:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case TOGGLE_POPUP_STATUS:
      return {
        ...state,
        popupStatus: action.popupStatus,
      };

    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default: return state;
  }
}
