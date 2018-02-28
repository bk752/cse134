import React, {PropTypes} from 'react';
import PartsOption from './PartsOption.js';
import Category from '../../objects/Category.js';

class PartsCategory extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let category = this.props.category;
		console.log(category);
		return (
			<div className={`timeline-item ${
				(this.props.active ? " timeline-item--active" : "") + 
				(this.props.first ? " timeline-item--first" : "") + 
				(this.props.last ? " timeline-item--last" : "")
			}`}>
				<div className="timeline-item__checkline">
					<div className="timeline-item__padding--before timeline-item__padding">
						<span className="timeline-item__line">
						</span>
					</div>
					<span className={`timeline-item__check ${category.picked ? "timeline-item__check--done" : ""}`}>
						{category.picked ? <img className="timeline-item__part-icon" src={category.picked.image} alt="cpu"/> : false}
					</span>
					<div className="timeline-item__padding--after timeline-item__padding">
						<span className="timeline-item__line">
						</span>
					</div>
				</div>
				<div className="timeline-item__text">
					<div className="timeline-item__title">
						{category.name}
					</div>
					<div className="timeline-item__info">
						{category.picked ? category.picked.name : false}
					</div>
		{this.props.active ? 
					<form className="part-select">
						<div>
							{category.parts.map((val, ind) => (
								<PartsOption part={val} selected={this.selected} selectOption={this.selectOption} key={val.name}>
								</PartsOption>
							))}
						</div>
						<button type="button" onClick={this.props.selectItem}>Done</button>
					</form>
			 : false}
				</div>
			</div>
		);
	}
}
PartsCategory.propTypes = {
	category: PropTypes.instanceOf(Category),
	selectItem: PropTypes.func,
	expand: PropTypes.bool
};

export default PartsCategory;
