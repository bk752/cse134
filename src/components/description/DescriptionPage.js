import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import CenterPage from '../common/CenterPage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as descriptionActions from '../../actions/descriptionActions';
import DescriptionStyle from './DescriptionStyle';

export class DescriptionPage extends React.Component {
	constructor (props, context) {
		super(props, context);
		this.state = {text: this.props.text, editing: !this.props.filledOut};
		this.buttonClick = this.buttonClick.bind(this);
	}
	
	componentDidMount() {
		document.getElementById('text').readOnly = this.props.filledOut;
	}
	componentDidUpdate() {
		document.getElementById('text').readOnly = !this.state.editing;
	}

	determineTitle() {
		if (!this.props.filledOut) {
			return "Add a Description";
		}
		if (this.state.editing) {
			return "Edit your Description";
		}
		return "Description of Build";
	}
	buttonClick() {
		if (this.state.editing) {
			this.props.actions.saveDescription(this.state.text);
		}
		this.setState(previousState => {
			return {editing: !previousState.editing };
		});
	}
	render() {
		return (
			<CenterPage title={this.determineTitle()}>
				<div id="description">
					<textarea id="text" style={DescriptionStyle.description_box} placeholder="Add a description of the type of computer you want to build" rows="3" cols="50" value={this.state.text} onChange={(event) => this.setState( {text: event.target.value} )}/>
					<button id="button" type="button" onClick={this.buttonClick}>{this.state.editing ? "Save Description" : "Edit Description"}</button>
				</div>
			</CenterPage>
		);
	}
}


function mapStateToProps(state, ownProps) {
	return {
		filledOut: state.description.filledOut,
		text: state.description.text
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(descriptionActions, dispatch)
	};
}

DescriptionPage.propTypes = {
	filledOut: PropTypes.bool,
	text: PropTypes.string,
	actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage);