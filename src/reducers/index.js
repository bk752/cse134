import {combineReducers} from 'redux';
import parts from './partsReducer';

const rootReducer = combineReducers({
	parts,
});

export default rootReducer;
