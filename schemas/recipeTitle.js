export default {
    name: 'recipeTitle',
    title: 'Category Title',
    type: 'document',
    fields: [
        {
          name: 'title_en',
          title: 'Category Title - EN',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title_id',
          title: 'Category Title - ID',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Data",
          name: "data",
          type: "array",
          of: [
            {
              type: 'reference',
              to: { type: 'recipeData' },
              validation: (Rule) => Rule.required(),
            },
          ]
        },
        {
          name: 'order',
          title: 'Order',
          type: 'number',
          hidden: true,
        },
    ],
    preview: {
      select: {
        title: 'title_en',
      },
    },
  }
  