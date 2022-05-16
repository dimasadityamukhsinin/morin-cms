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
      name: 'image',
      title: 'Image',
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
  ],
  preview: {
    select: {
      title: "title",
      media: 'image',
    },
  },
}
