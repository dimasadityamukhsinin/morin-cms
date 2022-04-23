export default {
    name: 'productType',
    title: 'Product Type',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: "Background",
        name: "background",
        type: "image",
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Description',
        name: 'description',
        type: 'string',
      },
      {
        title: 'Image 1',
        name: 'image1',
        type: 'image',
      },
      {
        title: 'Image 2',
        name: 'image2',
        type: 'image',
      },
      {
        title: 'Image 3',
        name: 'image3',
        type: 'image',
      },
      {
        name: 'animation',
        title: 'Animation',
        type: 'string',
        options: {
          list: [
            { title: '1', value: '1' },
            { title: '2', value: '2' },
            { title: '3', value: '3' }
          ],
          layout: 'radio',
        },
        initialValue: '1',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
  