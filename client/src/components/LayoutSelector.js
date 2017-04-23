import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


const LayoutSelector = (props) => {
	const { handleSubmit } = props

	return (
		<form onSubmit={handleSubmit}>
		<div>
		<label>Layout</label>
		<div>
		<Field name="layout" component="select">
		<option></option>
		<option value="listorder">List Order</option>
		<option value="random">Random</option>
		</Field>
		</div>
		</div>
		<div>
			<button type="submit">Submit</button>
		</div>
		</form>
	);

}

export default reduxForm({
	form: 'simple'  // a unique identifier for this form
})(LayoutSelector)
