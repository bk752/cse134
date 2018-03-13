import {combineReducers} from 'redux';
import parts from './partsReducer';
import progress from './progressReducer';

const rootReducer = combineReducers({
	parts,
	progress
});

export default rootReducer;
