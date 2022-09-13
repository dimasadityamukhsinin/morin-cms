export default {
  name: 'decorList',
  title: 'Decor List',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "object",
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'image',
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
