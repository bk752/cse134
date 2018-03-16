import Step from '../objects/Step';
import delay from './delay';
let steps = [
	new Step("Description"),
	new Step("Pick Parts"),
	new Step("Order Parts"),
	new Step("Expert Builds Computer"),
	new Step("Shipping Computer"),
	new Step("Set up Computer"),
];

class ProgressApi {
	static getAllSteps() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], steps));
			}, delay);
		});
	}
    
	static completeStep(active, date) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				steps = [...steps.map((step, index)=> {
					if (index !== active) {
						return step;
					} else {
						let newStep = (new Step(step.name));
						newStep.complete(date);
						return newStep;
					}
				})];
				resolve(Object.assign([], steps));
			}, delay);
		});
	}
    
	static undoStep(active) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				steps = [...steps.map((step, index)=> {
					if (index !== active - 1) {
						return step;
					} else {
						let newStep = (new Step(step.name));
						newStep.reset();
						return newStep;
					}
				})];
				resolve(Object.assign([], steps));
			}, delay);
		});
	}
}
export {steps};
export default ProgressApi;