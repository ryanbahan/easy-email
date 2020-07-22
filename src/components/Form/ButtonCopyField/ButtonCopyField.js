import React, { useState } from 'react';
import { connect } from 'react-redux';
import { update, hasWarning, clearWarning } from '../../../utils/Actions';
import './ButtonCopyField.css';
import PropTypes from 'prop-types';
import WarningModal from '../../ContentWarning/ContentWarning';

const ButtonCopyField = ({ constraints, hasWarning, store, clearWarning, update, content, warning }) => {
  const [state, setState] = useState({ active: false })

  const toggleModal = () => {
    setState({...state, active: !state.active})
  }

  const updateStore = (store, content) => {
    if (content.length > constraints.maxLength) {
      hasWarning({
        store: store, warning: "Warning: Your content exceeds the maximum suggested length for this section."
      });
    } else {
      clearWarning();
    }

    update({[store]: content});
  }

  return (
      <>
        <button className="text-field-btn" onClick={() => toggleModal()}>
          Edit
        </button>
        <div className={state.active ? "modal-wrapper" : "hidden"}>
          <div className="modal">
            <input type="text"
              style={{padding: "0.25rem 0 0.25rem 0.25rem", width: "calc(100% - 0.25rem)"}}
              value={content}
              onChange={(e) => updateStore(store, e.target.value)}
            />
            {warning === store && <WarningModal />}
          </div>
        </div>
      </>
  )
}

const mapStateToProps = (state, ownProps) => ({
  content: state.form[ownProps.store],
  warning: state.warning.store,
})

const mapDispatchToProps = dispatch => ({
  update: content => dispatch(update(content)),
  hasWarning: warning => dispatch(hasWarning(warning)),
  clearWarning: () => dispatch(clearWarning()),
})

ButtonCopyField.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCopyField);
