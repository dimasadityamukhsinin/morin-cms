export default {
  name: 'home',
  title: 'Home',
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
      ]
    },
    {
      title: "Slider Component",
      name: "component",
      type: "object",
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
                      {title: 'Black', value: 'black'},
                      {title: 'White', value: 'white'}
                    ],
                    layout: 'radio'
                  },
                  initialValue: 'white',
                },
                {
                  title: "Custom Link",
                  name: "customLink",
                  type: "boolean",
                  initialValue: false,
                },
                {
                  title: "Link",
                  name: "link",
                  type: "url",
                  hidden: ({ parent }) => !(parent?.customLink === true),
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
                      {title: 'Black', value: 'black'},
                      {title: 'White', value: 'white'}
                    ],
                    layout: 'radio'
                  },
                  initialValue: 'white',
                },
                {
                  title: "Custom Link",
                  name: "customLink",
                  type: "boolean",
                  initialValue: false,
                },
                {
                  title: "Link",
                  name: "link",
                  type: "url",
                  hidden: ({ parent }) => !(parent?.customLink === true),
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
      ]
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Language',
      name: 'language',
      type: 'object',
      fields: [
        {
          title: 'Button Slider',
          name: 'btn_slider',
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
              initialValue: "Find Out More"
            },
          ],
        },
        {
          title: 'Button Product Type',
          name: 'btn_product_type',
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
              initialValue: "See All Products"
            },
          ],
        },
        {
          title: 'Recipe',
          name: 'recipe',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
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
                },
              ],
            },
            {
              title: 'Button',
              name: 'btn',
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
                  initialValue: "See All Recipes"
                },
              ],
            },
          ],
        },
        {
          title: 'Event',
          name: 'event',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
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
                },
              ],
            },
            {
              title: 'Button All',
              name: 'btn_all',
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
                  initialValue: "See All Events"
                },
              ],
            },
            {
              title: 'Button Card',
              name: 'btn_card',
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
                  initialValue: "See Events"
                },
              ],
            },
          ],
        },
        {
          title: "Instagram",
          name: "instagram",
          type: "object",
          fields: [
            {
              title: 'Title',
              name: 'title',
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
                },
              ],
            }
          ]
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
        title: 'Home',
      }
    },
  },
}
