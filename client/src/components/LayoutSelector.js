import React from 'react';
import PropTypes from 'prop-types';

// TODO: rename to avoid confusion between selectors and selection menu
function LayoutSelector({ attributes,
	showSample,
	visibleAttribute,
	layout,
	handleSubmit,
	handleLayoutChange,
	handleSampleVisChange,
	handleAttrVisChange }) {
	return (
		<div>
			<form>
				<select value={layout} onChange={handleLayoutChange}>
					<option value="listorder">List Order</option>
					<option value="random">Random</option>
					<option value="roundrobin">Round Robin</option>
				</select>
			</form>
			<br />
			<form>
				<input
					type="checkbox"
					name="visible"
					value="showSample"
					checked={showSample}
					onChange={handleSampleVisChange}
				/>
			Show Sample Name
				<br />
			</form>
			<br />
			Choose an attribute to overlay:
			<br />
			<form>
				{attributes.map(attribute =>
					<div key={'attr_' + attribute}>
						<input
							type="checkbox"
							name={attribute}
							value={attribute}
							checked={visibleAttribute.includes(attribute)}
							onChange={handleAttrVisChange}
						/>
						Show {attribute}
						<br />
					</div>
				)}
			</form>
		</div>
	);
}

LayoutSelector.propTypes = {
	attributes: PropTypes.array,
	showSample: PropTypes.bool,
	visibleAttribute: PropTypes.string,
	layout: PropTypes.string,
	handleSubmit: PropTypes.func,
	handleLayoutChange: PropTypes.func,
	handleSampleVisChange: PropTypes.func,
	handleAttrVisChange: PropTypes.func
};

export default LayoutSelector;
