import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateItem, hasWarning, clearWarning } from '../../../redux/actions';
import './TextField.css';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import Warning from '../../Warning/Warning';
import 'react-quill/dist/quill.snow.css';

const TextField = (props) => {
	const { content, constraints, hasWarning, clearWarning, update, store, warning, id, componentID } = props;
	const [ state, setState ] = useState({ active: false });

	const toggleModal = (e) => {
		setState({ active: !state.active });
	};

	const updateStore = (store, content) => {
		// if (content.length > constraints.maxLength) {
		// 	hasWarning({
		// 		store: store,
		// 		warning: 'Warning: Your content exceeds the maximum suggested length for this section.'
		// 	});
		// } else {
		// 	clearWarning();
		// }

		update({ itemID: id, componentID, content });
	};

	return (
		<React.Fragment>
			<button className="text-field-btn" onClick={() => toggleModal()}>
				Edit
			</button>
			<div className={state.active ? 'modal-wrapper' : 'hidden'}>
				<div className="modal" style={{ position: 'relative' }}>
					<ReactQuill theme="snow" value={content} onChange={(value) => updateStore(store, value)} />
					{warning === store && <Warning />}
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state, ownProps) => {
	const content = state.template.components
		.find((c) => c.id === ownProps.componentID)
		.formItems.find((f) => f.id === ownProps.id).value;

	console.log('content', content);

	return {
		content: content,
		warning: state.warning.store
	};
};

const mapDispatchToProps = (dispatch) => ({
	update: (content) => dispatch(updateItem(content)),
	hasWarning: (warning) => dispatch(hasWarning(warning)),
	clearWarning: () => dispatch(clearWarning())
});

TextField.propTypes = {
	store: PropTypes.string,
	update: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
