import { combineReducers } from '@reduxjs/toolkit';
import stepperReducer from './stepperSlice';

const clientAppReducer = combineReducers({
  stepper: stepperReducer,
});

export default clientAppReducer;
