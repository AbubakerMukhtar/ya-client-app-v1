import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeStep: 0
};

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.activeStep += 1;
    },
    previousStep: (state) => {
      state.activeStep -= 1;
    },
    setStep: (state, action) => {
      state.activeStep = action.payload;
    }
  }
});

export const { nextStep, previousStep, setStep } = stepperSlice.actions;
export default stepperSlice.reducer;
