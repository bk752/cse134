import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
	<div>
		<header>
			<div>
				<Link to="/" className="header__title">PCMaker.party</Link>
				<span className="header__account-info">
					<Link to="/">Log out</Link>
				</span>
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
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
