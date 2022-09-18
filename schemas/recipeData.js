import client from 'part:@sanity/base/client'

export default {
  name: 'recipeData',
  title: 'Category Data',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'ID',
          name: 'id',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ]
    },
    {
      title: 'Recipe Title',
      name: 'type',
      type: 'string',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      type: 'type',
    },
    prepare(selection) {
      const { title, type } = selection
      return {
        title: `${title}${type ? ` - ${type}` : ''}`,
      }
    },
  },
}

