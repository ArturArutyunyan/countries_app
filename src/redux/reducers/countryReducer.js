import {
  GET_ALL_COUNTRIES_RECEIVED,
  GET_ALL_COUNTRIES_REJECTED,
  TOGGLE_POPUP_STATUS,
  GET_COUNTRY_BY_ALPHACODE_REC,
  GET_COUNTRY_BY_ALPHACODE_REJ,
} from '../constants';

const initialState = {
  countries: [],
  country: [],
  popupStatus: false,
  error: '',
};

export default function countryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_COUNTRIES_RECEIVED:
      return {
        ...state,
        countries: action.payload
      };

    case GET_COUNTRY_BY_ALPHACODE_REC:
      return {
        ...state,
        country: action.payload
      };

    case GET_ALL_COUNTRIES_REJECTED:
    case GET_COUNTRY_BY_ALPHACODE_REJ:
      return {
        ...state,
        error: action.error
      };

    case TOGGLE_POPUP_STATUS:
      return {
        ...state,
        popupStatus: action.popupStatus
      };
    default: return state;
  }
}