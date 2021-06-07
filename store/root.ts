import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer'
import { loginUserEpic, registerUserEpic } from './epics/authenticationEpic'
import { combineEpics } from 'redux-observable';


const rootReducer = combineReducers(
  counterReducer
);
export const rootEpic = combineEpics(
  loginUserEpic,
  registerUserEpic
);

export default rootReducer;