import React from 'react';
import FileUploader from './FileUploader';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';

describe("FileUploader", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <FileUploader />
      </Provider>
    );
  })

  it("should render the correct menu items", () => {
    const { getByText, debug } = utils;
  })
});
