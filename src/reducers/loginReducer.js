import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.isAuthenticated, action){
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return state = true;
    case types.LOGIN_USER_FAILURE:
      return state = false;
    default:
      return state;
  }
}
