import Part from '../objects/Part';
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
				new Part("option a", "information about first option", i3Image),
				new Part("option b", "information about second option", i5Image),
				new Part("option c", "information about third option", i7Image),
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
	}
};
