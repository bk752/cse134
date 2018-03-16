import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partsActions from '../../actions/partsActions';
import PartsCategory from './PartsCategory';
import CenterPage from '../common/CenterPage';
import {browserHistory} from 'react-router';

import Category from '../../objects/Category';
import Part from '../../objects/Part';

export class PartsPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	redirectToAddCoursePage() {
		browserHistory.push('/course');
	}

	render() {
		const {parts, active, actions} = this.props;

		return (
			<CenterPage title="Pick Parts">
				<div id="timeline-holder">
					{parts.map((cat, ind) => {
						return (
							<PartsCategory
								category={cat}
								key={cat.name}
								first={ind === 0}
								last={ind === parts.length - 1}
								active={ind === active}
								addPart={(name, disc, image) => actions.addPartToServer(name, disc, image, cat)}
								removePart={() => actions.removePartFromServer(cat)}
								nextCategory={() => actions.nextCategory(cat)}
								prevCategory={() => actions.prevCategory(cat)}
							/>
						);})}
				</div>
			</CenterPage>
		);
	}
}

PartsPage.propTypes = {
	parts: PropTypes.array,
	active: PropTypes.number,
	actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		parts: state.parts.list,
		active: state.parts.adding
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(partsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsPage);
