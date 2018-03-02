import React, {PropTypes} from 'react';
import PartsOption from '../common/PartsOption.js';
import Category from '../../objects/Category.js';
import Timeline from '../common/Timeline';

class PartsCategory extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let category = this.props.category;

		return (
			<Timeline
				active={this.props.active}
				first={this.props.first}
				last={this.props.last}
				title={category.name}
				info={category.picked ? category.picked.name : false}
				done={category.picked}
				image={category.picked.image}
			>
				{this.props.active ? 
					<form className="part-select">
						<div>
							{category.parts.map((val, ind) => (
								<PartsOption 
									part={val}
									selected={val.name === category.picked.name}
									selectPart={() => this.props.selectPart(ind)}
									key={val.name}>
								</PartsOption>
							))}
						</div>
						<button type="button" onClick={this.props.completeCategory}>Done</button>
					</form>
			 : false}
			</Timeline>
		);
	}
}
PartsCategory.propTypes = {
	category: PropTypes.instanceOf(Category),
	selectPart: PropTypes.func,
	completeCategory: PropTypes.func,
	first: PropTypes.bool,
	last: PropTypes.bool,
	active: PropTypes.bool
};

export default PartsCategory;
