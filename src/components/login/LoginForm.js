import React from 'react';
import TextInput from '../common/TextInput';

/**
 * Defining Login page container that will pass down props to
 * login components
 */
const LoginForm = ({onLogin, username, password}) => {
  return(
    <TextInput
      name="username"
      label="Username"
      value={username}
      onChange={onChange}
      error={errors.title}/>
    <TextInput
      name="password"
      label="Password"
      value={password}
      onChange={onChange}
      error={errors.title}/>
  )
}
