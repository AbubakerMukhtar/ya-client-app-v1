import { combineReducers } from '@reduxjs/toolkit';
import clientAppReducer from '../../clientApp/components/biStepper/store';

const rootReducer = combineReducers({
  clientApp: clientAppReducer,
});

export default rootReducer;
