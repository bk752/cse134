import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PartsCategory from './PartsCategory';
import Category from '../../objects/Category';
import Part from '../../objects/Part';
import Timeline from '../common/Timeline';

function setup(active) {
	let props = {
		category: new Category("Category"),
		first: true,
		last: true,
		active,
	};

	let renderer = new ShallowRenderer();
	renderer.render(<PartsCategory {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('PartsCategory via React Test Utils', () => {
	it('renders form in Timeline', () => {
		const { output } = setup(true);
		expect(output.type).toEqual(Timeline);
		let form = output.props.children;
		expect(form.type).toBe('form');
	});

	it('does not render form in Timeline', () => {
		const { output } = setup(false);
		expect(output.type).toEqual(Timeline);
		let form = output.props.children;
		expect(form).toBe(false);
	});
});
