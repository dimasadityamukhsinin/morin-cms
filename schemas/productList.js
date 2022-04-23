export default {
  name: 'productList',
  title: 'Product List',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
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
        source: 'title',
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
      type: 'blockContent',
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
      title: 'Background Component',
      name: 'background',
      type: 'object',
      fields: [
        {
          name: 'background1',
          title: 'Background Clean',
          type: 'image',
        },
        {
          name: 'background2',
          title: 'Background Blur 1',
          type: 'image',
        },
        {
          name: 'background3',
          title: 'Background Blur 2',
          type: 'image',
        },
      ],
    },
    {
      title: 'Decor Component',
      name: 'decor',
      type: 'object',
      fields: [
        {
          name: 'decor1',
          title: 'Decor 1',
          type: 'image',
        },
        {
          name: 'decor2',
          title: 'Decor 2',
          type: 'image',
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
              title: 'Title',
              name: 'title',
              type: 'string',
            },
          ],
        },
      ],
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
      title: 'title',
      media: 'thumbnail',
    },
  },
}
