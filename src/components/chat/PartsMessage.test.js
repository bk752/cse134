import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import shallow from 'enzyme';
import PartsMessage from './PartsMessage';
import Part from '../../objects/Part';
import Category from '../../objects/Category';
import i3Image from '../../../images/i3.jpeg';
import i5Image from '../../../images/i5.jpeg';
import i7Image from '../../../images/i7.jpeg';

import mb1Image from '../../../images/mb1.jpeg';
import mb2Image from '../../../images/mb2.jpeg';
import mb3Image from '../../../images/mb3.jpeg';

import gpu1Image from '../../../images/gpu1.jpeg';
import gpu2Image from '../../../images/gpu2.jpeg';
import gpu3Image from '../../../images/gpu3.jpeg';


function setup() {
	const props ={
		part: new Part("GPU", 399.99, gpu1Image),
	};

	let renderer = new ShallowRenderer();
	renderer.render(<PartsMessage {...props}/>);
	let output = renderer.getRenderOutput();
	return output;
}

describe('Test PartsMessage', () => {
	it('initial rendering of parts message', () => {
		const output = setup();
		expect(output.type).toBe('div');

		let image = output.props.children[0];
		expect(image.type).toBe('img');
		expect(image.props.src).toBe(gpu1Image);
		expect(image.props.className).toBe('part-card__image');

		let title = output.props.children[1];
		expect(title.type).toBe('div');
		expect(title.props.className).toBe('part-card__title');
		expect(title.props.children).toBe('GPU');

		let desc = output.props.children[2];
		expect(desc.type).toBe('div');
		expect(desc.props.className).toBe('part-card__description');
		expect(desc.props.children).toBe('$399.99');

		let button = output.props.children[3];
		expect(button.type).toBe('button');
		expect(button.props.className).toBe('part-card__add');
		expect(button.props.children).toBe('Add part');
	});

});