import React from 'react';
import { Field, reduxForm } from 'redux-form';

//TODO: rename to avoid confusion between selectors and selection menu
function LayoutSelector ({ attributes, handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Layout</label>
				<div>
					<Field name="layout" component="select">
						<option></option>
						<option value="listorder">List Order</option>
						<option value="random">Random</option>
						<option value="roundrobin">Round Robin</option>
					</Field>
				</div>
			</div>
			<br/>
			<div id ="attributes">
			<label>Overlay Attributes</label>
			<br/>
			<label><Field name="attributes" component="input" type="radio" value="None" checked/>None</label>
				{attributes.map(attribute =>
					<label><Field name="attributes" component="input" type="radio" value={attribute}/>{attribute}</label>
				)}
      </div>
			<br/>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'simple'  // a unique identifier for this form
})(LayoutSelector)
