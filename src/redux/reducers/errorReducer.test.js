import { errorReducer } from './errorReducer';

describe("errorReducer", () => {

  it("should return the initial state", () => {
    const expected = false;
    const result = errorReducer(undefined, {});
    expect(expected).toEqual(result);
  })

  it("should return the error message on ERROR", () => {
    const expected = "Error 404: Page not found";

    const result = errorReducer(false, {
      type: "ERROR", payload: {message: "Error 404: Page not found"}
    });
    expect(expected).toEqual(result);
  })

  it("should clear error on CLEAR_ERROR", () => {
    const expected = false;

    const result = errorReducer(true, {
      type: "CLEAR_ERROR", payload: false
    });
    expect(expected).toEqual(result);
  })

})
