import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partsActions from '../../actions/partsActions';
import PartsCategory from './PartsCategory';
import CenterPage from '../common/CenterPage';
import {browserHistory} from 'react-router';

import Category from '../../objects/Category';
import Part from '../../objects/Part';

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
    const {parts, active, actions} = this.props;
    console.log("test", active);

    return (
      <CenterPage title="Pick Parts">
        <div id="timeline-holder">
          {parts.map((cat, ind) => (
            <PartsCategory
              category={cat}
              key={cat.name}
              first={ind === 0}
              last={ind === parts.length - 1}
              active={ind === active}
              selectPart = {index => actions.selectPart(cat, index)}
              completeCategory = {() => actions.completeCategory(cat)}
            >
            </PartsCategory>
          ))}
        </div>
      </CenterPage>
    );
  }
}

PartsPage.propTypes = {
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
    actions: bindActionCreators(partsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsPage);
