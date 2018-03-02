import React from 'react';
import PropTypes from 'prop-types';
import Part from '../../objects/Part.js';

function PartsOption(props) {
	let part = props.part;
	return (
		<label onClick={props.selectPart} className={`part-select__option ${props.selected ? "part-select__option--selected" : ""}`}>
			<span className="part-select__title">
				<img className="part-select__icon" src={part.image} alt="part"/>{part.name}
			</span>
			<br/>
			<span className="part-select__description">
				{part.desc}
			</span>
		</label>
	);
}
PartsOption.propTypes = {
	part: PropTypes.instanceOf(Part).isRequired,
	selected: PropTypes.bool,
	selectPart: PropTypes.func
};

export default PartsOption;
