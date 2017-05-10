import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Grid, Row, Cell } from 'react-inline-grid';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class DatasheetChooser extends Component {

	componentWillMount() {
		console.log(this.props.datasource);
	}

	handleChange = (event, index, value) => this.props.onDataSetChange(value);
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
			margin: 30,
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
									hintText="Enter Api Key for google sheet here"
									floatingLabelText="Google Api Key"
									floatingLabelFixed={true}
									multiLine={true}
									value={this.props.googlesheet}
									style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px', width:'450px'}}
									ref="key_field"
									/><br />
								<RaisedButton
									label="Submit"
									primary={true}
									style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px'}}
									type="submit"
									value="Submit"/>
								<RaisedButton
									label="Use Sample Key"
									style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px'}}
									onClick={this.props.useSampleKey}/>
							</form>
						</Paper>
						<div style={{verticalAlign:'middle', height:'130px'}}><br/><br/><br/><br/>OR</div>
						<Paper zDepth={1} style={style2}>
							<SelectField
								floatingLabelText="Load Sample Dataset"
								value={this.props.datasource}
								onChange={this.handleChange}
								style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px'}}
								>
								<MenuItem value={'empty'} primaryText="None" />
								<MenuItem value={'balanced'} primaryText="Balanced (default)" />
								<MenuItem value={'fullplate'} primaryText="Full Plate" />
							</SelectField>
						</Paper>
					</Row>
				</Grid>
			</div>
		);
	}
}

DatasheetChooser.propTypes = {
	datasource: PropTypes.string
}
export default DatasheetChooser;
