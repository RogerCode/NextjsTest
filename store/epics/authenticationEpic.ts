import { map, mergeMap } from 'rxjs/operators';
import { ActionsObservable, ofType } from 'redux-observable';
import { loginResponseSucces, registerResponseSucces } from '../actions/counterActions';
import axios from 'axios';
import { from } from 'rxjs';
import { CountersAction } from '../reducers/counterReducer';
import Router from 'next/router';


export const loginUserEpic = (action$: ActionsObservable<CountersAction>) =>
  action$.pipe(
    ofType("LOGIN_REQUEST"),
    mergeMap(action => from(axios.post('http://localhost:8080/authentication/login', action.payload))
      .pipe(
        map((response: any) => {
          console.log("User logged in");
          Router.push('/home');
          return loginResponseSucces(
            {
              token: response.data
            }
          )
        })
      )),
  );

export const registerUserEpic = (action$: ActionsObservable<CountersAction>) =>
  action$.pipe(
    ofType("REGISTER_REQUEST"),
    mergeMap(action => from(axios.post('http://localhost:8080/authentication/register', action.payload))
      .pipe(
        map((response: any) => {
          return registerResponseSucces(
            {
              token: response.data
            }
          )
        })
      )),
  );

