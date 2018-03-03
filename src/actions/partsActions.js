import * as types from './actionTypes';
import Part from '../objects/Part';

export function addPart(name, disc, image, category) {
	return {type: types.ADD_CATEGORY_PART, part: new Part(name, disc, image), category};
}

export function removePart(category) {
	return {type: types.REMOVE_CATEGORY_PART, category};
}

export function nextCategory(category) {
	return {type: types.EDIT_NEXT_CATEGORY, category};
}

export function prevCategory(category) {
	return {type: types.EDIT_PREV_CATEGORY, category};
}
