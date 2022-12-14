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

const initialState = {
  countries: [],
  country: null,
  isLoading: false,
  error: '',
  popupStatus: false,
  currentPage: 1,
};

export default function countryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_COUNTRIES_REQUESTED:
    case GET_COUNTRY_BY_ALPHACODE_REQUESTED:
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

    case GET_COUNTRY_BY_ALPHACODE_RECEIVED:
      return {
        ...state,
        isLoading: false,
        country: action.payload,
      };

    case GET_ALL_COUNTRIES_REJECTED:
    case GET_COUNTRY_BY_ALPHACODE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case TOGGLE_POPUP_STATUS:
      return {
        ...state,
        popupStatus: action.payload,
      };

    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default: return state;
  }
}
