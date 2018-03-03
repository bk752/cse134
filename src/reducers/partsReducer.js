import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Category from '../objects/Category';

export default function partsReducer(state = initialState.parts, action) {
	let list;
	switch (action.type) {
	case types.SELECT_CATEGORY_PART:
		list = [...state.list.map(cat=> {
			if (cat.name !== action.category.name) {
				return cat;
			} else {
				return (new Category(action.category)).select(action.index);
			}
		})];

		return {
			list,
			active: state.active,
			adding: state.adding
		};

	case types.COMPLETE_CATEGORY:
		list = [...state.list.map(cat=> {
			if (cat.name !== action.category.name) {
				return cat;
			} else {
				return (new Category(action.category)).completeSelect();
			}
		})];

		return {
			list,
			active: state.active + 1,
			adding: state.adding
		};

	case types.ADD_CATEGORY_PART:
		list = [...state.list.map(cat=> {
			if (cat.name !== action.category.name) {
				return cat;
			} else {
				return (new Category(action.category)).addPart(action.part);
			}
		})];

		return {
			list,
			active: state.active,
			adding: state.adding
		};

	case types.REMOVE_CATEGORY_PART:
		list = [...state.list.map(cat=> {
			if (cat.name !== action.category.name) {
				return cat;
			} else {
				let newCat = (new Category(action.category));
				newCat.removePart();
				return newCat;
			}
		})];

		return {
			list,
			active: state.active,
			adding: state.adding
		};

	case types.EDIT_NEXT_CATEGORY:
		list = [...state.list.map(cat=> {
			if (cat.name !== action.category.name) {
				return cat;
			} else {
				let newCat = new Category(action.category);
				newCat.complete = true;
				return cat;
			}
		})];

		return {
			list,
			active: state.active,
			adding: state.adding + 1
		};

	case types.EDIT_PREV_CATEGORY:
		if (state.adding === 0) {
			return state;
		}
		list = [...state.list.map(cat=> {
			if (cat.name !== action.category.name) {
				return cat;
			} else {
				let newCat = new Category(action.category);
				newCat.complete = false;
				return cat;
			}
		})];

		return {
			list,
			active: state.active,
			adding: state.adding - 1
		};

	default:
		return state;
	}
}
