import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PartsOption from './PartsOption';
import Category from '../../objects/Category';
import Part from '../../objects/Part';
import Timeline from '../common/Timeline';

function setup(part) {
	let props = {
		part,
		first: true,
		last: true,
		active: true,
	};

	let renderer = new ShallowRenderer();
	renderer.render(<PartsOption {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('PartsCategory via React Test Utils', () => {
	it('renders title and description', () => {
		let part = new Part("part", "desc", "img");
		const { output } = setup(part);
		expect(output.type).toEqual('label');
		let description = output.props.children[2];
		expect(description.props.children).toEqual(part.desc);
	});
});
