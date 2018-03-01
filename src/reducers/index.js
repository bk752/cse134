import {combineReducers} from 'redux';
import courses from './courseReducer';
import parts from './partsReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  parts,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
