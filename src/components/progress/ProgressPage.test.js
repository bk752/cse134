import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ProgressPage} from './ProgressPage';
import Category from '../../objects/Category';
import Part from '../../objects/Part';
import CenterPage from '../common/CenterPage';
import {steps} from '../../api/progressApi';
function setup(saving) {
	let props = {
		steps: steps,
		active: 0
	};
	props.actions = {
		completeStep: () => props.active = props.active + 1,
		undoStep: () => props.active = props.active - 1,
	};

	let renderer = new ShallowRenderer();
	renderer.render(<ProgressPage {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('ProgressPage via React Test Utils', () => {
	it('renders div in CenterPage', () => {
		const { output } = setup();
		expect(output.type).toEqual(CenterPage);
		let div = output.props.children;
		expect(div.type).toBe('div');
		expect(div.props.children.length).toBe(6);
	});

	it('test step completion', () => {
		let props = {
			steps: steps,
			active: 0
		};
		props.actions = {
			completeStepOnServer: () => props.active = props.active + 1,
			undoStepOnServer: () => props.active = props.active - 1,
		};

		const wrapper = mount(<ProgressPage {...props}/>);
		expect(props.active).toBe(0);
		const nextButton = wrapper.find('button').first();
		nextButton.simulate('click');
		expect(props.active).toBe(1);
	});

	it('test step undo', () => {
		let props = {
			steps: steps,
			active: 1,
		};
		props.actions = {
			completeStepOnServer: () => props.active = props.active + 1,
			undoStepOnServer: () => props.active = props.active - 1,
		};

		const wrapper = mount(<ProgressPage {...props}/>);
		expect(props.active).toBe(1);
		let sum = wrapper.instance();
		const prevButton = wrapper.find('button').first();
		prevButton.simulate('click');
		expect(props.active).toBe(0);
	});
});
