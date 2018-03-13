import expect from 'expect';
import partsReducer from './partsReducer';
import * as partsActions from '../actions/partsActions';
import * as pickActions from '../actions/pickActions';
import Part from '../objects/Part';
import Category from '../objects/Category';

    /*const initialState = {
		list: [
			new Category("CPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img"),
			]),
			new Category("Motherboard").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img")
			]),
			new Category("GPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img")
			]),
		active: 0,
		adding: 0
		]
	};
	*/
describe('Course Reducer', () => {
  it('ADD_CATEGORY_PART should add part', () => {
    // arrange
    const initialState = {
		list: [
			new Category("CPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img"),
			])
		],
		active: 0,
		adding: 0
	};

    const action = partsActions.addPart("name", "info", "image", initialState.list[0]);
    const newState = partsReducer(initialState, action);

    //assert
    expect(newState.list[0].parts.length).toEqual(4);
    expect(newState.list[0].parts[2].name).toEqual('option c');
    expect(newState.list[0].parts[3].name).toEqual('name');
  });

  it('should remove part with RMEOVE_CATEGORY_PART', () => {
    // arrange
    const initialState = {
		list: [
			new Category("CPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img"),
			])
		],
		active: 0,
		adding: 0
	};

    const action = partsActions.removePart(initialState.list[0]);

    // act
    const newState = partsReducer(initialState, action);

    // assert
    expect(newState.list[0].parts.length).toEqual(2);
    expect(newState.list[0].parts[1].name).toEqual('option b');
  });

  it('should go to next category with EDIT_NEXT_CATEGORY', () => {
    // arrange
    const initialState = {
		list: [
			new Category("CPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img"),
			]),
			new Category("Motherboard").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img")
			])
		],
		active: 0,
		adding: 0
	};

    const action = partsActions.nextCategory(initialState.list[0]);

    // act
    const newState = partsReducer(initialState, action);

    // assert
    expect(newState.adding).toEqual(1);
  });

  it('should go to previous category with EDIT_PREV_CATEGORY', () => {
    // arrange
    const initialState = {
		list: [
			new Category("CPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img"),
			]),
			new Category("Motherboard").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img")
			])
		],
		active: 0,
		adding: 1
	};

    const action = partsActions.prevCategory(initialState.list[1]);

    // act
    const newState = partsReducer(initialState, action);

    // assert
    expect(newState.adding).toEqual(0);
  });

  it('select part with SELECT_CATEGORY_PART', () => {
    // arrange
    const initialState = {
		list: [
			new Category("CPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img"),
			]),
			new Category("Motherboard").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img")
			])
		],
		active: 0,
		adding: 0
	};

    const action = pickActions.selectPart(initialState.list[0], 1);

    // act
    const newState = partsReducer(initialState, action);

    // assert
    expect(newState.list[0].picked).toEqual(newState.list[0].parts[1]);
  });

  it('finish category with COMPLETE_CATEGORY', () => {
    // arrange
    const initialState = {
		list: [
			new Category("CPU").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img"),
			]),
			new Category("Motherboard").addPart([
				new Part("option a", "information about first option", "img"),
				new Part("option b", "information about second option", "img"),
				new Part("option c", "information about third option", "img")
			])
		],
		active: 0,
		adding: 0
	};

    const action = pickActions.completeCategory(initialState.list[0]);

    // act
    const newState = partsReducer(initialState, action);

    // assert
    expect(newState.list[0].complete).toEqual(true);
  });
});
