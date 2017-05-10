import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Grid, Row, Cell } from 'react-inline-grid';

class LayoutSelector extends Component {
	handleChange = (event, index, value) => this.props.handleLayoutChange(value);
	render() {
		const style = {
			height: 130,
			width: 650,
			margin: 10,
			textAlign: 'left',
			display: 'inline-block'
		};
		return (
			<div style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px'}}>
				<Paper zDepth={1} style={style}>
					<Grid>
						<Row>
							<SelectField
								floatingLabelText="Layout"
								value={this.props.layout}
								onChange={this.handleChange}
								style={{marginLeft:'20px', topPadding:'0px', topMargin:'0px'}}
							>
								<MenuItem value={"listorder"} primaryText="List Order" />
								<MenuItem value={"roundrobin"} primaryText="Round Robin" />
								<MenuItem value={"random"} primaryText="Random" />
							</SelectField>
							<p style={{marginLeft:'10px', verticalAlign:'middle', topMargin:'30px'}}><i>{this.props.description}</i> </p>
						</Row>
					</Grid>
				</Paper>
			</div>
		);
	}
}

// const styles = {
//   customWidth: {
//     width: 150,
//   },
// };
//
// // TODO: rename to avoid confusion between selectors and selection menu
// function LayoutSelector({ attributes,
// 	showSample,
// 	visibleAttribute,
// 	layout,
// 	handleSubmit,
// 	handleLayoutChange,
// 	handleSampleVisChange,
// 	handleAttrVisChange }) {
// 	return (
// 		<div>
// 			<form>
// 				<select value={layout} onChange={handleLayoutChange}>
// 					<option value="listorder">List Order</option>
// 					<option value="random">Random</option>
// 					<option value="roundrobin">Round Robin</option>
// 				</select>
// 			</form>
// 			<br />
// 			<form>
// 				<input
// 					type="checkbox"
// 					name="visible"
// 					value="showSample"
// 					checked={showSample}
// 					onChange={handleSampleVisChange}
// 				/>
// 			Show Sample Name
// 				<br />
// 			</form>
// 			<br />
// 			Choose an attribute to overlay:
// 			<br />
// 			<form>
// 				{attributes.map(attribute =>
// 					<div key={'attr_' + attribute}>
// 						<input
// 							type="checkbox"
// 							name={attribute}
// 							value={attribute}
// 							checked={visibleAttribute.includes(attribute)}
// 							onChange={handleAttrVisChange}
// 						/>
// 						Show {attribute}
// 						<br />
// 					</div>
// 				)}
// 			</form>
// 		</div>
// 	);
// }
//
LayoutSelector.propTypes = {
	layout: PropTypes.string,
	handleLayoutChange: PropTypes.func
};
//
export default LayoutSelector;
