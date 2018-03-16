import * as types from './actionTypes';
import ProgressApi from '../api/progressApi';

export function loadStepsSuccess(steps) {
	return {type: types.LOAD_STEPS_SUCCESS, steps};
}

export function undoStepSuccess(steps) {
	return {type: types.UNDO_STEP_SUCCESS, steps};
}

export function completeStepSuccess(steps) {
	return {type: types.COMPLETE_STEP_SUCCESS, steps};
}

export function completeStep(date) {
	return {type: types.COMPLETE_STEP, date};
}

export function undoStep() {
	return {type: types.UNDO_STEP};
}

export function loadSteps() {
	return function(dispatch) {
		return ProgressApi.getAllSteps().then(
			function(steps) {
				dispatch(loadStepsSuccess(steps));
			}
		);
	};
}

export function completeStepOnServer(active, date) {
	return function(dispatch) {
		return ProgressApi.completeStep(active, date).then(
			function(steps) {
				dispatch(completeStepSuccess(steps));
			}
		);
	};
}

export function undoStepOnServer(active) {
	return function(dispatch) {
		return ProgressApi.undoStep(active).then(
			function(steps) {
				dispatch(undoStepSuccess(steps));
			}
		);
	};
}