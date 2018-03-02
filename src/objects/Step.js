export default class Step {
	constructor(name) {
		this.name = name;
		this.date = false;
	}

	complete(date) {
		this.date = date;
		return this;
	}

	reset() {
		this.date = false;
		return this;
	}
}
