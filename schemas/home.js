export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        title: 'SEO',
        description:
          'Search Engine Optimization allows to improve the ranking in search results.',
        name: 'seo',
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
                initialValue: 'Locavore NXT',
              },
            ],
          },
        ],
      },
      {
        name: 'component',
        title: "Slider Component",
        type: 'array',
        of: [
          {
            title: "Slider",
            name: "slider",
            type: 'object',
            fields: [
              {
                title: 'Text or Text Image',
                name: "option",
                type: 'boolean',
                initialValue: false,
              },
              {
                title: "Title",
                name: "title",
                type: "string",
                hidden: ({ parent }) => !(parent?.option === false),
              },
              {
                title: "Text Image",
                name: "textImage",
                type: "object",
                fields: [
                  {
                    title: "Image Desktop",
                    name: "imageDesktop",
                    type: "image",
                    validation: (Rule) => Rule.required(),
                  },
                  {
                    title: "Image Mobile",
                    name: "imageMobile",
                    type: "image",
                    validation: (Rule) => Rule.required(),
                  }
                ],
                hidden: ({ parent }) => !(parent?.option === true),
              },
              {
                title: "Background",
                name: "background",
                type: "image",
                validation: (Rule) => Rule.required(),
                fields: [
                  {
                    title: 'Edit Alt Text',
                    name: 'alt',
                    type: 'string',
                    initialValue: 'Morin',
                  },
                ],
              }
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
          }
        ]
      }
    ],
    preview: {
      prepare() {
        return {
          title: 'Home',
        }
      },
    },
  }
  