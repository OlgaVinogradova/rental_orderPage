import { combineReducers } from 'redux';

import cityReducer from './cityReducer';
import pointReducer from './pointReducer';
import tabReducer from './tabReducer';
import stepReducer from './stepReducer';
import filters from './filters';
import carsReducer from './carsReducer';
import rateTypeReducer from './rateTypeReducer';
import addServicesReducer from './addServicesReducer';
import datePikerReducer from './datePikerReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  point: pointReducer,
  tab: tabReducer,
  filters,
  cars: carsReducer,
  step: stepReducer,
  rate: rateTypeReducer,
  addServices: addServicesReducer,
  datePiker: datePikerReducer
});

export default rootReducer;