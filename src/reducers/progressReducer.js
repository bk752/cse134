import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Step from '../objects/Step';

export default function progressReducer(state = initialState.progress, action) {
	let list;
	switch (action.type) {
	case types.LOAD_STEPS_SUCCESS:
		return {
			list : action.steps,
			active: state.active
		};
	
	case types.COMPLETE_STEP_SUCCESS:
		return {
			list : action.steps,
			active: state.active + 1
		};

	case types.UNDO_STEP_SUCCESS:
		return {
			list: action.steps,
			active: state.active - 1
		};
		
	case types.COMPLETE_STEP:
		list = [...state.list.map((step, index)=> {
			if (index !== state.active) {
				return step;
			} else {
				let newStep = (new Step(step.name));
				newStep.complete(action.date);
				return newStep;
			}
		})];

		return {
			list,
			active: state.active + 1
		};

	case types.UNDO_STEP:
		list = [...state.list.map((step, index)=> {
			if (index !== state.active - 1) {
				return step;
			} else {
				let newStep = (new Step(step.name));
				newStep.reset();
				return newStep;
			}
		})];

		return {
			list,
			active: state.active - 1
		};

	default:
		return state;
	}
}
