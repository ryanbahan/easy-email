import React from 'react';
import PreviewContainer from './PreviewContainer';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';
import { DefaultState } from '../../../utils/Templates/DefaultState';

describe("PreviewContainer", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><PreviewContainer /></Provider>);
  })

  it("should render the correct content", () => {
    const { getByText, getByAltText, debug } = utils;

    const companyLogo = getByAltText("Company logo");
    const companyName = getByText(DefaultState.companyName);
    const image = getByAltText('Main content');
    const mainImageTagline = getByText(DefaultState.mainImageTagline);
    const mainImageButtonCopy = getByText(DefaultState.mainImageButtonCopy);
    const content = getByText(DefaultState.content);
    const cta = getByText(DefaultState.cta);
    const footer = getByText(DefaultState.footerAddress);

    expect(companyLogo).toBeInTheDocument();
    expect(companyLogo.src).toEqual("http://localhost/placeholder-image.png");
    expect(companyName).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image.src).toEqual("http://localhost/placeholder-image.png");
    expect(mainImageTagline).toBeInTheDocument();
    expect(mainImageButtonCopy).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  })
});
