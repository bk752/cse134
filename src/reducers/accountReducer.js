import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.account, action) {
	switch (action.type) {

	case types.LOG_IN:
		return { 
			loggedIn: true
		};
    
	case types.LOG_OUT:
		return {
			loggedIn: false
		};
        
	default:
		return state;
	}
}
