import React from 'react';
import EmailFooter from './EmailFooter';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultState } from '../../../utils/Templates/DefaultState';

describe("EmailFooter", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><EmailFooter /></Provider>);
  })

  it("should render the correct content", () => {
    const { getByText } = utils;

    const footer = getByText(DefaultState.footerAddress);

    expect(footer).toBeInTheDocument();
  })
});
