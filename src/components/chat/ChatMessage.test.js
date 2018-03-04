import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import ChatMessage from './ChatMessage';
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
let testPart = new Part("GPU", 399.99, gpu1Image);
let category = new Category("CPU").addPart([new Part("i5 Processor", 197.89, i5Image), new Part("i7 Processor", 569.00, i7Image)]);
function setup(user, part, cat) {
	const props = {
		id: 6,
		owner: user,
		msg: "testMessage",
		part: part,
		cat: cat
	};

	let renderer = ShallowRenderer.createRenderer();
	renderer.render(<ChatMessage {...props}/>);
	let output = renderer.getRenderOutput();
	return output;
}

describe('Test PartsMessage', () => {
	
	it('rendering of a message with part card', () => {
		const output = setup('expert', testPart);
		expect(output.type).toBe('div');
		expect(output.props.className).toBe("chat__message-holder");
		let message = output.props.children;
		expect(message.type).toBe('div');
		expect(message.props.className).toBe('chat__message');
		expect(message.props.children[0]).toBe("testMessage");
		
		let card = message.props.children[1];
		expect(card.type).toBe('div');
		expect(card.props.className).toBe('part-card');

		let image = card.props.children[0];
		expect(image.type).toBe('img');
		expect(image.props.className).toBe('part-card__image');
		expect(image.props.src).toBe(gpu1Image);
		
		let title = card.props.children[1];
		expect(title.type).toBe('div');
		expect(title.props.className).toBe('part-card__title');
		expect(title.props.children).toBe('GPU');

		let desc = card.props.children[2];
		expect(desc.type).toBe('div');
		expect(desc.props.className).toBe('part-card__description');
		expect(desc.props.children).toBe('$399.99');

		let button = card.props.children[3];
		expect(button.type).toBe('button');
		expect(button.props.className).toBe('part-card__add');
		expect(button.props.children).toBe('Add to Build');
	});

	it('rendering of a message', () => {
		const output = setup('user', null, null);
		expect(output.type).toBe('div');
		expect(output.props.className).toBe("chat__message-holder chat__message-holder--user");
		let message = output.props.children;
		expect(message.type).toBe('div');
		expect(message.props.className).toBe('chat__message');
		expect(message.props.children).toBe("testMessage");
	});


	it('rendering of a message', () => {
		const output = setup('user', null, category);
		expect(output.type).toBe('div');
		expect(output.props.className).toBe("chat__message-holder chat__message-holder--user");
		let message = output.props.children;
		expect(message.type).toBe('div');

		let button = message.props.children[1];
		expect(button.type).toBe("button");
		expect(button.props.className).toBe("part-card__add");
		expect(button.props.children).toBe('Close');
	});
});