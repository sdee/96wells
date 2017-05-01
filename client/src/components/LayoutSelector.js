import React from 'react';
//TODO: rename to avoid confusion between selectors and selection menu
function LayoutSelector ({ attributes,  showSample, visibleAttribute, layout, handleSubmit, handleLayoutChange, handleSampleVisChange, handleAttrVisChange}) {
	return (
		<div>
			<form>
				<select value={layout} onChange={handleLayoutChange}>
					<option></option>
					<option value="listorder">List Order</option>
					<option value="random">Random</option>
					<option value="roundrobin">Round Robin</option>
				</select>
			</form>
			<br/>
			<form>
				<input type="checkbox" name="visible" value="showSample"
					checked={showSample}
					onChange={handleSampleVisChange}/>Show Sample Name<br/>
			</form>
			<br/>
			Choose an attribute to overlay:
			<br/>
			<form>
				{attributes.map(attribute =><div>
					<input type="checkbox" name={attribute} value={attribute}
						checked={visibleAttribute.includes(attribute)}
						onChange={handleAttrVisChange}/>Show {attribute}<br/></div>
				)}
			</form>
		</div>
	);
}

export default LayoutSelector;
