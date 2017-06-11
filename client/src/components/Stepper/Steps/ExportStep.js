import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Grid, Row } from 'react-inline-grid';
import {CSVLink, CSVDownload} from 'react-csv';
import RaisedButton from 'material-ui/RaisedButton';

class ExportStep extends Component {
	render() {
		const style = {
			height: 130,
			width: 650,
			margin: 10,
			padding: 10,
			textAlign: 'left',
			display: 'inline-block'
		};
		const csvFile = this.props.csvFile;
		return (
			<div>
				<Grid>
					<Row>
						<Paper zDepth={1} style={style}>
						<p>Choose a file format for export: </p>
							<CSVLink data={csvFile} filename={"96wells_Export.csv"}><RaisedButton label="CSV File" style={{margin:'10px'}} primary={Boolean(true)}/></CSVLink>
							<CSVLink data={csvFile} separator={'\t'} filename={"96wells_Export.tsv"}><RaisedButton label="TSV File" style={{margin:'10px'}} primary={Boolean(true)}/></CSVLink>

						</Paper>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default ExportStep;
