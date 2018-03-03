import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import CenterPage from '../common/CenterPage';



class DescriptionPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {title: "Add a Description", text: "", editing: true, buttonText: "Submit"};
		this.buttonClick = this.buttonClick.bind(this);
	}
    
	buttonClick() {
		this.setState(previousState => {
			return { title: (this.state.editing ? "Description of Build" : "Edit your Description"), buttonText: (this.state.editing ? "Edit Description" : "Submit"), editing: !this.state.editing };
		});
		let text = document.getElementById('text');
		text.readOnly = this.state.editing;
	}
	render() {
		return (
			<CenterPage title={this.state.title}>
				<div id="description">
					<textarea id="text" className="description_box" placeholder="Add a description of the type of computer you want to build" rows="3" cols="50" value={this.state.text} onChange={(event) => this.setState( {text: event.target.value} )} />
					<button id="button" type="button" onClick={this.buttonClick}>{this.state.buttonText}</button>
				</div>
			</CenterPage>
		);
	}
}


export default DescriptionPage;