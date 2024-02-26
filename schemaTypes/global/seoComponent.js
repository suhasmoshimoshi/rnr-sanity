export default {
    name: 'seo',
    type: 'object',
    title: 'SEO Section',
    fields: [ 
      {
        name: 'seoTitle',
        type: 'string',
        title: 'SEO Title',
        validation: Rule => Rule.max(60).warning('Should be maximum 60 characters')
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
        validation: Rule => Rule.max(160).warning('Should be maximum 160 characters')
      },
      {
        name: 'url',
        type: 'string',
        title: 'URL',
        validation: Rule => Rule.max(255).warning('Should be maximum 255 characters')
      },
      {
        name: 'canonicalUrl',
        type: 'string',
        title: 'Canonical URL',
        validation: Rule => Rule.max(255).warning('Should be maximum 255 characters')
      }
    ]
  }
  