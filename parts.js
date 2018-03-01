function reduceParts(accumulator, part, prefix, index) {
	let choiceName = `${prefix}__${part.name}`
	return accumulator + `
								<label class="part-select__option">
									<input class="part-select__radio" type="radio" name="a" value="${index}"> 
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
						<span class="timeline-item__check ${category.picked ? "timeline-item__check--done" : ""}">
							${category.picked ? `<img class="timeline-item__part-icon" src="${category.picked.image}" alt="cpu"/>` : ""}
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
							${category.picked ? category.picked.name : " "}
						</div>
		${expand ? `
						<form class="part-select">
							<div>
								${category.parts.reduce((acc, val, ind) => reduceParts(acc, val, category.name, ind), "")}
							</div>
							<button type="button" onclick="selectItem()">Done</button>
						</form>
				` : ""}
					</div>
	`;
}

function selectItem() {
	let form = sections.childNodes[active].getElementsByClassName("part-select");
	if (form.length) {
		form = form[0];
		for (let i = 0; form[i]; i++) {
			if (form[i].checked) {
				parts[active].select(i);
				if (active < parts.length - 1) {
					active++;
				}
				updateDOM();
				return;
			}
		}
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
