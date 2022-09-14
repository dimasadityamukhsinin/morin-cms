export default {
  name: 'contactList',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      title: "Title",
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
      title: "Description",
      name: "description",
      type: "object",
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'editorBasic',
        },
        {
          title: 'ID',
          name: 'id',
          type: 'editorBasic',
        },
      ]
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
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
    },
    {
        title: "Maps",
        name: "maps",
        type: "url",
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
}
