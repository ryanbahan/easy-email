export const DefaultTemplate = {
	id: 1,
	name: 'Marketing Email',
	components: [
		{
			templateID: 1,
			id: 1,
			title: 'Header',
			component: 'Header',
			active: true,
			formItems: [
				{
					id: 1,
					title: 'Company Logo',
					component: 'FileUploader',
					store: 'companyImage',
					checkbox: true,
					active: true,
					value: 'https://easyemail.app/placeholder-image.png'
				},
				{
					id: 2,
					title: 'Company Name',
					component: 'ButtonCopyField',
					constraints: { maxLength: 40 },
					store: 'companyName',
					checkbox: true,
					active: true,
					value: 'Company Name'
				},
				{
					id: 3,
					title: 'Header Link',
					component: 'ButtonCopyField',
					constraints: { maxLength: Infinity },
					store: 'headerLink',
					checkbox: false,
					value: ''
				},
				{
					id: 4,
					title: 'Font Color',
					component: 'Colorpicker',
					store: 'companyFontColor',
					checkbox: false,
					value: ''
				},
				{
					id: 5,
					title: 'Background Color',
					component: 'Colorpicker',
					store: 'headerBGColor',
					checkbox: false,
					value: '#ffffff'
				}
			]
		}
		// {
		//   templateID: 1,
		//   id: 2,
		//   title: "Main Image",
		//   component: "Image",
		//   active: true,
		//   formItems: [
		//     {
		//       title: "Image",
		//       component: "FileUploader",
		//       store: "mainImage",
		//       checkbox: false,
		//       placeholder: 'https://easyemail.app/placeholder-image.png',
		//     },
		//   ],
		// },
		// {
		//   templateID: 1,
		//   id: 3,
		//   title: "Image Banner",
		//   component: "Banner",
		//   active: true,
		//   formItems: [
		//     {
		//       title: "Banner Text",
		//       component: "TextField",
		//       constraints: { maxLength: 65 },
		//       store: "mainImageTagline",
		//       checkbox: true,
		//       active: true,
		//       placeholder: 'Your amazing call-to-action here!',
		//     },
		//     {
		//       title: "Background Color",
		//       component: "Colorpicker",
		//       store: "mainImageTaglineBG",
		//       checkbox: false,
		//       placeholder: "#ffffff",
		//     },
		//     {
		//       title: "Font Color",
		//       component: "Colorpicker",
		//       store: "mainImageFontColor",
		//       checkbox: false,
		//     },
		//     {
		//       title: null
		//     },
		//     {
		//       title: "Banner Button Text",
		//       component: "ButtonCopyField",
		//       constraints: { maxLength: 25 },
		//       store: "mainImageButtonCopy",
		//       checkbox: true,
		//       active: true,
		//       placeholder: 'Free Download',
		//     },
		//     {
		//       title: "Banner Button Link",
		//       component: "ButtonCopyField",
		//       constraints: { maxLength: Infinity },
		//       store: "mainImageButtonLink",
		//       checkbox: false,
		//       placeholder: "",
		//     },
		//     {
		//       title: "Button Color",
		//       component: "Colorpicker",
		//       store: "mainImageButtonColor",
		//       checkbox: false,
		//     },
		//     {
		//       title: "Button Font Color",
		//       component: "Colorpicker",
		//       store: "mainImageButtonFontColor",
		//       checkbox: false,
		//     },
		//   ],
		// },
		// {
		//   templateID: 1,
		//   id: 4,
		//   title: "Main Content",
		//   component: "Content",
		//   active: true,
		//   formItems: [
		//     {
		//       title: "Content Block Text",
		//       component: "TextField",
		//       constraints: { maxLength: 1000 },
		//       store: "content",
		//       checkbox: true,
		//       active: true,
		//       placeholder: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		//     },
		//   ],
		// },
		// {
		//   templateID: 1,
		//   id: 5,
		//   title: "Call to Action",
		//   component: "CTA",
		//   active: true,
		//   formItems: [
		//     {
		//       title: "CTA Button Text",
		//       component: "ButtonCopyField",
		//       constraints: { maxLength: 50 },
		//       store: "cta",
		//       checkbox: false,
		//       placeholder: 'Call Now',
		//     },
		//     {
		//       title: "CTA Button Link",
		//       component: "ButtonCopyField",
		//       store: "ctaButtonLink",
		//       constraints: { maxLength: Infinity },
		//       checkbox: false,
		//       placeholder: ""
		//     },
		//     {
		//       title: "Button Color",
		//       component: "Colorpicker",
		//       store: "ctaButtonColor",
		//       checkbox: false,
		//     },
		//     {
		//       title: "Button Font Color",
		//       component: "Colorpicker",
		//       store: "ctaButtonFontColor",
		//       checkbox: false,
		//     },
		//   ],
		// },
		// {
		//   templateID: 1,
		//   id: 6,
		//   title: "Footer",
		//   component: "Footer",
		//   active: true,
		//   formItems: [
		//     {
		//       title: "Company Address",
		//       component: "TextField",
		//       constraints: { maxLength: 250 },
		//       store: "footerAddress",
		//       placeholder: 'Company Address',
		//     },
		//     {
		//       title: "Font Color",
		//       component: "Colorpicker",
		//       store: "footerFontColor"
		//     },
		//     {
		//       title: "Background Color",
		//       component: "Colorpicker",
		//       store: "footerBGColor",
		//       placeholder: "#ffffff",
		//     },
		//   ],
		// }]
	]
};
