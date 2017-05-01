import React, { Component } from 'react';

class AttributeCheckbox extends Component {

	render() {
		const attribute = this.props.attribute;
		const checked = this.props.checked;
		const handleAttrVisChange = this.props.handleAttrVisChange;
		return (
			<div>
				<input
					type="checkbox"
					name={attribute}
					value={attribute}
					checked={checked}
					onChange={handleAttrVisChange}
				/>
				Show {attribute}<br />
			</div>
		);
	}
}
export default AttributeCheckbox;
