import React, {PropTypes} from 'react';

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
