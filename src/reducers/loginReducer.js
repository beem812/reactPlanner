import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.jwt, action){
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.jwt)
      ];
    default:
      return state;
  }
}
