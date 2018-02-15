class Part {
	constructor(name, desc, image) {
		this.name = name;
		this.desc = desc;
		this.image = image;
	}
}

class Category {
	constructor(name, list) {
		this.name = name;
		if (Array.isArray(list)) {
			this.parts = list;
		} else {
			this.parts = [];
		}
		this.complete = false;
	}

	select(index) {
		this.picked = this.parts[index]
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
