export default {
    name: 'ourPhilosophySection',
    type: 'object',
    title: 'Our Philosophy Section',
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
                        name: 'threeCsTitle',
                        type: 'string',
                        title: '3 Cs Title ',
                      },
                      {
                        name: 'threeCsDescription',
                        type: 'string',
                        title: '3 Cs Description ',
                      },
                      {
                        name: 'threeCsIcon',
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