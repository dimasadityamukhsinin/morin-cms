export default {
  name: 'home',
  title: 'Home',
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
                  name: 'name',
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
                  name: 'name',
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
      title: 'Slider Component',
      name: 'component',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'array',
          of: [
            {
              title: 'Slider',
              name: 'slider',
              type: 'object',
              fields: [
                {
                  title: 'Text or Text Image',
                  name: 'option',
                  type: 'boolean',
                  initialValue: false,
                },
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                  hidden: ({ parent }) => !(parent?.option === false),
                },
                {
                  title: 'Text Image',
                  name: 'textImage',
                  type: 'object',
                  fields: [
                    {
                      title: 'Image Desktop',
                      name: 'imageDesktop',
                      type: 'image',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Image Mobile',
                      name: 'imageMobile',
                      type: 'image',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  hidden: ({ parent }) => !(parent?.option === true),
                },
                {
                  title: 'Background',
                  name: 'background',
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
                  title: 'Set Header Color',
                  name: 'langColor',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                  options: {
                    list: [
                      { title: 'Black', value: 'black' },
                      { title: 'White', value: 'white' },
                    ],
                    layout: 'radio',
                  },
                  initialValue: 'white',
                },
                {
                  title: 'Button',
                  name: 'button',
                  type: 'object',
                  fields: [
                    {
                      title: 'Title',
                      name: 'title',
                      type: 'string',
                      initialValue: 'Find Out More',
                    },
                    {
                      title: 'Custom Link',
                      name: 'customLink',
                      type: 'boolean',
                      initialValue: false,
                    },
                    {
                      title: 'Link',
                      name: 'link',
                      type: 'url',
                      hidden: ({ parent }) => !(parent?.customLink === true),
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  media: 'background',
                },
                prepare(selection) {
                  const { media } = selection
                  return {
                    title: 'Home Slider',
                    media: media,
                  }
                },
              },
            },
          ],
        },
        {
          name: 'id',
          title: 'ID',
          type: 'array',
          of: [
            {
              title: 'Slider',
              name: 'slider',
              type: 'object',
              fields: [
                {
                  title: 'Text or Text Image',
                  name: 'option',
                  type: 'boolean',
                  initialValue: false,
                },
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                  hidden: ({ parent }) => !(parent?.option === false),
                },
                {
                  title: 'Text Image',
                  name: 'textImage',
                  type: 'object',
                  fields: [
                    {
                      title: 'Image Desktop',
                      name: 'imageDesktop',
                      type: 'image',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Image Mobile',
                      name: 'imageMobile',
                      type: 'image',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  hidden: ({ parent }) => !(parent?.option === true),
                },
                {
                  title: 'Background',
                  name: 'background',
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
                  title: 'Set Header Color',
                  name: 'langColor',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                  options: {
                    list: [
                      { title: 'Black', value: 'black' },
                      { title: 'White', value: 'white' },
                    ],
                    layout: 'radio',
                  },
                  initialValue: 'white',
                },
                {
                  title: 'Button',
                  name: 'button',
                  type: 'object',
                  fields: [
                    {
                      title: 'Title',
                      name: 'title',
                      type: 'object',
                      fields: [
                        {
                          title: 'EN',
                          name: 'en',
                          type: 'string',
                          initialValue: 'Find Out More',
                        },
                        {
                          title: 'ID',
                          name: 'id',
                          type: 'string',
                          initialValue: 'Temukan Lebih Banyak Lagi',
                        },
                      ],
                    },
                    {
                      title: 'Custom Link',
                      name: 'customLink',
                      type: 'boolean',
                      initialValue: false,
                    },
                    {
                      title: 'Link',
                      name: 'link',
                      type: 'url',
                      hidden: ({ parent }) => !(parent?.customLink === true),
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  media: 'background',
                },
                prepare(selection) {
                  const { media } = selection
                  return {
                    title: 'Home Slider',
                    media: media,
                  }
                },
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Product',
      name: 'product',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Button',
          name: 'button',
          type: 'object',
          validation: (Rule) => Rule.required(),
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
          ],
        },
        {
          title: 'Icons',
          name: 'icons',
          type: 'array',
          of: [
            {
              title: 'Icon',
              name: 'icon',
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
                  title: 'Icon',
                  name: 'icon',
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
              ],
            },
          ],
        },
        {
          title: 'Description',
          name: 'description',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'EN',
              name: 'en',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'ID',
              name: 'id',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: 'Recipe',
      name: 'recipe',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'object',
          validation: (Rule) => Rule.required(),
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
          ],
        },
        {
          title: 'Button',
          name: 'button',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'See All Recipes',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'ID',
              name: 'id',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          title: 'Description',
          name: 'description',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'EN',
              name: 'en',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'ID',
              name: 'id',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: 'Event',
      name: 'event',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'object',
          validation: (Rule) => Rule.required(),
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
          ],
        },
        {
          title: 'Button All',
          name: 'btn_all',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'See All Events',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          title: 'Button Card',
          name: 'btn_card',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'See Events',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'object',
          validation: (Rule) => Rule.required(),
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
          ],
        },
        {
          title: 'Button',
          name: 'button',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'URL',
          name: 'url',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Elfsight ID',
          name: 'elfsightID',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
}
