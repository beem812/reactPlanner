import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  /**
   * Called when props changes allowing for automatic
   * updating of props after async calls comeback.
   * @param  {[props]} nextProps the properties that have changed.
   * @return {[type]}           [description]
   */
  componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  /**
   * Used to save the course that a user creates.
   * Calls our fake api with the course data then dumps the user back on
   * the courses page.
   */
  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect(){
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return(
        <CourseForm
           allAuthors = {this.props.authors}
           onChange={this.updateCourseState}
           onSave={this.saveCourse}
           course = {this.state.course}
           errors = {this.state.errors}
           saving = {this.state.saving}
           />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCoursebyId(courses, courseId){
  const course = courses.filter(course=> course.id == courseId);
  if(course) return course[0]; //filter returns an array, the first object in it will be what we want
  return null;
}

function mapStateToProps(state, ownProps){
  const courseId = ownProps.params.id; //from the path '/course/:id'
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if (courseId && state.courses.length > 0){
    course = getCoursebyId(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' '+author.lastName
    };
  });
  return{
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
