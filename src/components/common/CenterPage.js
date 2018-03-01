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
};

export default CenterPage;
