import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateItem, hasWarning, clearWarning } from '../../../redux/actions';
import './ButtonCopyField.css';
import PropTypes from 'prop-types';
import Warning from '../../Warning/Warning';

const ButtonCopyField = (props) => {
	const { constraints, hasWarning, store, clearWarning, updateItem, content, warning, id, componentID } = props;
	const [ state, setState ] = useState({ active: false });

	const toggleModal = () => {
		setState({ ...state, active: !state.active });
	};

	const updateStore = (store, content) => {
		if (content.length > constraints.maxLength) {
			hasWarning({
				store: store,
				warning: 'Warning: Your content exceeds the maximum suggested length for this section.'
			});
		} else {
			clearWarning();
		}

		updateItem({ itemID: id, componentID, content });
	};

	return (
		<React.Fragment>
			<button className="text-field-btn" onClick={() => toggleModal()}>
				Edit
			</button>
			<div className={state.active ? 'modal-wrapper' : 'hidden'}>
				<div className="modal">
					<input
						type="text"
						style={{ padding: '0.25rem 0 0.25rem 0.25rem', width: 'calc(100% - 0.25rem)' }}
						value={content}
						onChange={(e) => updateStore(store, e.target.value)}
					/>
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

	return {
		content: content,
		warning: state.warning.store
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateItem: (content) => dispatch(updateItem(content)),
	hasWarning: (warning) => dispatch(hasWarning(warning)),
	clearWarning: () => dispatch(clearWarning())
});

ButtonCopyField.propTypes = {
	store: PropTypes.string,
	update: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCopyField);
