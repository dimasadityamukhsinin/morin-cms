export default {
  name: 'decorList',
  title: 'Decor List',
  type: 'document',
  fields: [
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
      media: 'image',
    },
    prepare(selection) {
      const { media } = selection
      return {
        title: 'Decor',
        media: media,
      }
    },
  },
}
