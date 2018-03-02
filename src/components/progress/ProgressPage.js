import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pickActions from '../../actions/pickActions';
import ProgressStep from './ProgressStep';
import CenterPage from '../common/CenterPage';
import {browserHistory} from 'react-router';

import Step from '../../objects/Step';

class ProgressPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.completeStep = this.completeStep.bind(this);
		this.undoStep = this.undoStep.bind(this);
		this.state = {
			active: 0,
			steps: [
				new Step("Description"),
				new Step("Pick Parts"),
				new Step("Order Parts"),
				new Step("Expert Builds Computer"),
				new Step("Shipping Computer"),
				new Step("Set up Computer"),
			]
		};
	}

	completeStep() {
		let steps = this.state.steps;
		steps = [...steps.map((step, ind)=> {
			if (ind !== this.state.active) {
				return step;
			} else {
				return (new Step(step.name)).complete(new Date());
			}
		})];
		this.setState({
			active: this.state.active+1,
			steps
		});
	}

	undoStep() {
		let steps = this.state.steps;
		steps = [...steps.map((step, ind)=> {
			if (ind !== this.state.active) {
				return step;
			} else {
				return (new Step(step.name)).reset();
			}
		})];
		this.setState({
			active: this.state.active-1,
			steps
		});
	}

	render() {
		let steps = this.state.steps;
		let active = this.state.active;
		return (
			<CenterPage title="Progress Parts">
				<div id="timeline-holder">
					{steps.map((step, ind) => (
						<ProgressStep
							step={step}
							key={step.name}
							first={ind === 0}
							last={ind === steps.length - 1}
							activeOffset={ind - active}
							completeStep={this.completeStep}
							undoStep={this.undoStep}
						>
						</ProgressStep>
					))}
				</div>
			</CenterPage>
		);
	}
}

ProgressPage.propTypes = {
	parts: PropTypes.array,
	active: PropTypes.number
};

function mapStateToProps(state, ownProps) {
	return {
		parts: state.parts.list,
		active: state.parts.active
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(pickActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPage);
