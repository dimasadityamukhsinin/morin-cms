export default {
  name: 'getMorin',
  title: 'Get Morin',
  type: 'document',
  fields: [
    {
      title: "SEO",
      name: "seo",
      type: "object",
      fields: [
        {
          title: 'EN',
          description:
            'Search Engine Optimization allows to improve the ranking in search results.',
          name: 'en',
          type: 'object',
          options: {
            collapsible: true,
          },
          fields: [
            {
              name: 'seo_description',
              description:
                'Enter up to 400 characters to describe the Homepage. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe the Homepage (separated by commas)',
              type: 'string',
              title: 'Keywords',
            },
            {
              name: 'seo_image',
              title: 'Image',
              description:
                '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
              type: 'image',
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'alt',
                  type: 'string',
                  initialValue: 'Morin',
                },
              ],
            },
          ],
        },
        {
          title: 'ID',
          description:
            'Search Engine Optimization allows to improve the ranking in search results.',
          name: 'id',
          type: 'object',
          options: {
            collapsible: true,
          },
          fields: [
            {
              name: 'seo_description',
              description:
                'Enter up to 400 characters to describe the Homepage. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe the Homepage (separated by commas)',
              type: 'string',
              title: 'Keywords',
            },
            {
              name: 'seo_image',
              title: 'Image',
              description:
                '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
              type: 'image',
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'alt',
                  type: 'string',
                  initialValue: 'Morin',
                },
              ],
            },
          ],
        },
      ]
    },
    {
      title: "Shop",
      name: "shop",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Link",
          name: "link",
          type: "url",
        },
      ]
    },
    {
      title: 'Shop Online',
      name: 'shopOnline',
      type: 'array',
      of: [
        {
          title: 'Online Martketplace',
          name: 'onlineMarketPlace',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'alt',
                  type: 'string',
                  initialValue: 'Morin',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Shop Offline',
      name: 'shopOffline',
      type: 'object',
      fields: [
        {
          title: 'Major Distributors',
          name: 'majorDistributors',
          type: 'array',
          of: [
            {
              title: 'Distributor',
              name: 'distributor',
              type: 'object',
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Link',
                  name: 'link',
                  type: 'url',
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  fields: [
                    {
                      title: 'Edit Alt Text',
                      name: 'alt',
                      type: 'string',
                      initialValue: 'Morin',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Retailers',
          name: 'retailers',
          type: 'array',
          of: [
            {
              title: 'Retail',
              name: 'retail',
              type: 'object',
              fields: [
                {
                  title: 'Title - EN',
                  name: 'title_en',
                  type: 'string',
                },
                {
                  title: 'Title - ID',
                  name: 'title_id',
                  type: 'string',
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'editorBasic',
                },
              ],
              preview: {
                select: {
                  title: 'title_en',
                },
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Language',
      name: 'language',
      type: 'object',
      fields: [
        {
          title: 'Shop Online',
          name: 'shop_online',
          type: 'object',
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'Shop Online',
            },
          ],
        },
        {
          title: 'Shop Offline',
          name: 'shop_offline',
          type: 'object',
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'Shop Offline',
            },
          ],
        },
        {
          title: 'Marketplace',
          name: 'marketplace',
          type: 'object',
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'Online Marketplace',
            },
          ],
        },
        {
          title: 'Distributor',
          name: 'distributor',
          type: 'object',
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'Major Distributors',
            },
          ],
        },
        {
          title: 'Retail',
          name: 'retail',
          type: 'object',
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'Retailers',
            },
          ],
        },
      ],
    },
    {
      title: 'Set Header Color',
      name: 'langColor',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'}
        ],
        layout: 'radio'
      },
      initialValue: 'white',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Get Morin',
      }
    },
  },
}
