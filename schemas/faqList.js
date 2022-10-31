export default {
  name: 'faqList',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      title: "Question",
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
      title: "Answer",
      name: "description",
      type: "object",
      validation: (Rule) => Rule.required(),
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
      title: 'Answer Background Color',
      name: 'option',
      type: 'string',
      options: {
        list: [
          {title: 'Light Blue', value: 'light_blue'},
          {title: 'Dark Blue', value: 'dark_blue'}
        ],
        layout: 'radio'
      },
      initialValue: 'light_blue',
    },
  ],
  preview: {
    select: {
      title: 'title.en'
    },
  },
}
