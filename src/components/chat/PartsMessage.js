import React from 'react';
import Part from '../../objects/Part';
import PropTypes from 'prop-types';

function PartsMessage(props) {
	const {part, addFunc} = props;
	return (
		<div className="part-card">
			<img className="part-card__image" src={part.image} alt="placeholder"/>
			<div className="part-card__title">
				{part.name}
			</div>
			<div className="part-card__description">
				{"$"+part.desc.toFixed(2)}
			</div>
			<button className="part-card__add" onClick={
				() => {
					addFunc(part);
				}
			}>
				Add part
			</button>
		</div>
	);
}
PartsMessage.propTypes = {
	part: PropTypes.instanceOf(Part).isRequired,
	addFunc: PropTypes.func
};
export default PartsMessage;