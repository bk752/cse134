import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import initialState from '../../reducers/initialState';
import {PickPage} from './PickPage';
import Category from '../../objects/Category';
import Part from '../../objects/Part';
import CenterPage from '../common/CenterPage';

function setup(saving) {
	let props = {
		parts: initialState.parts.list,
		active: initialState.parts.active
	};

	let renderer = new ShallowRenderer();
	renderer.render(<PickPage {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('PartsCategory via React Test Utils', () => {
	it('renders div in CenterPage', () => {
		const { output } = setup();
		expect(output.type).toEqual(CenterPage);
		let div = output.props.children;
		expect(div.type).toBe('div');
	});
});
