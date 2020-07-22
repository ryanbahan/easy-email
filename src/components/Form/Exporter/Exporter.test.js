import React from 'react';
import Exporter from './Exporter';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';

describe("Exporter", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <Exporter />
      </Provider>
    );
  })

  it("should render the correct menu items", () => {
    const { getByText } = utils;

    const btn = getByText("Export");

    expect(btn).toBeInTheDocument();
  })
});
