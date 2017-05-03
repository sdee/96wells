import { connect } from 'react-redux';
import DatasheetChooser from '../components/DatasheetChooser';
import { setGoogleSheet, loadGoogleSuccess } from '../actions';
var Miso = require("miso.dataset");

function handleSubmit(values, dispatch) {
	let gkey;
	if (values.length < 1) { //for testing only
		gkey = '1Ewgyv4EayonkOHaa6Q8N_63jrjt7vQF-NFOCZRPQuU4';
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
		});
	}

	const mapStateToProps = (state, ownProps) => ({
		googlesheet: state.app.googlesheet
	});

	const mapDispatchToProps = (dispatch, ownProps) => ({
		onSubmit: (values) => {
			handleSubmit(values, dispatch);
		}
	});

	const DatasheetField = connect(
		mapStateToProps,
		mapDispatchToProps
	)(DatasheetChooser);

	export default DatasheetField;
