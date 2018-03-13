import * as types from './actionTypes';

export function completeStep(date) {
	return {type: types.COMPLETE_STEP, date};
}

export function undoStep() {
	return {type: types.UNDO_STEP};
}
