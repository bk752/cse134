import Step from '../objects/Step';
import Part from '../objects/Part';
import Message from '../objects/Message';
import Category from '../objects/Category';
import i3Image from '../../images/i3.jpeg';
import i5Image from '../../images/i5.jpeg';
import i7Image from '../../images/i7.jpeg';

import mb1Image from '../../images/mb1.jpeg';
import mb2Image from '../../images/mb2.jpeg';
import mb3Image from '../../images/mb3.jpeg';

import gpu1Image from '../../images/gpu1.jpeg';
import gpu2Image from '../../images/gpu2.jpeg';
import gpu3Image from '../../images/gpu3.jpeg';

export default {
	parts: {
		list: [
			new Category("CPU").addPart([
				new Part("Intel Core i3", "information about first option", i3Image),
				new Part("Intel Core i5", "information about second option", i5Image),
				new Part("Intel Core i7", "information about third option", i7Image),
			]),
			new Category("Motherboard").addPart([
				new Part("option a", "information about first option", mb1Image),
				new Part("option b", "information about second option", mb2Image),
				new Part("option c", "information about third option", mb3Image)
			]),
			new Category("GPU").addPart([
				new Part("option a", "information about first option", gpu1Image),
				new Part("option b", "information about second option", gpu2Image),
				new Part("option c", "information about third option", gpu3Image)
			]),
		],
		active: 0,
		adding: 0
	},
	progress: {
		active: 0,
		list: [
			new Step("Description"),
			new Step("Pick Parts"),
			new Step("Order Parts"),
			new Step("Expert Builds Computer"),
			new Step("Shipping Computer"),
			new Step("Set up Computer"),
		]
	},
	description: {
		text: "",
		filledOut: false
	},
	chat: {
		messages:[
			new Message(0, "user", "Hello I would like some help choosing parts."),
			new Message(1, "expert", "Hello. What can I help you with?"),
			new Message(2, "user", "I am not sure what kind of motherboard I should get."),
			new Message(3, "user", "Do you have any recommendations?"),
			new Message(4, "expert", "How does this motherboard look?", new Part("ATX Motherboard", 109.99, mb1Image))
		],
		id: 5
	},
	account: {
		loggedIn: false
	}
};
