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
        active: state.active
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
        active: state.active + 1
      };

    default:
      return state;
  }
}
