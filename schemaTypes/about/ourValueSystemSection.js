export default {
    name: 'ourValueSystemSection',
    type: 'object',
    title: 'Our Value System Section',
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
            name: 'iconsAndDetails',
            type: 'array', 
            title: 'Icons And Details',
            of: [
              {
                type: 'object',
                fields: [
                      {
                        name: 'title',
                        type: 'string',
                        title: 'Title ',
                      },
                      {
                        name: 'description',
                        type: 'string',
                        title: 'Description ',
                      },
                      {
                        name: 'icon',
                        type: 'image',
                        title: '3 Cs Icon ',
                        description:'(Icon Should be: 68X68 pixels) , (Icon Image Size: 10 KB)',
                        options: {
                          hotspot: true
                        },
                      },
                ],
              },
            ],
          },
        
        ]
        
        }