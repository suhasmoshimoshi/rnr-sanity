export default {
    name: 'meetTheLeaders',
    type: 'object',
    title: 'Meet the leaders Section',
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
     ] }