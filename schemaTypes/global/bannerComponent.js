export default {
    name: 'banner',
    type: 'object',
    title: 'Banner Section',
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
        name: 'variableText',
        type: 'string',
        title: 'Variable Text',
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
        name: 'leadFromTitle',
        type: 'string',
        title: 'Lead Form Title',
      },
      {
        name: 'checkBoxForm',
        type: 'object',
        title: 'Check Box Form',
       
        fields: [
              {
                name: 'fullName',
                type: 'boolean',
                title: 'Full Name',
        
              },
              {
                name: 'emailAddress',
                type: 'boolean',
                title: 'Email Address',
    
              },
              {
                name: 'phoneNumber',
                type: 'boolean',
                title: 'Phone Number',

              },
        ],
      }
   
    ]
  }
  