import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import LoginForm from './LoginForm';


/**
 * Defining Login page container that will pass down props to
 * login components
 */
class LoginPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      user:{
        username:"",
        password:""
      },
      errors: {},
      logging: false
    };
    this.onLogin = this.onLogin.bind(this);
    this.updateInputState = this.updateInputState.bind(this);

  }
  updateInputState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  onLogin(event){
    event.preventDefault();
    this.setState({saving: true});
    alert("username: "+this.state.user.username);
  }

  render(){
    return(
      <LoginForm
        onChange = {this.updateInputState}
        user = {this.state.user}
        errors = {this.state.errors}
        logging = {this.state.logging}
        onLogin = {this.onLogin}
        />
    );
  }
}

LoginPage.propTypes = {

};



export default connect()(LoginPage);
