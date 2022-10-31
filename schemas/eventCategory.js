export default {
  name: 'eventCategory',
  title: 'Event Category',
  type: 'document',
  fields: [
    {
      title: "Event Category Title",
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
    }
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
}
