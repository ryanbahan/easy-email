import React from 'react';
import EmailImageTagline from './EmailImageTagline';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultState } from '../../../utils/Templates/DefaultState';

describe("EmailImageTagline", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><EmailImageTagline /></Provider>);
  })

  it("should render the correct content", () => {
    const { getByText } = utils;

    const mainImageTagline = getByText(DefaultState.mainImageTagline);
    const mainImageButtonCopy = getByText(DefaultState.mainImageButtonCopy);

    expect(mainImageTagline).toBeInTheDocument();
    expect(mainImageButtonCopy).toBeInTheDocument();
  })
});
