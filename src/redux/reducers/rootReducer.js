import { combineReducers } from 'redux';

import userReducer from './userReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  userReducer,
  countryReducer,
});

export default rootReducer;
