export default {
  name: 'getMorin',
  title: 'Get Morin',
  type: 'document',
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
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
      ],
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
      title: 'Contents',
      name: 'Shops',
      type: 'array',
      of: [
        {
          title: 'Content',
          name: 'shop',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'object',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  name: 'en',
                  title: 'EN',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'id',
                  title: 'ID',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              title: 'Contents',
              name: 'contents',
              type: 'array',
              of: [
                {
                  title: 'Content',
                  name: 'content',
                  type: 'object',
                  fields: [
                    {
                      title: 'Title',
                      name: 'title',
                      type: 'object',
                      validation: (Rule) => Rule.required(),
                      fields: [
                        {
                          name: 'en',
                          title: 'EN',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        },
                        {
                          name: 'id',
                          title: 'ID',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        },
                      ],
                    },
                    {
                      title: 'Option',
                      name: 'option',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                      options: {
                        list: [
                          { title: 'Link', value: 'link' },
                          { title: 'Text', value: 'text' },
                        ],
                        layout: 'radio',
                      },
                      initialValue: 'link',
                    },
                    {
                      title: 'Links',
                      name: 'links',
                      type: 'array',
                      hidden: ({ parent }) => !(parent?.option === 'link'),
                      of: [
                        {
                          title: 'Link',
                          name: 'link',
                          type: 'object',
                          validation: (Rule) => Rule.required(),
                          fields: [
                            {
                              title: 'Title',
                              name: 'title',
                              type: 'string',
                              validation: (Rule) => Rule.required(),
                            },
                            {
                              name: 'image',
                              title: 'Image',
                              type: 'image',
                              validation: (Rule) => Rule.required(),
                              fields: [
                                {
                                  title: 'Edit Alt Text',
                                  name: 'alt',
                                  type: 'string',
                                  initialValue: 'Morin',
                                },
                              ],
                            },
                            {
                              title: 'URL',
                              name: 'url',
                              type: 'url',
                            },
                          ],
                          preview: {
                            select: {
                              title: 'title',
                            },
                          },
                        },
                      ],
                    },        
                    {
                      title: 'Texts',
                      name: 'texts',
                      type: 'array',
                      hidden: ({ parent }) => !(parent?.option === 'text'),
                      of: [
                        {
                          title: 'Text',
                          name: 'getText',
                          type: 'object',
                          fields: [
                            {
                              title: "Title",
                              name: "title",
                              type: "object",
                              fields: [
                                {
                                  title: 'EN',
                                  name: 'en',
                                  type: 'string',
                                  validation: (Rule) => Rule.required(),
                                },
                                {
                                  title: 'ID',
                                  name: 'id',
                                  type: 'string',
                                  validation: (Rule) => Rule.required(),
                                },
                              ]
                            },
                            {
                              title: 'Description',
                              name: 'description',
                              type: 'editorBasic',
                              validation: (Rule) => Rule.required(),
                            },
                          ],
                          preview: {
                            select: {
                              title: 'title.en',
                            },
                          },
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: {
                      title: 'title.en',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title.en',
            },
          },
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Get Morin',
      }
    },
  },
}
