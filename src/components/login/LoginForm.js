import React from 'react';
import TextInput from '../common/TextInput';

/**
 * Defining Login page container that will pass down props to
 * login components
 */
const LoginForm = ({onLogin, user, onChange,errors, logging, isAuthenticated}) => {
  return(
    <form className = "well">
      <TextInput
        name="username"
        label="Username"
        value={user.username}
        onChange={onChange}
        error={errors.username}/>
      <TextInput
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
        error={errors.password}/>
        <input
          type="submit"
          disabled={logging}
          value={logging ? 'Loging in...': 'Login'}
          className="btn btn-primary"
          onClick={onLogin}/>
        <label>{isAuthenticated}</label>
    </form>
  );
};

LoginForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onLogin: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
  logging: React.PropTypes.bool,
  isAuthenticated: React.PropTypes.bool.isRequired
};

export default LoginForm;
