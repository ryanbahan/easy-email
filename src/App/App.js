import React from 'react';
import './App.css';
import Form from '../components/Form/Form';
import Preview from '../components/EmailPreview/Preview';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import EasyEmail from '../pages/EasyEmail/EasyEmail';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const App = ({ error }) => {
	return (
		<div className="App">
			{error && <Redirect to="/error" />}
			<Route exact path="/">
				<EasyEmail />
			</Route>
			<Route path="/error">
				<ErrorPage />
			</Route>
		</div>
	);
};

const mapStateToProps = (state) => ({
	error: state.error
});

App.propTypes = {
	error: PropTypes.bool
};

export default connect(mapStateToProps)(App);
