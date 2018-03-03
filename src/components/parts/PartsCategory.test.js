import expect from 'expect';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';
import PartsCategory from './PartsCategory';
import Category from '../../objects/Category';
import Part from '../../objects/Part';
import Timeline from '../common/Timeline';


function setup(saving) {
	let props = {
		category: new Category("Category"),
		first: true,
		last: true,
		active: true,
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
	configure({ adapter: new Adapter() });
	it('renders form in Timeline', () => {
		const { output } = setup();
		expect(output.type).toEqual(Timeline);
		let form = output.props.children;
		expect(form.type).toBe('div');
	});

	it('sets error message when trying to save empty title', () => {
		let index = 0;
		let props = {
			category: new Category("Category"),
			first: true,
			last: true,
			active: true,
			prevCategory: () => index = index - 1
		};
		const wrapper = mount(<PartsCategory {...props}/>);
		const prevButton = wrapper.find('button').last();
		expect(prevButton.prop('onClick')).toEqual(props.prevCategory);
		prevButton.simulate('click');
		expect(index).toBe(-1);
	});
});
