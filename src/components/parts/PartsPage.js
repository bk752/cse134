import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import PartsCategory from './PartsCategory';
import CenterPage from '../common/CenterPage';
import {browserHistory} from 'react-router';

import Category from '../../objects/Category';
import Part from '../../objects/Part';

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

class PartsPage extends React.Component {
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

	selectItem() {
		console.log("test");
	}

	render() {
		const {courses} = this.props;

		return (
			<CenterPage title="Pick Parts">
				<div id="timeline-holder">
					{parts.map((cat, ind) => (
						<PartsCategory
							category={cat}
							selectItem={this.selectItem}
							key={cat.name}
							first={ind === 0}
							last={ind === parts.length - 1}
							active={ind === 1}
						>
						</PartsCategory>
					))}
				</div>
			</CenterPage>
		);
	}
}

PartsPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsPage);
