export default {
  name: 'productDetail',
  title: 'Product Detail',
  type: 'document',
  fields: [
    {
      title: "Language",
      name: "language",
      type: "object",
      fields: [
        {
          title: "Get This Product",
          name: "linkStore",
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
              initialValue: "Get This Product"
            },
          ],
        },
        {
          title: "Things you can make",
          name: "recipe",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
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
                  initialValue: "Get This Product"
                },
              ]
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
                  initialValue: "See All Recipes"
                },
              ]
            },
            {
              title: "Similar Products",
              name: "similar",
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
                  initialValue: "Similar Products"
                },
              ]
            },
          ],
        }
      ]
    },
    {
      title: 'Set Language Color (Black/White)',
      name: 'langColor',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Detail',
      }
    },
  },
}
