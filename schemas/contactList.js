export default {
  name: 'contactList',
  title: 'Contact List',
  type: 'document',
  fields: [
    {
      title: 'Title - EN',
      name: 'title_en',
      type: 'string',
    },
    {
      title: 'Title - ID',
      name: 'title_id',
      type: 'string',
    },
    {
      title: 'Company Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description - EN',
      name: 'description_en',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          marks: {
            decorators: [],
            annotations: [],
          },
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      title: 'Description - ID',
      name: 'description_id',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          marks: {
            decorators: [],
            annotations: [],
          },
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
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
    }
  ],
  preview: {
    select: {
      title: "title_en",
    },
  },
}
