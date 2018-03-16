import React from 'react';
import PropTypes from 'prop-types';
import CenterPage from '../common/CenterPage';
import Message from '../../objects/Message';
import Part from '../../objects/Part';
import Category from '../../objects/Category';
import PartsMessage from './PartsMessage';

function ChatMessage (props) {
	let chatLog = document.getElementById("chatLog");
	let messageBox = document.getElementById("chatTextbox");
	const {id, owner, msg, part, cat, closeFunc, addFunc} = props;
	if (cat) {
		let partsList = cat.parts;
		return (
			<div id={id} className="chat__message-holder chat__message-holder--user">
				<div className="chat__message">
					{partsList.map((part, ind) => (
						<PartsMessage
							id={id}
							part={part}
							addFunc={addFunc}
							removeFunc={closeFunc}
							key={part.name}
							index={ind}
						/>
					))}
					<button className="part-card__add" onClick={
						() => {
							closeFunc(id);
						}
					}>
						Close
					</button>
				</div>
			</div>
		);
	}
	if (part) {
		return (
			<div id={id} className={owner == 'user' ? "chat__message-holder chat__message-holder--user" : "chat__message-holder"}>
				<div className="chat__message">
					{msg}
					<div className="part-card">
						<img className="part-card__image" src={part.image} alt="placeholder"/>
						<div className="part-card__title">
							{part.name}
						</div>
						<div className="part-card__description">
							{"$"+part.desc.toFixed(2)}
						</div>
						<button className="part-card__add" onClick={
							() => {
								addFunc(part);
							}
						}>
							Add to Build
						</button>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div id={id} className={owner == 'user' ? "chat__message-holder chat__message-holder--user" : "chat__message-holder"}>
			<div className="chat__message">
				{msg}
			</div>
		</div>
	);
}

ChatMessage.propTypes = {
	id: PropTypes.number,
	owner: PropTypes.string,
	msg: PropTypes.string,
	part: PropTypes.instanceOf(Part),
	cat: PropTypes.instanceOf(Category),
	closeFunc: PropTypes.func,
	addFunc: PropTypes.func
};
export default ChatMessage;