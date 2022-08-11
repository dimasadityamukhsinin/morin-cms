export default {
  name: 'productList',
  title: 'Product List',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Product Title - EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title_id',
      title: 'Product Title - ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'title_en',
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
      title: 'SEO - EN',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo_en',
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
      title: 'SEO - ID',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo_id',
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
      title: 'Product Type',
      name: 'type',
      type: 'reference',
      to: [{ type: 'productType' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Get This Product",
      name: "linkStore",
      type: 'reference',
      to: [{ type: 'shopifyData' }],
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
      title: 'Product Description - EN',
      name: 'description_en',
      type: 'text',
    },
    {
      title: 'Product Description - ID',
      name: 'description_id',
      type: 'text',
    },
    {
      name: 'thumbnail',
      description: 'A cover image for this product | PNG / JPEG / WEBP',
      title: 'Thumbnail',
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
      title: 'Thumbnail Fruit',
      name: 'thumbnailFruit',
      type: 'object',
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
          hidden: ({ parent }) => !(parent?.layout === '1'),
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
          title: 'Layout',
          name: 'layout',
          type: 'string',
          options: {
            list: [
              { title: '1', value: '1' },
              { title: '2', value: '2' },
              { title: '3', value: '3' },
              { title: '4', value: '4' },
            ],
            layout: 'radio',
          },
          initialValue: '1',
        },
      ],
    },
    {
      title: 'Decor Component - EN',
      name: 'decor_en',
      type: 'object',
      fields: [
        {
          title: 'Decor 1',
          name: 'decor1',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'decor2',
          title: 'Decor 2',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Decor Component - ID',
      name: 'decor_id',
      type: 'object',
      fields: [
        {
          title: 'Decor 1',
          name: 'decor1',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'decor2',
          title: 'Decor 2',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Weight',
      name: 'listWeight',
      type: 'array',
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
                  console.log(context.document.listWeight.filter(
                    (item) => item.defaultWeight,
                  ))
                  if(context.document.listWeight.filter(
                    (item) => item.defaultWeight,
                  ).length === 0) {
                    return "Required"
                  }else {
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
            },
            {
              title: 'Image',
              name: 'image',
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
          ],
        },
      ],
    },
    {
      title: 'Similar Products',
      name: 'similar',
      type: 'object',
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
      title: "Language",
      name: "language",
      type: "object",
      fields: [
        {
          title: "Get This Product",
          name: "linkStore",
          type: "object",
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
              initialValue: "Get This Product"
            },
          ],
        },
        {
          title: "Things you can make",
          name: "recipe",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "object",
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
                  initialValue: "Get This Product"
                },
              ]
            },
            {
              title: "Button",
              name: "btn",
              type: "object",
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
              ]
            },
            {
              title: "Similar Products",
              name: "similar",
              type: "object",
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
                  initialValue: "Similar Products"
                },
              ]
            },
          ],
        }
      ]
    },
    {
      title: 'Set Text Color',
      name: 'textColor',
      type: 'color',
    },
    {
      title: 'Set Background Color',
      name: 'backgroundColor',
      type: 'color',
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
      title: 'title_en',
      media: 'thumbnail',
    },
  },
}
