import React, {PropTypes} from 'react';
import Part from '../../objects/Part.js';

function PartsOption(props) {
	let part = props.part;
	console.log(part.image);
	return (
		<label onClick={props.selectOption} className={`part-select__option ${props.selected ? "part-select__option--selected" : ""}`}>
			<span className="part-select__title">
				<img className="part-select__icon" src={part.image} alt="mb1"/>{part.name}
			</span>
			<br/>
			<span className="part-select__description">
				{part.desc}
			</span>
		</label>
	);
}
PartsOption.propTypes = {
	part: PropTypes.instanceOf(Part),
	selected: PropTypes.bool,
	selectOption: PropTypes.func
};

export default PartsOption;
