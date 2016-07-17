import React from 'react';
import TextInput from '../common/TextInput';

/**
 * Defining Login page container that will pass down props to
 * login components
 */
const LoginForm = ({onLogin, user, onChange}) => {
  return(
    <form>
      <TextInput
        name="username"
        label="Username"
        value={user.username}
        onChange={onChange}
        error={errors.title}/>
      <TextInput
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
        error={errors.title}/>
    </form>
  );
};

LoginForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onLogin: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};
