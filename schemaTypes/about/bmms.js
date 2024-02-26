export default {
    name: 'bmms',
    type: 'object',
    title: 'Board members & Management Section',
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
            title: 'Details and Images',
            of: [
              {
                type: 'object',
                fields: [
                    {
                        name: 'designation',
                        type: 'string',
                        title: 'Designation',
                      
                      },
                      {
                        name: 'fullName',
                        type: 'string',
                        title: 'Full Name',
                      
                      },
                      {
                        name: 'linkedInProfileLink',
                        type: 'string',
                        title: 'Linkedin Profile Link',
                      
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
                ],
              },
            ],
          },
    
     ] }