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

//import CourseApi from '../api/partsApi';
import {totalParts} from '../api/partsApi';
export default {
	parts: {
		/*list: [
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
		],*/
		list: [
			new Category("CPU").addPart([
				new Part("Intel Core i3", 85.95, i3Image),
				new Part("Intel Core i5", 197.89, i5Image),
				new Part("Intel Core i7", 569.00, i7Image),
			]),
			new Category("GPU").addPart([
				new Part("MSI NVIDIA GTX 1060", 489.89, gpu1Image),
				new Part("MSI NVIDIA GTX 1080", 949.99, gpu2Image),
				new Part("MSI Radeon RX 570", 636.99, gpu3Image)
			]),
			new Category("RAM").addPart([
				new Part("Crucial 8 GB DDR4 SDRAM", 90.99, ram1Image),
				new Part("Corsair 2x8 GB DDR4 DRAM", 204.99, ram2Image)
			]),
			new Category("Motherboard").addPart([
				new Part("GIGABYTE GA-B250M Micro ATX", 59.99, mb1Image),
				new Part("ASUS B350-F ATX", 109.99, mb2Image),
				new Part("MSI Gaming Z170A ATX", 439.89, mb3Image)
			]),
			new Category("Power Supply").addPart([
				new Part("Corsair CX650M 650W", 69.99, ps1Image),
				new Part("Seasonic SSR-850FX 850W", 119.99, ps2Image),
				new Part("Enermax EPF1050EWT 1050W", 249.99, ps3Image)
			]),
			new Category("Case").addPart([
				new Part("Rosewill Micro ATX Tower", 24.99, case1Image),
				new Part("NZXT ATX Mid Tower", 69.99, case2Image),
				new Part("Corsair Crystal 570X ATX Mid Tower", 179.99, case3Image)
			]),
			new Category("Storage").addPart([
				new Part("WD Blue 1TB HDD", 49.99, storage1Image),
				new Part("Samsung 500GB SSD", 229.99, storage2Image),
				new Part("Samsung 1TB SSD", 429.99, storage3Image)
			]),
			new Category("Accessories").addPart([
				new Part("HP 23.8-inch 1080p", 129.99, monitor1Image),
				new Part("ASUS 24-inch 1080p VG245H Gaming Monitor", 199.99, monitor2Image),
				new Part("Amazon Basics Wired Keyboard", 12.99, keyboard1Image),
				new Part("SteelSeries Apex Gaming Keyboard", 49.00, keyboard2Image),
				new Part("Amazon Basics Wired Mouse", 6.99, mouse1Image),
				new Part("Razer DeathAdder Gaming Mouse", 59.99, mouse2Image)
			])
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
