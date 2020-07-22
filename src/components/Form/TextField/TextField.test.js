import React from 'react';
import TextField from './TextField';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';

describe("TextField", () => {
  const store = createStore(rootReducer);
  let utils;

  global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
    takeRecords() {return {true: true}}
};

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <TextField />
      </Provider>
    );
  })

  it.skip("should render the correct menu items", () => {
    const { debug } = utils;

    debug();
  })
});
