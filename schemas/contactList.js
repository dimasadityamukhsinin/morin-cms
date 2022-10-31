export default {
  name: 'contactList',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      title: "Contact Title",
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
      title: "Location Details",
      name: "description",
      type: "object",
      description: "All text below will be displayed on the location for this section.",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'editorBasic',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'ID',
          name: 'id',
          type: 'editorBasic',
          validation: (Rule) => Rule.required(),
        },
      ]
    },
    {
      title: 'Location Image',
      name: 'images',
      type: 'array',
      description: "Click Add Item to add an image located on the background slides of the Contact page. The file type is JPEG/WEBP and the recommended size is 1100 x 720 pixels.",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'image',
          title: 'Image',
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
      ],
    },
    {
        title: "Google Maps Link for See Maps Button",
        name: "maps",
        type: "url",
        description: "Leave blank to hide the button"
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
