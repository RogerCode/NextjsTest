import { CountersState } from '../states/counterState';
import * as counters from '../actions/counterActions';
import { ActionType } from 'typesafe-actions';
import Router from 'next/router'

export type CountersAction = ActionType<typeof counters>;

export default function todos(state: CountersState = {
  reduxCounter: 1,
  token: undefined,
  isLogged: false
}, action) {

  switch (action.type) {
    case "INCREMENT":
      return state.reduxCounter + 1;

    case "ADD":
      return state;

    case "INCREMENT_SUCCES":
      return state.reduxCounter + 1;

    case "LOGIN_RESPONSE_SUCCES":
      return {
        ...state,
        token: action?.payload?.token,
        isLogged: true
      };
    case "REGISTER_RESPONSE_SUCCES":
      console.log("Register response succes")
      return {
        ...state,
        token: action?.payload?.token,
        isLogged: true
      };

    default:
      return state;
  }
}