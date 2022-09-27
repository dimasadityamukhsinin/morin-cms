export default {
  name: 'recipeTitle',
  title: 'Recipe Category',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "object",
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
      ]
    },
    {
      title: 'Data',
      name: 'data',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'recipeData' }],
        },
      ],
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
      title: 'title.en',
    },
  },
}
