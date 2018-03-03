import React from 'react';
import PropTypes from 'prop-types';
import PartsOption from '../common/PartsOption';
import Category from '../../objects/Category';
import Timeline from '../common/Timeline';

class PartsCategory extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: "",
			image: "",
			description: "",
			valid: true,
			selected: -1
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleDescChange = this.handleDescChange.bind(this);
		this.addPart = this.addPart.bind(this);
		this.fileInput = false;
	}

	handleNameChange(event) {
		this.setState({
			name: event.target.value,
			valid: this.props.category.parts.reduce((acc, part) => (acc && (part.name !== event.target.value)), true)
		});
	}

	handleImageChange(event) {
		if (event.target.files[0]) {
			let reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.onload = () => {
				this.setState({image: reader.result});
			};
		}
	}

	handleDescChange(event) {
		this.setState({description: event.target.value});
	}

	addPart() {
		if (this.state.valid && this.state.name && this.state.image && this.state.description) {
			this.props.addPart(this.state.name, this.state.description, this.state.image);
			this.setState({
				name: "",
				image: "",
				description: "",
				valid: true
			});
			if (this.fileInput) {
				this.fileInput.value = "";
			}
		}
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
				done={!!category.picked}
			>
				{this.props.active ?
					<div>
						<form>
							{category.parts.map((val, ind) => (
								<PartsOption 
									part={val}
									selected={ind === this.state.selected}
									selectPart={() => this.setState({selected: ind})}
									key={val.name} />
							))}
						</form>
						<form className="part-add">
							<div>
								<div className="part">
									<div className="part__option-number">
										Name: 
										<input
											className="part__option-name"
											value={this.state.name}
											type="text"
											name="name"
											style={{
												backgroundColor: (this.state.valid ? "white" : "red")
											}}
											onChange={this.handleNameChange}/><br/>
										Image: 
										<input
											className="part__option-image"
											ref={r=>this.fileInput = r}
											type="file"
											name="image"
											onChange={this.handleImageChange}
										/><br/>
									</div>
									Description: <br/>
									<textarea
										className="part__option-description"
										value={this.state.description}
										rows={4}
										cols={40}
										name="description"
										onChange={this.handleDescChange}
									/>
								</div>
								<button type="button" className="part__add-option" onClick={this.addPart}>
									Add option
								</button>
								<button type="button" className="part__remove-option" onClick={this.props.removePart}>
									Remove option
								</button><br/>
								<button type="button" className="part__done-adding" onClick={this.props.nextCategory}>
									Next section
								</button>
								<button type="button" className="part__done-adding" onClick={this.props.prevCategory}>
									Previous section
								</button>
							</div>
						</form>
					</div>
					: 
					<div className="timeline-item__info">
						{category.parts.length ? `${category.parts.length} options` : ""}
					</div>
				}
			</Timeline>
		);
	}
}
PartsCategory.propTypes = {
	category: PropTypes.instanceOf(Category),
	expand: PropTypes.bool,
	first: PropTypes.bool,
	last: PropTypes.bool,
	active: PropTypes.bool,
	addPart: PropTypes.func,
	removePart: PropTypes.func,
	nextCategory: PropTypes.func,
	prevCategory: PropTypes.func
};

export default PartsCategory;
