export default {
  name: 'decorList',
  title: 'Decor List',
  type: 'document',
  fields: [
    {
      title: "Decoration Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Decoration Image",
      name: "image",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Morin',
            },
          ],
        },
        {
          name: 'id',
          title: 'ID',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Morin',
            },
          ],
        },
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      media: 'image.en',
    },
  },
}
