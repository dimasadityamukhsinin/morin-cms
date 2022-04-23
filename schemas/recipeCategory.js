export default {
  name: 'recipeCategory',
  title: 'Recipe Category',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
