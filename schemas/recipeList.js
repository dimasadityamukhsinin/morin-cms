import client from 'part:@sanity/base/client'

export default {
  name: 'recipeList',
  title: 'Recipe List',
  type: 'document',
  fields: [
    {
      title: 'Recipe Title',
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
      name: 'recipeCategory',
      title: 'Recipe Category',
      type: 'array',
      description: "The categories added for this recipe will be displayed on the thumbnails in the lists of recipe.",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'category',
          title: 'Category',
          type: 'reference',
          validation: (Rule) =>
            Rule.custom(async (value, ctx) => {
              if (ctx.parent[ctx.parent.length - 1]._ref) {
                let data = await client.fetch(`*[_type == "recipeTitle"&& !(_id in path("drafts.**"))] {
                  ...,
                  data[]->
                }`)
                let recipeData = ctx.parent.map((items) => {
                  let dataFilter = data.filter((item) => {
                    if (item.data.find((e) => e._id === items._ref)) {
                      return {
                        ...item,
                        data: item.data.find((e) => e._id === items._ref),
                      }
                    }
                  })
                  return {
                    ...dataFilter[0],
                  }
                })

                if (
                  recipeData.filter((e) =>
                    e.data.find((item) => item._id === value._ref),
                  ).length > 1
                ) {
                  return 'Recipe Category Already Exists'
                } else {
                  return true
                }
              } else {
                return true
              }
            }),
          to: [
            {
              type: 'recipeData',
            },
          ],
        },
      ],
    },
    {
      title: 'Recipe Ingredients',
      name: 'ingredient',
      type: 'object',
      description: "Add Item below to add ingredients for this recipe",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              title: 'Ingredient',
              name: 'ingredient',
              type: 'object',
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'boolean',
                  description: "Enable this button to make this a title.",
                  initialValue: false,
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'string',
                  description: "All text below will be displayed in the ingredient section",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
        {
          name: 'id',
          title: 'ID',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              title: 'Ingredient',
              name: 'ingredient',
              type: 'object',
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'boolean',
                  description: "Enable this button to make this a title.",
                  initialValue: false,
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'string',
                  description: "All text below will be displayed in the ingredient section",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Made With',
      name: 'made',
      type: 'array',
      description: "The items added will be displayed the recipe page and be clicked to be directed to the product’s page.",
      validation: (Rule) => Rule.max(2),
      of: [
        {
          title: 'Product',
          name: 'product',
          type: 'reference',
          to: [{ type: 'productList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Recipe Description',
      name: 'description',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'editorBasic',
        },
        {
          title: 'ID',
          name: 'id',
          type: 'editorBasic',
        },
      ],
    },
    {
      name: 'thumbnail',
      description: 'Thumbnail on the Card in the Recipe landing page  I  Recommended size 600 x 750 pixels  I  PNG / JPEG',
      title: 'Recipe Thumbnail',
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
      name: 'cover',
      description: 'Picture on the Banner in the Recipe page I  Recommended size 1920 x 900 pixels  I  PNG / JPEG',
      title: 'Recipe Cover',
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
      title: 'Recipe Steps',
      name: 'steps',
      type: 'object',
      description: "The orders displayed in the recipe will follow the orders below.",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              title: 'Step',
              name: 'step',
              type: 'object',
              fields: [
                {
                  name: 'description',
                  title: 'Step Description',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'images',
                  title: 'Images',
                  type: 'array',
                  of: [
                    {
                      title: 'Image',
                      name: 'image',
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
          ],
        },
        {
          title: 'ID',
          name: 'id',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              title: 'Step',
              name: 'step',
              type: 'object',
              fields: [
                {
                  name: 'description',
                  title: 'Step Description',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'images',
                  title: 'Images',
                  type: 'array',
                  of: [
                    {
                      title: 'Image',
                      name: 'image',
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
          ],
        },
      ],
    },
    {
      title: 'Recipe Gallery',
      name: 'gallery',
      type: 'array',
      description: "List of image for the Recipe page I  Recommended size 1500 x 900 pixels  I  PNG / JPEG",
      of: [
        {
          name: 'image',
          title: 'Gallery Image',
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
          title: 'Video',
          name: 'video',
          type: 'object',
          fields: [
            {
              name: 'thumbnail',
              title: 'Thumbnail',
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
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
          preview: {
            select: {
              media: 'thumbnail',
            },
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Recipe Recommendation (You may also like)',
      name: 'related',
      type: 'object',
      description: "Enable this button to set the recommended recipes manually or automatically.",
      fields: [
        {
          title: 'Manual / Auto',
          name: 'option',
          type: 'boolean',
          initialValue: false,
        },
        {
          title: 'Manual',
          name: 'manual',
          type: 'array',
          hidden: ({ parent }) => !(parent?.option === false),
          of: [
            {
              title: 'Recipes',
              name: 'recipes',
              type: 'reference',
              to: [{ type: 'recipeList' }],
            },
          ],
        },
      ],
    },
    {
      title: 'Set Background Color',
      name: 'backgroundColor',
      type: 'color',
      description: "Customize the background color of the recipe page. Please refer to the documentation for the proper color pairing. Ensure the text color and background color has enough contrast for legibility."
    },
    {
      title: 'Set Text Color',
      name: 'textColor',
      type: 'color',
      description: "Customize the text color of the recipe page. Please refer to the documentation for the proper color pairing. Ensure the text color and background color has enough contrast for legibility.",
    },
    {
      title: 'Set Header & Menu Button Color',
      name: 'titleColor',
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
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  initialValue: async () => ({
    date: new Date().toISOString().slice(0, 10),
  }),
  preview: {
    select: {
      title: 'title.en',
      media: 'thumbnail',
    },
  },
}
