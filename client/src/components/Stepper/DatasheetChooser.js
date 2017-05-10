import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Grid, Row, Cell } from 'react-inline-grid';

class DatasheetChooser extends Component {
	render() {
		const style = {
  height: 130,
  width: 500,
  margin: 20,
  textAlign: 'left',
 display: 'inline-block'
};
const style2 = {
height: 130,
width: 300,
margin: 20,
textAlign: 'left',
display: 'inline-block'
};

		return (
			<div>
				<Grid>

				<Row>
				<Paper zDepth={1} style={style}>
				<form onSubmit={e => {e.preventDefault(); this.props.onSubmit(this.refs.key_field.getValue());}}>
					<TextField
						hintText="Hint Text"
						floatingLabelText="Google Spreadsheet key"
						floatingLabelFixed={true}
						multiLine={true}
						defaultValue="1Ewgyv4EayonkOHaa6Q8N_63jrjt7vQF-NFOCZRPQuU4"
						style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px', width:'450px'}}
						ref="key_field"
						/><br />
					<RaisedButton label="Submit" primary={true} style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px'}} type="submit" value="Submit"/>
				</form>
			</Paper>
			<div style={{verticalAlign:'middle', height:'130px'}}><br/><br/><br/><br/>OR</div>
			<Paper zDepth={1} style={style2}>
				blah
			</Paper>
		</Row>
	</Grid>
			</div>
		);
	}
}

export default DatasheetChooser;
