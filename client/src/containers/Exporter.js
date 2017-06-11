import { connect } from 'react-redux';
import ExportStep from '../components/Stepper/Steps/ExportStep';
import { csvFile } from '../selectors/export';

const mapStateToProps = (state, ownProps) => ({
	csvFile: csvFile(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const Exporter = connect(
	mapStateToProps,
	mapDispatchToProps
)(ExportStep);

export default Exporter;
