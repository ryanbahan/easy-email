export const DefaultTemplate = [{
  title: "Header",
  component: "Header",
  formItems: [
    {
      title: "Company Logo",
      component: "FileUploader",
      store: "companyImage",
      checkbox: true,
      placeholder: 'https://easyemail.app/placeholder-image.png',
    },
    {
      title: "Company Name",
      component: "ButtonCopyField",
      constraints: {maxLength: 40},
      store: "companyName",
      checkbox: true,
      placeholder: 'Company Name',
    },
    {
      title: "Header Link",
      component: "ButtonCopyField",
      constraints: {maxLength: Infinity},
      store: "headerLink",
      checkbox: false,
      placeholder: "",
    },
    {
      title: "Font Color",
      component: "Colorpicker",
      store: "companyFontColor",
      checkbox: false
    },
    {
      title: "Background Color",
      component: "Colorpicker",
      store: "headerBGColor",
      checkbox: false,
      placeholder: "#ffffff",
    },
  ],
},
{
  title: "Main Image",
  component: "Image",
  formItems: [
    {
      title: "Image",
      component: "FileUploader",
      store: "mainImage",
      checkbox: false,
      placeholder: 'https://easyemail.app/placeholder-image.png',
    },
  ],
},
{
  title: "Image Banner",
  component: "Banner",
  formItems: [
    {
      title: "Banner Text",
      component: "TextField",
      constraints: {maxLength: 65},
      store: "mainImageTagline",
      checkbox: true,
      placeholder: 'Your amazing call-to-action here!',
    },
    {
      title: "Background Color",
      component: "Colorpicker",
      store: "mainImageTaglineBG",
      checkbox: false,
      placeholder: "#ffffff",
    },
    {
      title: "Font Color",
      component: "Colorpicker",
      store: "mainImageFontColor",
      checkbox: false
    },
    {
      title: null
    },
    {
      title: "Banner Button Text",
      component: "ButtonCopyField",
      constraints: {maxLength: 25},
      store: "mainImageButtonCopy",
      checkbox: true,
      placeholder: 'Free Download',
    },
    {
      title: "Banner Button Link",
      component: "ButtonCopyField",
      constraints: {maxLength: Infinity},
      store: "mainImageButtonLink",
      checkbox: false,
      placeholder: "",
    },
    {
      title: "Button Color",
      component: "Colorpicker",
      store: "mainImageButtonColor",
      checkbox: false
    },
    {
      title: "Button Font Color",
      component: "Colorpicker",
      store: "mainImageButtonFontColor",
      checkbox: false
    },
  ],
},
{
  title: "Main Content",
  component: "Content",
  formItems: [
    {
      title: "Content Block Text",
      component: "TextField",
      constraints: {maxLength: 1000},
      store: "content",
      checkbox: true,
      placeholder: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
  ],
},
{
  title: "Call to Action",
  component: "CTA",
  formItems: [
    {
      title: "CTA Button Text",
      component: "ButtonCopyField",
      constraints: {maxLength: 50},
      store: "cta",
      checkbox: false,
      placeholder: 'Call Now',
    },
    {
      title: "CTA Button Link",
      component: "ButtonCopyField",
      store: "ctaButtonLink",
      constraints: {maxLength: Infinity},
      checkbox: false,
      placeholder: ""
    },
    {
      title: "Button Color",
      component: "Colorpicker",
      store: "ctaButtonColor",
      checkbox: false
    },
    {
      title: "Button Font Color",
      component: "Colorpicker",
      store: "ctaButtonFontColor",
      checkbox: false
    },
  ],
},
{
  title: "Footer",
  component: "Footer",
  formItems: [
    {
      title: "Company Address",
      component: "TextField",
      constraints: {maxLength: 250},
      store: "footerAddress",
      placeholder: 'Company Address',
    },
    {
      title: "Font Color",
      component: "Colorpicker",
      store: "footerFontColor"
    },
    {
      title: "Background Color",
      component: "Colorpicker",
      store: "footerBGColor",
      placeholder: "#ffffff",
    },
  ],
}]
