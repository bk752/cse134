import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import { mount, configure, shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import CenterPage from '../common/CenterPage';
import Message from '../../objects/Message';
import Part from '../../objects/Part';
import {ChatPage} from './ChatPage';
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
import initialState from '../../reducers/initialState';

import PartsStyle from './PartsStyle';
let props = {
	messages: initialState.chat.messages,
	id: initialState.chat.id
};

function setup(saving) {
	let renderer = new ShallowRenderer();
	renderer.render(<ChatPage {...props}/>);
	let output = renderer.getRenderOutput();

	return {output, renderer};
}

describe('Test ChatPage React Components', () => {
	it('initial rendering of chat page', () => {
		const {output} = setup();
		expect(output.type).toBe('div');
		expect(output.props.children.length).toBe(2);

		let price = output.props.children[0];
		expect(price.type).toBe('div');
		expect(price.props.className).toBe('price');

		let table = price.props.children;
		expect(table.type).toBe('table');
		expect(table.props.style).toEqual(PartsStyle.price__table);

		let head = table.props.children[0];
		expect(head.type).toBe('thead');
		expect(head.props.children.props.children[0].props.children).toBe('Part');
		expect(head.props.children.props.children[1].props.children).toBe('Price');

		let body = table.props.children[1];
		expect(body.type).toBe('tbody');

		let foot = table.props.children[2];
		expect(foot.type).toBe('tfoot');
		expect(foot.props.children.props.children[0].props.children).toBe('Total');
		expect(foot.props.children.props.children[1].props.children).toBe('$687.68');

		let chatMessaging = output.props.children[1];
		expect(chatMessaging.type).toBe('div');
		expect(chatMessaging.props.className).toBe('chat__messaging');

		let log = chatMessaging.props.children[0];
		expect(log.type).toBe('div');
		expect(log.props.className).toBe('chat__log');
		expect(log.props.id).toBe('chatLog');
		expect(log.props.children.length).toBe(5);

		let input = chatMessaging.props.children[1];
		expect(input.type).toBe('div');
		expect(input.props.className).toBe('chat__input');
		
		let textarea = input.props.children[0];
		expect(textarea.type).toBe('textarea');
		let send = input.props.children[1];
		expect(send.type).toBe('button');
		let partsButton = input.props.children[2];
		expect(partsButton.type).toBe('button');
	});

	/*it('test removing messages', () => {
		const wrapper = shallow(<ChatPage {...props}/>);
		let chatLog = wrapper.find('#chatLog');
		let messages = chatLog.children();
		expect(messages.length).toBe(5);
		wrapper.instance().removeMessage(1);
		wrapper.update();
		chatLog = wrapper.find('#chatLog');
		messages = chatLog.children();
		expect(messages.length).toBe(4);
	});

	it('test calculate total messages', () => {
		const wrapper = shallow(<ChatPage {...props}/>);
		let sum = wrapper.instance().calculateTotal();
		expect(sum).toBe("687.68");
		wrapper.instance().addPartToList(new Part('cpu', 100.00, i3Image));
		sum = wrapper.instance().calculateTotal();
		expect(sum).toBe("787.68");
	});

	it('test adding messages', () => {
		const wrapper = shallow(<ChatPage {...props}/>);
		let chatLog = wrapper.find('#chatLog');
		let messages = chatLog.children();
		expect(messages.length).toBe(5);
		wrapper.instance().addMessage(new Message(5, 'user', 'test'));
		wrapper.update();
		chatLog = wrapper.find('#chatLog');
		messages = chatLog.children();
		expect(messages.length).toBe(6);
		expect(chatLog.childAt(5).get(0).props.id).toBe(5);
		expect(chatLog.childAt(5).get(0).props.msg).toBe('test');
		expect(chatLog.childAt(5).get(0).props.owner).toBe('user');
	});*/
});