import { combineReducers } from '@reduxjs/toolkit';
import clientApp from '../../yogiApp/BI/store/index';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    clientApp,
    ...asyncReducers
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'user/userLoggedOut') {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
