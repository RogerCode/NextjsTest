import { createAction } from 'typesafe-actions';
import { loginRequestType, loginResponseSuccesType, registerRequestType } from '../Types/authenticationTypes';

export const emptyAction = createAction("INCREMENT")<void>();
export const testIncrement = createAction("TEST_INCREMENT")<void>();
export const incrementSucces = createAction("INCREMENT_SUCCES")<void>();
export const payloadAction = createAction("ADD")<{}>();
export const loginRequest = createAction("LOGIN_REQUEST")<loginRequestType>();
export const loginResponseSucces = createAction("LOGIN_RESPONSE_SUCCES")<loginResponseSuccesType>();
export const registerRequest = createAction("REGISTER_REQUEST")<registerRequestType>();
export const registerResponseSucces = createAction("REGISTER_RESPONSE_SUCCES")<loginResponseSuccesType>();