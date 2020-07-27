import React, { useState } from 'react';
import { connect } from 'react-redux';
import { update, hasWarning, clearWarning } from '../../../utils/actions';
import './TextField.css';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import Warning from '../../Warning/Warning';
import 'react-quill/dist/quill.snow.css';

const TextField = ({ content, constraints, hasWarning, clearWarning, update, store, warning }) => {
  const [state, setState] = useState({ active: false })

  const toggleModal = (e) => {
    setState({ active: !state.active })
  }

  const updateStore = (store, content) => {
    if (content.length > constraints.maxLength) {
      hasWarning({
        store: store,
        warning: "Warning: Your content exceeds the maximum suggested length for this section."
      });
    } else {
      clearWarning();
    }

    update({[store]: content});
  }

  return (
      <>
        <button className="text-field-btn" onClick={() => toggleModal()} >
          Edit
        </button>
        <div className={state.active ? "modal-wrapper" : "hidden"}>
          <div className="modal" style={{position: "relative"}}>
            <ReactQuill theme="snow" value={ content } onChange={(value) => updateStore(store, value)}/>
            {warning === store && <Warning />}
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

TextField.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
