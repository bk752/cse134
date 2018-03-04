import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import initialState from '../../reducers/initialState';
import {ProgressPage} from './ProgressPage';
import Category from '../../objects/Category';
import Part from '../../objects/Part';
import CenterPage from '../common/CenterPage';

function setup(saving) {
	let props = {
		parts: initialState.parts.list,
		active: initialState.parts.active
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
			parts: initialState.parts.list,
			active: initialState.parts.active
		};

		const wrapper = shallow(<ProgressPage {...props}/>);
		expect(wrapper.state().active).toBe(0);
		let sum = wrapper.instance();
		sum.completeStep();
		expect(wrapper.state().active).toBe(1);
	});

	it('test step undo', () => {
		let props = {
			parts: initialState.parts.list,
			active: initialState.parts.active
		};

		const wrapper = shallow(<ProgressPage {...props}/>);
		expect(wrapper.state().active).toBe(0);
		let sum = wrapper.instance();
		sum.undoStep();
		expect(wrapper.state().active).toBe(-1);
	});
});
