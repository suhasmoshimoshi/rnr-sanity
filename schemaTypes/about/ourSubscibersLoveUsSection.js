export default {
    name: 'ourSubscibersLoveUsSection',
    type: 'object',
    title: 'Our Subscibers love us Section',
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
            name: 'details',
            type: 'array', 
            title: 'Details',
            of: [
              {
                type: 'object',
                fields: [
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
                        name: 'cardTitle',
                        type: 'string',
                        title: 'Card Title ',
                      },
                      {
                        name: 'cardDescription',
                        type: 'string',
                        title: 'Card Description ',
                      },
                ],
              },
            ],
          },
        
        ]
        
        }