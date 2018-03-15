import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';
class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	determineAccountLinks() {
		if (this.props.loggedIn) {
			return (
				<span className="header__account-info">
					<Link to="/" onClick={this.props.actions.logout}>Log out</Link>
				</span>
			);
		}
		return (
			<span className="header__account-info">
				<Link to="/signup">Sign Up</Link>
				|
				<Link to="/signin">Sign In</Link>
			</span>
		);
	}
	render() {
		return (
			<div>
				<header>
					<div>
						<Link to="/" className="header__title">PCMaker.party</Link>
						{this.determineAccountLinks()}
					</div>
				</header>
				<nav>
					<div className="navbar">
						<Link to="/description" className="navbar__link">Description</Link>
						<Link to="/pick" className="navbar__link">Pick</Link>
						<Link to="/parts" className="navbar__link">Parts</Link>
						<Link to="/progress" className="navbar__link">Progress</Link>
						<Link to="/chat" className="navbar__link">Chat With Expert</Link>
					</div>
				</nav>
			</div>
		);
	}
}

Header.propTypes = {
	loggedIn: PropTypes.bool,
	actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		loggedIn: state.account.loggedIn
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(accountActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
