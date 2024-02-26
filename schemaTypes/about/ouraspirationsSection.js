export default {
    name: 'ourAspirationsSection',
    type: 'object',
    title: 'Our Aspirations Section',
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
            name: 'link',
            type: 'string',
            title: 'Link',
          
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
            name: 'titleAndDescription',
            type: 'array', 
            title: 'Title And Description',
            of: [
              {
                type: 'object',
                fields: [
                      {
                        name: 'title',
                        type: 'string',
                        title: 'Tilte ',
                      },
                      {
                        name: 'description',
                        type: 'string',
                        title: 'Description ',
                      },
                   
                ],
              },
            ],
          },
    
    
    ] }