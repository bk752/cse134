import React from 'react';
import PropTypes from 'prop-types';
import Step from '../../objects/Step';
import Timeline from '../common/Timeline';

function ProgressStep(props) {
	let step = props.step;
	return (
		<Timeline
			active={props.activeOffset === 0}
			first={props.first}
			last={props.last}
			title={step.name}
			info={
				<div>
					{step.date ? `Completed ${step.date.toDateString()}` : ""}
					{(props.activeOffset === 0) ? <button onClick={props.completeStep}>Done</button> : false}
					{(props.activeOffset === -1) ? <button onClick={props.undoStep}>Undo</button> : false}
				</div>
			}
			done={step.date}
			image={false}
		>
		</Timeline>
	);
}
ProgressStep.propTypes = {
	step: PropTypes.instanceOf(Step),
	expand: PropTypes.bool,
	first: PropTypes.bool,
	last: PropTypes.bool,
	activeOffset: PropTypes.number,
	completeStep: PropTypes.func,
	undoStep: PropTypes.func
};

export default ProgressStep
