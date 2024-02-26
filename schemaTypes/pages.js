export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [ 
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name'
    },
    {
      name: 'seoComponent',
      type: 'seo',
      title: 'SEO Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'bannerComponent',
      type: 'banner',
      title: 'Banner Section',
      options: {
        collapsible: true,
        collapsed: true,
        
      }
    },
    {
      name: 'meetTheLeadersComponent',
      type: 'meetTheLeaders',
      title: 'Meet the Leaders Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'boardMembersManagementSection',
      type: 'bmms',
      title: 'Board members & Management Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'ourPhilosophySection',
      type: 'ourPhilosophySection',
      title: 'Our Philosophy Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'ourValueSystemSection',
      type: 'ourValueSystemSection',
      title: 'Our Value System Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    } ,
    
    {
      name: 'ourAspirationsSection',
      type: 'ourAspirationsSection',
      title: 'Our Aspirations Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    } ,
    {
      name: 'ourSubscibersLoveUsSection',
      type: 'ourSubscibersLoveUsSection',
      title: 'Our Subscibers love us Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
    ,
    {
      name: 'brandfilmsSection',
      type: 'brandfilmsSection',
      title: 'Brand films Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],

}

    //   {
    //     name: 'sebiRegistrationComponent',
    //     type: 'sebi',
    //     title: 'SEBI Registered Section'
    //   },
    //   {
    //     name: 'productCarouselComponent',
    //     type: 'productCarousel',
    //     title: 'Product Carousel Section',
    //   }