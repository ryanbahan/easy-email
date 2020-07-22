import React from 'react';
import EmailCTA from './EmailCTA';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultState } from '../../../utils/Templates/DefaultState';

describe("EmailCTA", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><EmailCTA /></Provider>);
  })

  it("should render the correct content", () => {
    const { getByText } = utils;

    const cta = getByText(DefaultState.cta);

    expect(cta).toBeInTheDocument();
  })
});
