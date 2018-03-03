import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProgressStep from './ProgressStep';
import Category from '../../objects/Category';
import Step from '../../objects/Step';
import Timeline from '../common/Timeline';

function setup(part) {
	let props = {
		step: new Step("test"),
		first: true,
		last: true,
		active: true,
	};

	let renderer = new ShallowRenderer();
	renderer.render(<ProgressStep {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('ProgressStep via React Test Utils', () => {
	it('renders title and description', () => {
		const { output } = setup();
		expect(output.type).toEqual(Timeline);
		let form = output.props.info;
		expect(form.type).toBe('div');
	});
});
