import React, { Component } from 'react';

class DatasheetChooser extends Component {
	render() {
		return (
			<div>
				<br />
				<b>To sync with Google docs, paste in key.< /b><br />
				<br />
				Current key: {this.props.googlesheet}
				<form onSubmit={e => {e.preventDefault(); this.props.onSubmit(this.textInput.value);}} >
					<input
						type="text"
						name="googlesheet"
						ref={(input) => { this.textInput = input; }}
						placeholder="1Ewgyv4EayonkOHaa6Q8N_63jrjt7vQF-NFOCZRPQuU4"
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default DatasheetChooser;
