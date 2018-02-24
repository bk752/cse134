import React, {PropTypes} from 'react';

function CenterPage(props) {
  render() {
    return (
		<div className="center">
			<div className="pagetitle">
				props.title
			</div>
				{props.children}
		</div>
    );
  }
}

CoursesPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CenterPage;
