import { combineReducers } from '@reduxjs/toolkit';
import stepperSlice from './stepperSlice';

const reducer = combineReducers({
    stepperSlice,
});
export default reducer;
