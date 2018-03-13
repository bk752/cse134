import expect from 'expect';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';
import {PartsPage} from './PartsPage';
import CenterPage from '../common/CenterPage';
import initialState from '../../reducers/initialState';


function setup(saving) {
	let props = {
		parts: initialState.parts.list,
		active: initialState.parts.active
	};

	let renderer = new ShallowRenderer();
	renderer.render(<PartsPage {...props}/>);
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
		expect(div.props.children.length).toBe(initialState.parts.list.length);
	});
});
