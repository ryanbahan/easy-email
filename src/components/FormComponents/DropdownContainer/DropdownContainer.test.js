import React from 'react';
import DropdownContainer from './DropdownContainer';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../utils/reducers';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

describe("DropdownContainer", () => {
  const store = createStore(rootReducer);
  let utils;

  global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
  takeRecords() {return []}
  };

  global.document.getSelection = function() {}

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <Router>
          <DropdownContainer
            title={"Header"}
            formItems={[
              {title: "Company Logo", component: "FileUploader", store: "companyImage"},
              {title: "Company Name", component: "TextField", constraints: {maxLength: 100}, store: "companyName"},
              {title: "Font Color", component: "Colorpicker", store: "companyFontColor"},
              {title: "Background Color", component: "Colorpicker", store: "headerBGColor"},
            ]}
          />
        </Router>
      </Provider>
    );
  })

  it.skip("should render the correct menu items", () => {
    const { getByText, getAllByText } = utils;

    const headerTitle = getByText("Header");
    const dropdownToggle = getByText("+");
    const companyLogoLabel = getByText("Company Logo");
    const companyNameLabel = getByText("Company Name");
    const edit = getByText("Edit");
    const fileUploader = getByText("Upload file");
    const fontColorLabel = getByText("Font Color");
    const colorPicker = getAllByText("Pick Color");
    const bgColorLabel = getByText("Background Color");

    expect(headerTitle).toBeInTheDocument();
    expect(dropdownToggle).toBeInTheDocument();
    expect(companyLogoLabel).toBeInTheDocument();
    expect(companyNameLabel).toBeInTheDocument();
    expect(edit).toBeInTheDocument();
    expect(fileUploader).toBeInTheDocument();
    expect(fontColorLabel).toBeInTheDocument();
    expect(colorPicker.length).toEqual(2);
    expect(bgColorLabel).toBeInTheDocument();
  })
});
