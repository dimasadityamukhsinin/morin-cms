export default {
  name: 'contactList',
  title: 'Contact List',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Company Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
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
}
