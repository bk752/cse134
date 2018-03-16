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

export default {
	parts: {
		list: [],
		active: 0,
		adding: 0
	},
	progress: {
		active: 0,
		list: []
	},
	description: {
		text: "",
		filledOut: false
	},
	chat: {
		messages:[]
	},
	account: {
		loggedIn: false
	}
};
