import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CenterPage from './CenterPage';
import Category from '../../objects/Category';
import Part from '../../objects/Part';

function setup(part) {
	let props = {
		title: "title",
		children: <span>{"test"}</span>,
	};

	let renderer = new ShallowRenderer();
	renderer.render(<CenterPage {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('CenterPage via React Test Utils', () => {
	it('root has correct classes', () => {
		const { output } = setup();
		expect(output.type).toEqual('div');
		let inherit = output.props.children[1];
		expect(inherit.type).toEqual('span');
	});
});
