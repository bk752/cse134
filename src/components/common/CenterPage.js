import React from 'react';
import PropTypes from 'prop-types';

function CenterPage(props) {
	return (
		<div className="center">
			<div className="pagetitle">
				{props.title}
			</div>
				{props.children}
		</div>
	);
}

CenterPage.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default CenterPage;
