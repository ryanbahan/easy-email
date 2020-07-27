import { formReducer } from './formReducer';
import { DefaultState } from '../Templates/DefaultState';

describe("formReducer", () => {

  it("should return the initial state", () => {
    const expected = DefaultState;
    const result = formReducer(undefined, {});
    expect(expected).toEqual(result);
  })

  it("should return the updated state of the form content", () => {
    const expected = {
      companyImage: '/placeholder-image.png',
      companyName: 'Figma',
      mainImage: '/placeholder-image.png',
      mainImageTagline: 'Your amazing call-to-action here!',
      mainImageButtonCopy: 'Free Download',
      mainImageTaglineBG: "#ffffff",
      mainImageButtonLink: "",
      ctaButtonLink: "",
      headerLink: "",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      cta: 'Call Now',
      footerAddress: 'Company Address',
      footerBGColor: "#ffffff",
      headerBGColor: "#ffffff",
    };

    const result = formReducer(DefaultState, {
      type: "UPDATE", payload: {companyName: "Figma"}
    });
    expect(expected).toEqual(result);
  })

})
