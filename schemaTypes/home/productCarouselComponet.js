export default {
    name: 'productCarousel',
    type: 'object',
    title: 'Product Carousal Section',
    fields: [ 
      {
        name: 'headingTitle1',
        type: 'string',
        title: 'Heading Title 1',
      
      },
      {
        name: 'headingTitle2',
        type: 'string',
        title: 'Heading Title 2',
      
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
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
        name: 'feature',
        type: 'array',
        title: 'Feature',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'featureTitle',
                type: 'string',
                title: 'Feature Title ',
              },
              {
                name: 'featureIcon',
                type: 'image',
                title: 'Feature  Icon ',
                options: {
                  hotspot: true,
                },
              },
            ],
          },
        ],
      },
    
   
   
    ]
  }
  