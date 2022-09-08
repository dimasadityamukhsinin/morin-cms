export default {
    name: 'recipeTitle',
    title: 'Recipe Title',
    type: 'document',
    fields: [
        {
          name: 'title_en',
          title: 'Recipe Title - EN',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title_id',
          title: 'Recipe Title - ID',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
      select: {
        title: 'title_en',
      },
    },
  }
  