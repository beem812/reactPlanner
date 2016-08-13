import * as types from './actionTypes';
import $ from 'jquery';

export function loginUserSuccess(){
  return { type: types.LOGIN_USER_SUCCESS};
}

export function loginUserFailure(){
  return { type: types.LOGIN_USER_FAILURE};
}

export function loginUser(username, password) {

  console.log("username ");
  console.log(username);
  let data = {username: username, password: password};

  return function(dispatch){

    return $.post('/authenticate',{
      username: username,
      password: password
    })
    .then(function sccess(data){
      let jwt = data.token;
      if(!jwt){
        dispatch(loginUserFailure());
      }
      localStorage.setItem('jwt', jwt);
      console.log(data.token);
      console.log("we got to dispatch");
      dispatch(loginUserSuccess());
    },function fail(data){
        console.log(data);
    });
  };
}
