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
      name: 'image_en',
      title: 'Image - EN',
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
      name: 'image_id',
      title: 'Image - ID',
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
      media: 'image_en',
    },
  },
}
