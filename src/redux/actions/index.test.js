import * as actions from '.';

describe("Actions", () => {

  it("should have a type of UPDATE", () => {

    const mockContent = {companyName: "Figma"};

    const expectedAction = {
      type: "UPDATE",
      payload: mockContent,
    };

    const result = actions.update(mockContent);

    expect(expectedAction).toEqual(result);

  })

  it("should have a type of TOGGLE_VISIBILITY", () => {

    const mockContent = {"Header": false};

    const expectedAction = {
      type: "TOGGLE_VISIBILITY",
      payload: mockContent,
    };

    const result = actions.toggleVisibility(mockContent);

    expect(expectedAction).toEqual(result);

  })

  it("should have a type of IS_LOADING", () => {

    const mockContent = true;

    const expectedAction = {
      type: "IS_LOADING",
      payload: mockContent,
    };

    const result = actions.isLoading(mockContent);

    expect(expectedAction).toEqual(result);

  })

  it("should have a type of ERROR", () => {

    const mockContent = "Error 404: Page not found.";

    const expectedAction = {
      type: "ERROR",
      payload: mockContent,
    };

    const result = actions.hasError(mockContent);

    expect(expectedAction).toEqual(result);

  })

  it("should have a type of CLEAR_ERROR", () => {

    const expectedAction = {
      type: "CLEAR_ERROR",
      payload: false,
    };

    const result = actions.clearError();

    expect(expectedAction).toEqual(result);

  })

})
