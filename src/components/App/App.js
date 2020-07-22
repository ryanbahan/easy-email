import React from 'react';
import './App.css';
import { FormContainer } from '../Form/FormContainer/FormContainer';
import PreviewContainer from '../EmailPreview/PreviewContainer/PreviewContainer';
import { DefaultTemplate } from '../../utils/Templates/DefaultTemplate';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Analyzer from '../Analyzer/Analyzer';
import PropTypes from 'prop-types';

const App = ({ error }) => {
  return (
      <div className="App">
        {error && <Redirect to="/error" />}
        <Route exact path="/">
          <FormContainer menus={ DefaultTemplate } />
          <PreviewContainer />
        </Route>
        <Route path="/tone-analysis">
          <Analyzer />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
      </div>
  );
}

const mapStateToProps = state => ({
  error: state.error,
})

App.propTypes = {
  error: PropTypes.bool,
}

export default connect(mapStateToProps)(App);
