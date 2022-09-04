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
      title: 'Set Header Color (Black/White)',
      name: 'langColor',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
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
