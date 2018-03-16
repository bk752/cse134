import expect from 'expect';
import chatReducer from './chatReducer';
import * as chatActions from '../actions/chatActions';
import Message from '../objects/Message';

describe('Chat Reducer', () => {
	it('should load in messages when passed LOAD_MESSAGE_SUCCESS', () => {
		// arrange
		const initialState = {
			messages: [
				new Message(0, 'user', 'test1'),
				new Message(1, 'user', 'test2')
			]
		};

		const newMessages = [
			new Message(0, 'user', 'test1'),
			new Message(1, 'user', 'test2'),
			new Message(2, 'user', 'test3'),
			new Message(3, 'user', 'test4')
		];

		const action = chatActions.loadMessagesSuccess(newMessages);

		//act
		const newState = chatReducer(initialState, action);

		//assert
		expect(newState.messages).toEqual(newMessages);
	});
});