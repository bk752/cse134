import delay from './delay';
import Category from '../objects/Category';
import Part from '../objects/Part';
import Message from '../objects/Message';
import i3Image from '../../images/i3.jpeg';
import i5Image from '../../images/i5.jpeg';
import i7Image from '../../images/i7.jpeg';

import mb1Image from '../../images/mb1.jpeg';
import mb2Image from '../../images/mb2.jpeg';
import mb3Image from '../../images/mb3.jpeg';

import gpu1Image from '../../images/gpu1.jpeg';
import gpu2Image from '../../images/gpu2.jpeg';
import gpu3Image from '../../images/gpu3.jpeg';

import case1Image from '../../images/case1.jpeg';
import case2Image from '../../images/case2.jpeg';
import case3Image from '../../images/case3.jpeg';

import storage1Image from '../../images/storage1.jpeg';
import storage2Image from '../../images/storage2.jpeg';
import storage3Image from '../../images/storage3.jpeg';

import ps1Image from '../../images/ps1.jpeg';
import ps2Image from '../../images/ps2.jpeg';
import ps3Image from '../../images/ps3.jpeg';

import ram1Image from '../../images/ram1.jpeg';
import ram2Image from '../../images/ram2.jpeg';

import monitor1Image from '../../images/monitor1.jpeg';
import monitor2Image from '../../images/monitor2.jpeg';

import keyboard1Image from '../../images/keyboard1.jpeg';
import keyboard2Image from '../../images/keyboard2.jpeg';

import mouse1Image from '../../images/mouse1.jpeg';
import mouse2Image from '../../images/mouse2.jpeg';


let allMessages = [
	new Message(0, "user", "Hello I would like some help choosing parts."),
	new Message(1, "expert", "Hello. What can I help you with?"),
	new Message(2, "user", "I am trying to build a really powerful computer for playing video games."),
	new Message(3, "user", "I'm not really sure what kind of parts I should get right now."),
	new Message(4, "expert", "Click on the Parts button in the bottom right to see what parts are available at this step.")
];

let id = 5;

class ChatApi {
	static getAllMessages() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], allMessages));
			}, delay);
		});
	}

	static getCurrentID() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(id);
			}, delay);
		});
	}
   
	static addMessage(message) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (message.cat) {
					allMessages = allMessages.filter(msg => !msg.cat);
				}
				message.id = id;
				id = id + 1;
				allMessages = [...allMessages, message];
				resolve(Object.assign([], allMessages));
				
			}, delay);
		});
	}

	static removeMessageByID(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				allMessages = allMessages.filter(msg => msg.id !== id);
				resolve(Object.assign([], allMessages));
			}, delay);
		});
	}
}
export {allMessages};
export default ChatApi;