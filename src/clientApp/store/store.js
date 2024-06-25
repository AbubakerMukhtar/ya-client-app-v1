import { createStore, combineReducers } from 'redux';

// Initial state
const initialState = {
  activeStep: 0
};

// Actions
const NEXT_STEP = 'NEXT_STEP';
const PREVIOUS_STEP = 'PREVIOUS_STEP';
const SET_STEP = 'SET_STEP';

export const nextStep = () => ({ type: NEXT_STEP });
export const previousStep = () => ({ type: PREVIOUS_STEP });
export const setStep = (step) => ({ type: SET_STEP, payload: step });

// Reducer
const stepperReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return { ...state, activeStep: state.activeStep + 1 };
    case PREVIOUS_STEP:
      return { ...state, activeStep: state.activeStep - 1 };
    case SET_STEP:
      return { ...state, activeStep: action.payload };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  stepper: stepperReducer
});

// Create store
const store = createStore(rootReducer);

export default store;
