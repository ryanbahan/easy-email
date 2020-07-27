import { visibilityReducer } from './visibilityReducer';
import { DefaultVisibilityState } from '../Templates/DefaultVisibilityState';

describe("visibilityReducer", () => {

  it("should return the initial state", () => {
    const expected = DefaultVisibilityState;
    const result = visibilityReducer(undefined, {});
    expect(expected).toEqual(result);
  })

  it("should return the updated visibility state on TOGGLE_VISIBILITY", () => {
    const expected =  {
      "Banner Text": true,
      "Banner Button Text": true,
      "CTA Button Text": true,
      "Company Logo": true,
      "Company Name": true,
      "Footer": true,
      "Header": false,
      "Image": true,
      "Image Banner": true,
      "Main Content": true,
      "Main Image": true,
      "Content Block Text": true,
      }
    const result = visibilityReducer(DefaultVisibilityState, {
      type: "TOGGLE_VISIBILITY", payload: {"Header": false}
    });
    expect(expected).toEqual(result);
  })

})
