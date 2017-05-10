import { connect } from 'react-redux';
import DatasheetChooser from '../components/Stepper/DatasheetChooser';
import { loadGoogleSuccess, loadData, postNotification } from '../actions';

var Miso = require("miso.dataset");

function handleSubmit(value, dispatch) {
	let gkey;
	if (value.length < 1) { //for testing only
		gkey = '1Ewgyv4EayonkOHaa6Q8N_63jrjt7vQF-NFOCZRPQuU4';
	}
	else {
		gkey = value;
	}

	const ds = new Miso.Dataset({
		importer : Miso.Dataset.Importers.GoogleSpreadsheet,
		parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
		key : gkey,
		worksheet : "1",
		sync : true
	});

	let googleData = [];

	let dataPromise = new Promise((resolve, reject) => {
		ds.fetch({
			success : function () {
				//check for sample col??
				let cols = ds.columnNames();
				ds.each(function(row, rowIndex) {
					let d = {};
					d.sample = row.Sample;
					d.idx = row._id;
					cols.forEach(function(attribute){
						if (attribute!=="Sample") {
							d[attribute] = row[attribute];
						};
					});
					googleData.push(d);
				});
				if (googleData.length > 0) {
					resolve();
				}
			},
			error : function() {
				console.log("Connection error");
			}
		})}, 250);

		dataPromise.then((successMessage) => {
			dispatch(loadGoogleSuccess(googleData, gkey));
			dispatch(postNotification("Successfully imported data from Google sheet."));
		});
	}

	function useSampleKey(dispatch) {
		handleSubmit('1Ewgyv4EayonkOHaa6Q8N_63jrjt7vQF-NFOCZRPQuU4', dispatch);
	}

	function handleDataSetChange(value, dispatch) {
		dispatch(loadData(value));
		console.log("value");
		console.log(value);
		dispatch(postNotification("Loaded new data set: "+value));
	}

	const mapStateToProps = (state, ownProps) => ({
		googlesheet: state.app.googlesheet,
		datasource: state.app.datasource
	});

	const mapDispatchToProps = (dispatch, ownProps) => ({
		onSubmit:
		(value) => {
			handleSubmit(value, dispatch);
		},
		useSampleKey:
		() => {
			useSampleKey(dispatch);
		},
		onDataSetChange:
		(value) => {
			handleDataSetChange(value, dispatch);
		}
	});

	const DatasheetField = connect(
		mapStateToProps,
		mapDispatchToProps
	)(DatasheetChooser);

	export default DatasheetField;
