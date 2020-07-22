import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearError } from '../../utils/actions';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ErrorPage = ({ clearError, error }) => {

  useEffect(() => {
    return function cleanup() {
      clearError();
    };
  });

  return (
  <section className="error-wrapper">
    <div className="error-block">
      <p>{ error }</p>
      <Link to="/">
        <button>Back to dashboard ></button>
      </Link>
    </div>
  </section>
  )
}

const mapStateToProps = state => ({
  error: state.error,
})

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
})

ErrorPage.propTypes = {
  error: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
]),
  clearError: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
