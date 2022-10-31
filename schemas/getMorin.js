export default {
  name: 'getMorin',
  title: 'Get Morin',
  type: 'document',
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      fields: [
        {
          title: 'EN',
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
      title: "Shop Button",
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
          validation: (Rule) => Rule.required(),
        },
      ]
    },
    {
      title: 'Contents',
      name: 'Shops',
      type: 'array',
      description: "Online and offline list of the marketplace. Click to edit each section and Add Item to make new. ",
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
                      title: 'Shop Entries',
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
                              description: "The file type is PNG/WEBP/SVG and the recommended size is 400 x 200 pixels.",
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Get Morin',
      }
    },
  },
}
