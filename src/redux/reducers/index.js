import { combineReducers } from 'redux';

import cityReducer from './cityReducer';
import pointReducer from './pointReducer';
import tabsData from './tabsData';
import tabReducer from './tabReducer';
import bookingReducer from './bookingReducer';
import filters from './filters';
import category from './category'
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  point: pointReducer,
  tabsData,
  tab: tabReducer,
  booking: bookingReducer,
  filters,
  category,
  cars: carsReducer,
});

export default rootReducer;