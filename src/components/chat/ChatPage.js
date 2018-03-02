import React from 'react';
import PropTypes from 'prop-types';
import CenterPage from '../common/CenterPage';
import ChatMessage from './ChatMessage';

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
            <div className="chatbox">
			<div className="price">
				<table className="price__table">
					<thead>
						<tr>
							<th>Part</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>CPU</td>
							<td>$1.00</td>
						</tr>
						<tr>
							<td>Motherboard</td>
							<td>$1.00</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Total</td>
							<td>$2.00</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className="chat__messaging">
				<div id="chatLog" className="chat__log">
                    <ChatMessage
                        user={true}
                        text="test"
                        hasPart={true}
                        title="testTItle"
                        image="../../../images/recentbuild1.jpeg"
                        description="helo"
                    />
				</div>
				<div className="chat__input">
					<textarea id="chatTextbox" onKeyDown="keyPress(event)" className="chat__textbox" placeholder="Message or Parts..." rows="3" cols="50"></textarea>
					<button className="chat__send" onClick="sendOnClick()">
						Send
					</button>
					<button className="chat__send" onClick="partsOnClick()">
						Parts
					</button>
				</div>
			</div>
		</div>
        );
    }
}


export default DescriptionPage;
