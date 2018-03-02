import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CenterPage from '../common/CenterPage';
function ChatMessage (props) {

    let card = "hi";
    if (props.hasPart) {
        return (
            <div className={props.user ? "chat__message-holder chat__message-holder--user" : "chat__message-holder"}>
                <div className="chat__message">
                    {props.text}
                    <div className="part-card">
                        <img className="part-card__image" src={props.image} alt={props.image}/>
                        <div className="part-card__title">
                            {props.title}
                        </div>
                        <div className="part-card__description">
                            {props.description}
                        </div>
                        <button className="part-card__add">
                            Add to Build
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={props.user ? "chat__message-holder chat__message-holder--user" : "chat__message-holder"}>
            <div className="chat__message">
                {props.text}
            </div>
        </div>
    );
}

ChatMessage.propTypes = {
    user: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    hasPart: PropTypes.bool.isRequired,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
};

export default ChatMessage;


