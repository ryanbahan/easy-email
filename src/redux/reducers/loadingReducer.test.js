import { loadingReducer } from './loadingReducer';

describe("loadingReducer", () => {

  it("should return the initial state", () => {
    const expected = false;
    const result = loadingReducer(false, {});
    expect(expected).toEqual(result);
  })

  it("should return the updated state of the form content", () => {
    const expected = true;

    const result = loadingReducer(false, {
      type: "IS_LOADING", payload: true
    });
    expect(expected).toEqual(result);
  })

})
