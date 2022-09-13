export default {
  name: 'faqList',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "object",
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
      title: "Description",
      name: "description",
      type: "object",
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
      ]
    },
    {
      title: 'Background Dark Blue',
      name: 'option',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title.en'
    },
  },
}
