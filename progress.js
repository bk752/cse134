function dateToHTML(step, expand) {
	return `
					<div class="timeline-item__checkline">
						<div class="timeline-item__padding--before timeline-item__padding">
							<span class="timeline-item__line">
							</span>
						</div>
						<span class="timeline-item__check ${step.date ? "timeline-item__check--done" : ""}">
						</span>
						<div class="timeline-item__padding--after timeline-item__padding">
							<span class="timeline-item__line">
							</span>
						</div>
					</div>
					<div class="timeline-item__text">
						<div class="timeline-item__title">
							${step.name}
						</div>
						<div class="timeline-item__info">
							${expand ? "<button onclick=completeStep()>Done</button><button onclick=undoStep()>Undo</button>" : ""}
							${step.date ? `Completed ${step.date.toDateString()}` : ""}
						</div>
					</div>
	`;
}

function undoStep() {
	if (active > 0) {
		active--;
		steps[active].reset();
		updateDOM();
	}
}

function completeStep() {
	if (active + 1 < steps.length) {
		steps[active].complete(new Date());
		active++;
		updateDOM();
	}
}

class Step {
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

let steps = [
	new Step("Description"),
	new Step("Pick Parts"),
	new Step("Order Parts"),
	new Step("Expert Builds Computer"),
	new Step("Shipping Computer"),
	new Step("Set up Computer"),
];

let sections = document.getElementById("timeline-holder");
let active  = 0;

function updateDOM() {
	while (sections.firstChild) {
		sections.removeChild(sections.firstChild);
	}
	steps.forEach((step, index) => {
		let root = document.createElement("div");
		root.className = "timeline-item" +
			(index === active ? " timeline-item--active" : "") + 
			(index === 0 ? " timeline-item--first" : "") + 
			(index === steps.length-1 ? " timeline-item--last" : "");
		root.innerHTML = dateToHTML(step, index === active);
		sections.appendChild(root);
	});
}

updateDOM();
