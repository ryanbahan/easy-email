import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearWarning } from '../../redux/actions';
import PropTypes from 'prop-types';
import './Warning.css';

const WarningModal = ({ warning, clearWarning }) => {

  useEffect(() => {
    return function cleanup() {
      clearWarning();
    };
  })

  return (
      <div className="warning-block">
        <p>{ warning }</p>
      </div>
  )
}

const mapStateToProps = state => ({
  warning: state.warning.warning,
})

const mapDispatchToProps = dispatch => ({
  clearWarning: () => dispatch(clearWarning()),
})

WarningModal.propTypes = {
  error: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
]),
  clearWarning: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(WarningModal);
