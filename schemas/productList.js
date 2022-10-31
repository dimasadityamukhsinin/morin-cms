export default {
  name: 'productList',
  title: 'Product List',
  type: 'document',
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
      title: 'Product Type',
      name: 'type',
      type: 'string',
      hidden: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
          if (slug) {
            if (slug.current.match(regex) !== null) {
              return true
            } else {
              return 'Not a valid slug'
            }
          } else {
            return 'Required'
          }
        }),
    },
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
                'Enter up to 400 characters to describe this article. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe this article (separated by commas)',
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
          name: 'id',
          type: 'object',
          options: {
            collapsible: true,
          },
          fields: [
            {
              name: 'seo_description',
              description:
                'Enter up to 400 characters to describe this article. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe this article (separated by commas)',
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
      title: 'Get this Product',
      name: 'getProduct',
      type: 'object',
      description: "Button to show where to get or purchase the related product. Toggle the Custom link to set the button to an external link. Leave Blank to hide the button.",
      fields: [
        {
          title: 'Custom Link',
          name: 'custom_link',
          type: 'boolean',
          initialValue: false,
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Internal Shop Product Page',
          name: 'linkStore',
          type: 'reference',
          to: [{ type: 'shopifyData' }],
          hidden: ({ parent }) => !!parent.custom_link,
        },
        {
          title: 'External Product Page Link',
          name: 'linkProduct',
          type: 'url',
          hidden: ({ parent }) => !parent.custom_link,
        },
      ],
    },
    {
      title: 'Recipes',
      name: 'recipes',
      type: 'array',
      of: [
        {
          title: 'Recipe',
          name: 'type',
          type: 'reference',
          to: [{ type: 'recipeList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Product Description',
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
    {
      name: 'thumbnail',
      description: 'Image on the Card on the Product page  I  Recommended Size 530 x 600 pixels  I  PNG / WEBP',
      title: 'Product Card Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
          initialValue: 'Morin',
        },
      ],
    },
    {
      title: 'Product Card Decorative Elements for Thumbnail',
      name: 'thumbnailFruit',
      type: 'object',
      description: "Fruit pictures on the background Thumbnail of Product  I  Recommended Size 430 x 270 pixels  I  PNG / WEBP",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Fruit 1',
          name: 'fruit1',
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
        {
          title: 'Fruit 2',
          name: 'fruit2',
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
        {
          title: 'Fruit 3',
          name: 'fruit3',
          type: 'image',
          hidden: ({ parent }) =>
            !(parent?.layout === '3' || parent?.layout === '4'),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
              initialValue: 'Morin',
            },
          ],
        },
        {
          title: 'Product Decorative Element Layouts',
          name: 'layout',
          type: 'string',
          description: "Placings for each decorative when it is displayed on the Product Card Thumbnail.",
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              { title: 'Layout 1 - 3 Fruits', value: '1' },
              { title: 'Layout 2 - 3 Fruits', value: '2' },
              { title: 'Layout 3 - 2 Fruits', value: '3' },
              { title: 'Layout 4 - 2 Fruits', value: '4' },
            ],
            layout: 'radio',
          },
          initialValue: '1',
        },
      ],
    },
    {
      title: 'Product Decoration Component',
      name: 'decor',
      type: 'object',
      fields: [
        {
          title: 'Left Decoration',
          name: 'decor1',
          type: 'reference',
          description: "The decoration for the left side of the landing page",
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'decor2',
          title: 'Right Decoration',
          type: 'reference',
          description: "The decoration for the right side of the landing page",
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Product Weight',
      name: 'listWeight',
      type: 'array',
      description: "Every entry listed will be displayed as options on the product page on the website.",
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Weight',
          name: 'weight',
          type: 'object',
          fields: [
            {
              title: 'Default Weight',
              name: 'defaultWeight',
              type: 'boolean',
              initialValue: false,
              validation: (Rule) =>
                Rule.required().custom((field, context) => {
                  if (
                    context.document.listWeight.filter(
                      (item) => item.defaultWeight,
                    ).length === 0
                  ) {
                    return 'Required'
                  } else {
                    if (
                      context.document.listWeight.filter(
                        (item) => item.defaultWeight,
                      ).length > 1
                    ) {
                      return 'The default weight has been selected'
                    } else {
                      return true
                    }
                  }
                }),
            },
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              validation: (Rule) => [
                Rule.custom((value) => {
                  return value && value.asset
                    ? true
                    : {
                        message: 'Required',
                      }
                }),
              ],
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
      title: 'Product Recommendation (Similar Products)',
      name: 'similar',
      type: 'object',
      description: "Enable this button to set the recommended products manual or automatically.",
      fields: [
        {
          title: 'Manual / Auto',
          name: 'option',
          type: 'boolean',
          initialValue: true,
        },
        {
          title: 'Manual',
          name: 'manual',
          type: 'array',
          hidden: ({ parent }) => !(parent?.option === false),
          of: [
            {
              title: 'Product',
              name: 'products',
              type: 'reference',
              to: [{ type: 'productList' }],
            },
          ],
        },
      ],
    },
    {
      title: 'Set Text Color',
      name: 'textColor',
      type: 'color',
      description: "Customize the text color of the product page Please refer to the documentation for the proper color pairing. Ensure the text color and background color has enough contrast for legibility."
    },
    {
      title: 'Set Background Color',
      name: 'backgroundColor',
      type: 'color',
      description: "Customize the background color of the product page. Please refer to the documentation for the proper color pairing. Ensure the text color and background color has enough contrast for legibility."
    },
    {
      title: 'Set Header & Menu Button Color',
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
      title: 'Date Published',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
  ],
  initialValue: async () => ({
    date: new Date().toISOString().slice(0, 10),
  }),
  preview: {
    select: {
      title: 'title.en',
      media: 'thumbnail',
      type: 'type',
    },
    prepare(selection) {
      const { title, media, type } = selection
      return {
        title: `${title}${type ? ` - ${type}` : ''}`,
        media: media,
      }
    },
  },
}
