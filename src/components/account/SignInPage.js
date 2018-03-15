import React from 'react';
import {Link} from 'react-router-dom';
import CenterPage from '../common/CenterPage';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';
function SignInPage(props) {
	return (
		<div className="loginBody">
			<div className="center">
				<header className="loginHeader">
					<div className="innerCenter">
						Log in to PCMaker.party!
					</div>
				</header>
				<div className="innerCenter">
					<label><b>Username</b></label>
					<input className="loginInput" type="text" placeholder="Enter Username" name="uname" required/>
					<br/>
					<label><b>Password</b></label>
					<input className="loginInput" type="password" placeholder="Enter Password" name="psw" required/>
					<br/>
					<Link to="/progress">
						<button onClick={props.actions.login}>Log In</button>
					</Link>
					<Link to="/">
						<button>Cancel</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

SignInPage.propTypes = {
	actions: PropTypes.object
};


function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(accountActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);