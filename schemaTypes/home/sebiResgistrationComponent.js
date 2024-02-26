export default {
    name: 'sebi',
    type: 'object',
    title: 'SEBI Registered Section',
    fields: [ 
      {
        name: 'headingTitle',
        type: 'string',
        title: 'Heading Title',
      
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'desktopBannerImage',
        type: 'image',
        title: 'Desktop Banner Image',
        description:'(Banner Image Should be: 1900X938 pixels) , (Banner Image Size: 50 KB)',
        options: {
          hotspot: true
        },
      },
      {
        name: 'mobileBannerImage',
        type: 'image',
        title: 'Mobile Banner Image',
        description:'(Banner Image Should be: 1900X938 pixels) , (Banner Image Size: 50 KB)',

        options: {
          hotspot: true
        },
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link',
      },
      {
        name: 'ctaButtonName',
        type: 'string',
        title: 'CTA Button Name',
      },
   
   
    ]
  }
  