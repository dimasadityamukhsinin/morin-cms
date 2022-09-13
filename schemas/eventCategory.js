export default {
  name: 'eventCategory',
  title: 'Event Category',
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
        },
        {
          title: 'ID',
          name: 'id',
          type: 'string',
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
