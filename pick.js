function reduceParts(accumulator, part, prefix, index) {
	let choiceName = `${prefix}__${part.name}`
	return accumulator + `
								<input class="part-select__radio" type="radio" id="${choiceName}" name="a" value="${index}"> 
								<label class="part-select__option" for="${choiceName}">
									<span class="part-select__title">
										<img class="part-select__icon" src="${part.image}" alt="mb1"/>${part.name}
									</span>
									<br/>
									<span class="part-select__description">
										${part.desc}
									</span>
								</label>
	`;
}

function categoryToHTML(category, expand) {
	return `
				<div class="timeline-item__checkline">
					<div class="timeline-item__padding--before timeline-item__padding">
						<span class="timeline-item__line">
						</span>
					</div>
					<span class="timeline-item__check ${category.completed ? "timeline-item__check--done" : ""}">
					</span>
					<div class="timeline-item__padding--after timeline-item__padding">
						<span class="timeline-item__line">
						</span>
					</div>
				</div>
				<div class="timeline-item__text">
					<div class="timeline-item__title">
						${category.name}
					</div>
					<div class="timeline-item__info">
					</div>
					${expand ? `
						<form>
							${category.parts.reduce((acc, val, ind) => reduceParts(acc, val, category.name, ind), "")}
						</form>
						<form class="part-add">
							<div>
								<div class="part">
									<div class="part__option-number">
										Name: 
										<input class="part__option-name" type="text" name="name"/><br/>
										Image: 
										<input class="part__option-image" type="text" name="image"/><br/>
									</div>
									Description: <br/>
									<textarea class="part__option-description" rows=4 cols=40 name="description"></textarea>
								</div>
								<button type="button" class="part__add-option" onclick="addItem()">
									Add option
								</button>
								<button type="button" class="part__remove-option" onclick="removeItem()">
									Remove option
								</button><br/>
								<button type="button" class="part__done-adding" onclick="finishPart()">
									Next section
								</button>
								<button type="button" class="part__done-adding" onclick="previousPart()">
									Previous section
								</button>
							</div>
						</form>
					` : `
						<div class="timeline-item__info">
							${category.parts.length ? `${category.parts.length} options` : ""}
						</div>
					`
					}
				</div>
	`;
}

function addItem() {
	let form = sections.childNodes[active].getElementsByClassName("part-add");
	if (form.length) {
		form = form[0];
		parts[active].addPart(
			form[0].value,
			form[2].value,
			form[1].value
		)
		updateDOM();
	}
}

function removeItem() {
	parts[active].removePart();
	updateDOM();
}

function finishPart() {
	if (active < parts.length) {
		parts[active].completed = true;
		active++;
		updateDOM();
	}
}

function previousPart() {
	if (active > 0) {
		active--;
		parts[active].completed = false;
		updateDOM();
	}
}

function addItem() {
	let form = sections.childNodes[active].getElementsByClassName("part-add");
	if (form.length) {
		form = form[0];
		parts[active].addPart(
			form[0].value,
			form[2].value,
			form[1].value
		)
		updateDOM();
	}
}
let parts = [
	new Category("CPU").addPart([
		new Part("option a", "information about first option", "images/i3.jpeg"),
		new Part("option b", "information about second option", "images/i5.jpeg"),
		new Part("option c", "information about third option", "images/i7.jpeg"),
	]),
	new Category("Motherboard").addPart([
		new Part("option a", "information about first option", "images/mb1.jpeg"),
		new Part("option b", "information about second option", "images/mb2.jpeg"),
		new Part("option c", "information about third option", "images/mb3.jpeg"),
	]),
	new Category("GPU").addPart([
		new Part("option a", "information about first option", "images/gpu1.jpeg"),
		new Part("option b", "information about second option", "images/gpu2.jpeg"),
		new Part("option c", "information about third option", "images/gpu3.jpeg"),
	]),
];
let sections = document.getElementById("timeline-holder");
let active  = 0;

function updateDOM() {
	while (sections.firstChild) {
		sections.removeChild(sections.firstChild);
	}
	parts.forEach((cat, index) => {
		let root = document.createElement("div");
		root.className = "timeline-item" +
			(index === active ? " timeline-item--active" : "") + 
			(index === 0 ? " timeline-item--first" : "") + 
			(index === parts.length-1 ? " timeline-item--last" : "");
		root.innerHTML = categoryToHTML(cat, index === active);
		sections.appendChild(root);
	});
}

updateDOM();
