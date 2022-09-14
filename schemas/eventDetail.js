export default {
  name: 'eventDetail',
  title: 'Event Page',
  type: 'document',
  fields: [
    {
      title: 'Language',
      name: 'language',
      type: 'object',
      fields: [
        {
          title: 'Other Events',
          name: 'event',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'object',
              fields: [
                {
                  title: 'ID',
                  name: 'id',
                  type: 'string',
                },
                {
                  title: 'EN',
                  name: 'en',
                  type: 'string',
                  initialValue: 'Other Events',
                },
              ],
            },
            {
              title: "Button",
              name: "btn",
              type: "object",
              fields: [
                {
                  title: 'ID',
                  name: 'id',
                  type: 'string',
                },
                {
                  title: 'EN',
                  name: 'en',
                  type: 'string',
                  initialValue: 'See event',
                },
              ]
            }
          ],
        },
      ],
    },
    {
      title: 'Set Header Color',
      name: 'langColor',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'}
        ],
        layout: 'radio'
      },
      initialValue: 'white',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Event Page',
      }
    },
  },
}
