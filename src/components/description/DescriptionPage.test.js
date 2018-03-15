import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import {DescriptionPage} from './DescriptionPage';
import { mount, configure, shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import CenterPage from '../common/CenterPage';
import DescriptionStyle from './DescriptionStyle';


function setup(saving) {
	let props = {
		text: initialState.description.text,
		filledOut: initialState.description.filledOut
	};
	let renderer = new ShallowRenderer();
	renderer.render(<DescriptionPage {...props}/>);
	return renderer.getRenderOutput();
	//return shallow(<DescriptionPage {...props}/>);
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

		const output = setup();
		expect(output.type).toBe(CenterPage);
		expect(output.props.title).toBe("Add a Description");
		let div = output.props.children;
		expect(div.type).toBe("div");
		expect(div.props.id).toBe("description");

		let textarea = div.props.children[0];
		expect(textarea.type).toBe('textarea');
		expect(textarea.props.style).toEqual(DescriptionStyle.description_box);
		expect(textarea.props.placeholder).toBe('Add a description of the type of computer you want to build');
		expect(textarea.props.value).toBe("");

		let button = div.props.children[1];
		expect(button.type).toBe('button');
		expect(button.props.id).toBe('button');
		expect(button.props.type).toBe('button');
		expect(button.props.children).toBe('Save Description');
	});

});