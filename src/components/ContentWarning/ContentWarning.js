import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearWarning } from '../../utils/actions';
import PropTypes from 'prop-types';
import './ContentWarning.css';

const ContentWarning = ({ warning, clearWarning }) => {

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

ContentWarning.propTypes = {
  error: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
]),
  clearWarning: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentWarning);
