import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import isAuthenticated from './loginReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  isAuthenticated

});

export default rootReducer;
