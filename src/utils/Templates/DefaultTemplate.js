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
					componentID: 1,
					id: 1,
					title: 'Company Logo',
					component: 'FileUploader',
					store: 'companyImage',
					checkbox: true,
					active: true,
					value: 'https://easyemail.app/placeholder-image.png'
				},
				{
					componentID: 1,
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
					componentID: 1,
					id: 3,
					title: 'Header Link',
					component: 'ButtonCopyField',
					constraints: { maxLength: Infinity },
					store: 'headerLink',
					checkbox: false,
					value: ''
				},
				{
					componentID: 1,
					id: 4,
					title: 'Font Color',
					component: 'Colorpicker',
					store: 'companyFontColor',
					checkbox: false,
					value: ''
				},
				{
					componentID: 1,
					id: 5,
					title: 'Background Color',
					component: 'Colorpicker',
					store: 'headerBGColor',
					checkbox: false,
					value: '#ffffff'
				}
			]
		},
		{
			templateID: 1,
			id: 2,
			title: 'Main Image',
			component: 'Image',
			active: true,
			formItems: [
				{
					componentID: 2,
					id: 6,
					title: 'Image',
					component: 'FileUploader',
					store: 'mainImage',
					checkbox: false,
					value: 'https://easyemail.app/placeholder-image.png'
				}
			]
		},
		{
			templateID: 1,
			id: 3,
			title: 'Image Banner',
			component: 'Banner',
			active: true,
			formItems: [
				{
					componentID: 3,
					id: 7,
					title: 'Banner Text',
					component: 'TextField',
					constraints: { maxLength: 65 },
					store: 'mainImageTagline',
					checkbox: true,
					active: true,
					value: 'Your amazing call-to-action here!'
				},
				{
					componentID: 3,
					id: 8,
					title: 'Background Color',
					component: 'Colorpicker',
					store: 'mainImageTaglineBG',
					checkbox: false,
					value: '#ffffff'
				},
				{
					componentID: 3,
					id: 9,
					title: 'Font Color',
					component: 'Colorpicker',
					store: 'mainImageFontColor',
					checkbox: false,
					value: ''
				},
				{
					title: null
				},
				{
					componentID: 3,
					id: 10,
					title: 'Banner Button Text',
					component: 'ButtonCopyField',
					constraints: { maxLength: 25 },
					store: 'mainImageButtonCopy',
					checkbox: true,
					active: true,
					value: 'Free Download'
				},
				{
					componentID: 3,
					id: 11,
					title: 'Banner Button Link',
					component: 'ButtonCopyField',
					constraints: { maxLength: Infinity },
					store: 'mainImageButtonLink',
					checkbox: false,
					value: ''
				},
				{
					componentID: 3,
					id: 12,
					title: 'Button Color',
					component: 'Colorpicker',
					store: 'mainImageButtonColor',
					checkbox: false,
					value: ''
				},
				{
					componentID: 3,
					id: 13,
					title: 'Button Font Color',
					component: 'Colorpicker',
					store: 'mainImageButtonFontColor',
					checkbox: false,
					value: ''
				}
			]
		},
		{
			templateID: 1,
			id: 4,
			title: 'Main Content',
			component: 'Content',
			active: true,
			formItems: [
				{
					componentID: 4,
					id: 14,
					title: 'Content Block Text',
					component: 'TextField',
					constraints: { maxLength: 1000 },
					store: 'content',
					checkbox: false,
					value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
				}
			]
		},
		{
			templateID: 1,
			id: 5,
			title: 'Call to Action',
			component: 'CTA',
			active: true,
			formItems: [
				{
					componentID: 5,
					id: 15,
					title: 'CTA Button Text',
					component: 'ButtonCopyField',
					constraints: { maxLength: 50 },
					store: 'cta',
					checkbox: false,
					value: 'Call Now'
				},
				{
					componentID: 5,
					id: 16,
					title: 'CTA Button Link',
					component: 'ButtonCopyField',
					store: 'ctaButtonLink',
					constraints: { maxLength: Infinity },
					checkbox: false,
					value: ''
				},
				{
					componentID: 5,
					id: 17,
					title: 'Button Color',
					component: 'Colorpicker',
					store: 'ctaButtonColor',
					checkbox: false,
					value: ''
				},
				{
					componentID: 5,
					id: 18,
					title: 'Button Font Color',
					component: 'Colorpicker',
					store: 'ctaButtonFontColor',
					checkbox: false,
					value: ''
				}
			]
		}
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
		//       value: 'Company Address',
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
		//       value: "#ffffff",
		//     },
		//   ],
		// }]
	]
};
