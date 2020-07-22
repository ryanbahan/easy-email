import { LoadingReducer } from './LoadingReducer';

describe("loadingReducer", () => {

  it("should return the initial state", () => {
    const expected = false;
    const result = LoadingReducer(false, {});
    expect(expected).toEqual(result);
  })

  it("should return the updated state of the form content", () => {
    const expected = true;

    const result = LoadingReducer(false, {
      type: "IS_LOADING", payload: true
    });
    expect(expected).toEqual(result);
  })

})
