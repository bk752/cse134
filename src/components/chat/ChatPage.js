import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import CenterPage from '../common/CenterPage';
import Message from '../../objects/Message';
import Part from '../../objects/Part';
import Category from '../../objects/Category';
import * as chatActions from '../../actions/chatActions';
import * as pickActions from '../../actions/pickActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import i3Image from '../../../images/i3.jpeg';
import i5Image from '../../../images/i5.jpeg';
import i7Image from '../../../images/i7.jpeg';

import mb1Image from '../../../images/mb1.jpeg';
import mb2Image from '../../../images/mb2.jpeg';
import mb3Image from '../../../images/mb3.jpeg';

import gpu1Image from '../../../images/gpu1.jpeg';
import gpu2Image from '../../../images/gpu2.jpeg';
import gpu3Image from '../../../images/gpu3.jpeg';

import PartsApi from '../../api/partsApi';
import PartsStyle from './PartsStyle';
export class ChatPage extends React.Component {
	constructor (props, context) {
		super(props, context);
		this.keyPress = this.keyPress.bind(this);
		this.sendOnClick = this.sendOnClick.bind(this);
		this.partsOnClick = this.partsOnClick.bind(this);
		this.addPartToList = this.addPartToList.bind(this);
		this.removeMessage = this.removeMessage.bind(this);
		this.addMessage = this.addMessage.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.messages.length < this.props.messages.length) {
			let chatLog = document.getElementById("chatLog");
			chatLog.scrollTop = chatLog.scrollHeight;
		}
	}

	calculateTotal() {
		let allParts = this.props.allParts;
		let sum = 0;
		for (let j = 0; j < this.props.currentCat; j++) {
			let cat = allParts[j];
			let part = cat.picked;
			sum += part.desc;
		}
		return sum.toFixed(2);
	}

	addMessage(message) {
		this.props.actions.addMessage(message);
	}

	sendMessage() {
		let messageBox = document.getElementById("chatTextbox");
		let text = messageBox.value;
		if (text === "") {
			return;
		}
		let msg = new Message(0, "user", text);
		this.addMessage(msg);
		messageBox.value = "";
	}

	sendOnClick() {
		this.sendMessage();
	}

	partsOnClick() {
		this.displayParts();
	}

	addPartToList(ind) {
		let category = new Category(this.props.allParts[this.props.currentCat]);
		category.select(ind);
		this.props.actions.completeCategoryOnServer(category);
	}

	displayParts() {
		let allParts = this.props.allParts;
		let cat = allParts[this.props.currentCat];
		if (cat) {
			let msg = new Message(0, "user", null, null, cat);
			this.addMessage(msg);
		}
		else {
			let msg = new Message(0, "expert", "We are done! No more parts to show.");
			this.addMessage(msg);
		}
	}

	keyPress(e) {
		let key = e.keyCode;
	
		// If the user has pressed enter
		if (key === 13) {
			if (e.shiftKey) {
				//partsOnClick();
				let messageBox = document.getElementById("chatTextbox");
				let text = messageBox.value;
				if (text.toLowerCase() === "parts") {
					this.displayParts();
				} else {
					let msg = new Message(0, "expert", "To display parts, press the Parts button in the bottom right, or type in parts in the chat box and press shift - enter.");
					this.addMessage(msg);
				}
				messageBox.value = "";
			}
			else {
				this.sendMessage();
			}
			e.preventDefault();
		}
	}

	removeMessage(id) {
		//this.setState(prevState => ({ messages: prevState.messages.filter(msg => msg.id !== id) }));
		this.props.actions.removeMessage(id);
	}

	PartsList(cat, ind) {
		if (cat.complete) {
			let part = cat.picked;
			return(
				<tr key={ind}>
					<td style={PartsStyle.chatPartListEle}>{part.name}</td>
					<td style={PartsStyle.chatPartListEle}>{"$"+part.desc.toFixed(2)}</td>
				</tr>
			);
		}
		return;
	}

	render() {
		let messages = this.props.messages;
		return (
			<div className="chatbox">
				<div className="price">
					<table style={PartsStyle.price__table}>
						<thead>
							<tr>
								<th style={PartsStyle.price_theadth}>Part</th>
								<th style={PartsStyle.price_theadth}>Price</th>
							</tr>
						</thead>
						<tbody>
							{this.props.allParts.map((cat, ind)=> (
								this.PartsList(cat, ind)
							))}
						</tbody>
						<tfoot style={PartsStyle.price_tabletfoot}>
							<tr>
								<td style={PartsStyle.price_tfoottd}>Total</td>
								<td style={PartsStyle.price_tfoottd}>{"$"+this.calculateTotal()}</td>
							</tr>
						</tfoot>
					</table>
				</div>
				<div className="chat__messaging">
					<div id="chatLog" className="chat__log">
						{messages.map((message, ind) => (
							<ChatMessage
								id={message.id}
								owner={message.owner}
								msg={message.message}
								part={message.part}
								cat={message.cat}
								closeFunc={this.removeMessage}
								addFunc={this.addPartToList}
								key={message.id}
							/>
						))}
					</div>
					<div className="chat__input">
						<textarea id="chatTextbox" onKeyDown={this.keyPress} className="chat__textbox" placeholder="Message or Parts..." rows="3" cols="50" />
						<button className="chat__send" onClick={this.sendOnClick}>
							Send
						</button>
						<button className="chat__send" onClick={this.partsOnClick}>
							Parts
						</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	let list = state.parts.list;
	let currentCat = 0;
	for (; currentCat < list.length; currentCat++) {
		let cat = list[currentCat];
		if (!cat.complete) {
			break;
		}
	}
	return {
		currentCat: currentCat,
		messages: state.chat.messages,
		id: state.chat.id,
		allParts: state.parts.list
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, chatActions, pickActions), dispatch)
	};
}

ChatPage.propTypes = {
	currentCat: PropTypes.number,
	messages: PropTypes.array,
	actions: PropTypes.object,
	allParts: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
