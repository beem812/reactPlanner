import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import jwt from './loginReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  jwt

});

export default rootReducer;
