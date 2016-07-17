import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';


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
      }
    }

  }
  updateInputState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}
