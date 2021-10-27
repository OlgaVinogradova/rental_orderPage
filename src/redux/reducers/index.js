import { combineReducers } from 'redux';

import cityReducer from './cityReducer';
import pointReducer from './cityReducer';
import tabsData from './tabsData';
import tabReducer from './tabReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  point: pointReducer,
  tabsData,
  tab: tabReducer,
  booking: bookingReducer,
});

export default rootReducer;