import {combineReducers} from 'redux';
import parts from './partsReducer';
import progress from './progressReducer';
import description from './descriptionReducer';
import chat from './chatReducer';
import account from './accountReducer';

const rootReducer = combineReducers({
	parts,
	progress,
	description,
	chat,
	account
});

export default rootReducer;
