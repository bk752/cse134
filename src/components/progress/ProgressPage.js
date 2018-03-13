import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as progressActions from '../../actions/progressActions';
import ProgressStep from './ProgressStep';
import CenterPage from '../common/CenterPage';
import {browserHistory} from 'react-router';

import Step from '../../objects/Step';

export class ProgressPage extends React.Component {
	render() {
		let steps = this.props.steps;
		let active = this.props.active;
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
							completeStep={() => this.props.actions.completeStep(new Date())}
							undoStep={this.props.actions.undoStep}
						/>
					))}
				</div>
			</CenterPage>
		);
	}
}

ProgressPage.propTypes = {
	steps: PropTypes.array,
	active: PropTypes.number,
	actions: PropTypes.objects
};

function mapStateToProps(state, ownProps) {
	return {
		steps: state.progress.list,
		active: state.progress.active,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(progressActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPage);
