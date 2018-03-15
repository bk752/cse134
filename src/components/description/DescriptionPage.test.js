import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import {DescriptionPage} from './DescriptionPage';
import { mount, configure } from 'enzyme';
import initialState from '../../reducers/initialState';


function setup(saving) {
	let props = {
		text: initialState.description.text,
		filledOut: initialState.description.filledOut
	};
	let renderer = new ShallowRenderer();
	renderer.render(<DescriptionPage {...props}/>);
	return renderer.getRenderOutput();
	//return mount(<DescriptionPage {...props}/>);
}

describe('Test render of DescriptionPage', () => {
	it('initial rendering of Description message', () => {
		/*const wrapper = setup();
		let title = wrapper.find('.pagetitle');
		expect(title.get(0).props.children).toBe('Add a Description');

		let description = wrapper.find('#description');
		let textarea = description.childAt(0);
		expect(textarea.type()).toBe('textarea');
		expect(textarea.hasClass('description_box')).toBe(true);
		expect(textarea.get(0).props.placeholder).toBe('Add a description of the type of computer you want to build');
		expect(textarea.get(0).props.value).toBe("");

		let button = description.childAt(1);
		expect(button.type()).toBe('button');
		expect(button.get(0).props.id).toBe('button');
		expect(button.get(0).props.type).toBe('button');
		expect(button.get(0).props.children).toBe('Submit');*/
		let output = setup();
	});

});