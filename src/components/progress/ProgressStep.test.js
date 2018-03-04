import expect from 'expect';
import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProgressStep from './ProgressStep';
import Category from '../../objects/Category';
import Step from '../../objects/Step';
import Timeline from '../common/Timeline';

function setup(part) {
	let props = {
		step: new Step("test").complete(new Date(0)),
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
	configure({ adapter: new Adapter() });

	it('renders completion date', () => {
		const { output } = setup();
		expect(output.type).toEqual(Timeline);
		let form = output.props.info;
		expect(form).toBe(`Completed ${(new Date(0)).toDateString()}`);
	});

	it('Check previous section button', () => {
		let index = 0;
		let props = {
			step: new Step("test"),
			first: true,
			last: true,
			activeOffset: -1,
			completeStep: () => index = index + 1,
			undoStep: () => index = index - 1
		};

		index = 0;
		const wrapper = mount(<ProgressStep {...props}/>);
		const prevButton = wrapper.children().children().find('button').first();
		expect(prevButton.prop('onClick')).toEqual(props.undoStep);
		prevButton.simulate('click');
		expect(index).toBe(-1);
	});

	it('Check next section button', () => {
		let index = 0;
		let props = {
			step: new Step("test"),
			first: true,
			last: true,
			activeOffset: 0,
			completeStep: () => index = index + 1,
			undoStep: () => index = index - 1
		};
		const wrapper = mount(<ProgressStep {...props}/>);
		const nextButton = wrapper.children().children().find('button').first();
		expect(nextButton.prop('onClick')).toEqual(props.completeStep);
		nextButton.simulate('click');
		expect(index).toBe(1);
	});
});
