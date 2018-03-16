import delay from './delay';
import Category from '../objects/Category';
import Part from '../objects/Part';

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


let totalParts = [
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
];

class PartsApi {
	static getAllParts() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], totalParts));
			}, delay);
		});
	}

	static getCategory(cat) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				for (let i = 0; i < totalParts.length; i++) {
					let category = totalParts[i];
					if (category.name.toLowerCase() == cat.toLowerCase()) {
						resolve(category);
					}
				}
				reject(`${cat} is not a valid Category.`);
			}, delay);
		});
	}
}
export {totalParts};
export default PartsApi;