import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ErrorPage from './ErrorPage';
import rootReducer from '../../utils/reducers';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe("ErrorPage", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <Router>
          <ErrorPage />
        </Router>
      </Provider>
    );
  })

  it("should render the correct menu items", () => {
    const { getByText } = utils;

    const btn = getByText('Back to dashboard >');

    expect(btn).toBeInTheDocument();
  })
});
