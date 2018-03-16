import delay from './delay';

let description = "";
let filledOut = false;

class descriptionApi {
	static getDescription() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({des: description, fill: filledOut});
			}, delay);
		});
	}

	static setDescription(text) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				description = text;
				filledOut = true;
				resolve({des: description, fill: filledOut});
			}, delay);
		});
	}
    
}

export default descriptionApi;