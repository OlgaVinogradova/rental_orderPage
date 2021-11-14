import { combineReducers } from 'redux';

import cityReducer from './cityReducer';
import pointReducer from './pointReducer';
import tabsData from './tabsData';
import tabReducer from './tabReducer';
import stepReducer from './stepReducer';
import filters from './filters';
import category from './category'
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  point: pointReducer,
  tabsData,
  tab: tabReducer,
  filters,
  category,
  cars: carsReducer,
  step: stepReducer,
});

export default rootReducer;