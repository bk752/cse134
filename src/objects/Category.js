import Part from './Part';

class Category {
	constructor(name, list) {
		if (name instanceof Category) {
			this.name = name.name;
			this.parts = name.parts;
			this.complete = name.complete;
			this.picked = name.picked;
		} else {
			this.name = name;
			if (Array.isArray(list)) {
				this.parts = list;
			} else {
				this.parts = [];
			}
			this.complete = false;
			this.picked = false;
		}
	}

	completeSelect() {
		this.complete = true;
		return this;
	}

	select(index) {
		this.picked = this.parts[index];
		return this;
	}

	addPart(name, desc, image) {
		if (Array.isArray(name)) {
			this.parts = this.parts.concat(name);
		} else if (name.constructor === Part) {
			this.parts.push(name);
		} else {
			this.parts.push(new Part(name, desc, image));
		}
		return this;
	}

	removePart() {
		this.parts.pop();
	}
}

export default Category
