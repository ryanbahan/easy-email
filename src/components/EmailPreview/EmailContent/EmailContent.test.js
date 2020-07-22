import React from 'react';
import EmailContent from './EmailContent';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultState } from '../../../utils/Templates/DefaultState';

describe("EmailContent", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><EmailContent /></Provider>);
  })

  it("should render the correct content", () => {
    const { getByText } = utils;

    const content = getByText(DefaultState.content);

    expect(content).toBeInTheDocument();
  })
});
