import * as types from './actionTypes';
import when from 'when';
import request from 'request';

export function loginUserSuccess(jwt){
  return { type: types.LOGIN_USER_SUCCESS, jwt};
}

//sdfsdf
export function loginUser(username, password) {
  return function(dispatch){
    return when(request({
      url: 'http://localhost:8080/employee',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    })).then(function(response){
      let jwt = response.id_token;

      this.context.router.push('/courses');
      localStorage.setItem('jwt', jwt);
      return function(dispatch){
        dispatch(loginUserSuccess(jwt));
      };
    });
  };
}
