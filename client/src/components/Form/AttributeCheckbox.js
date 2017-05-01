import React, { Component } from 'react';

class AttributeCheckbox extends Component {

	render() {
		let attribute = this.props.attribute;
		let checked = this.props.checked;
		let handleAttrVisChange = this.props.handleAttrVisChange;
		return(
			<div>
			<input type="checkbox" name={attribute} value={attribute}
				checked={checked}
				onChange={handleAttrVisChange}/>Show {attribute}<br/>
			</div>
		)
	}
}
export default AttributeCheckbox;
