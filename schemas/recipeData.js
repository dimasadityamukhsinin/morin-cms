export default {
  name: 'recipeData',
  title: 'Recipe Data',
  type: 'document',
  fields: [
    {
      title: 'Title - EN',
      name: 'title_en',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title - ID',
      name: 'title_id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'recipeTitle',
      title: 'Recipe Title',
      type: 'reference',
      to: [{ type: 'recipeTitle' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title_en',
    },
  },
}
