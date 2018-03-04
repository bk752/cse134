import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Timeline from './Timeline';
import Category from '../../objects/Category';
import Part from '../../objects/Part';

function setup(part) {
	let props = {
		title: "title",
		active: true,
		first: true,
		last: false,
		info: "information",
	};

	let renderer = new ShallowRenderer();
	renderer.render(<Timeline {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('Timeline via React Test Utils', () => {
	it('root has correct classes', () => {
		const { output } = setup();
		expect(output.type).toEqual('div');
		expect(output.props.className).toContain('timeline-item--active');
		expect(output.props.className).toContain('timeline-item--first');
		expect(output.props.className).not.toContain('timeline-item--last');
		let text = output.props.children[1];
		expect(text.type).toEqual('div');
		expect(text.props.children[0].props.children).toEqual("title");
		expect(text.props.children[1].props.children).toEqual("information");
	});
});
