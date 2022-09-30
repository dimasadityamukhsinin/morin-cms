export default {
  name: 'translation',
  title: 'Translation',
  type: 'document',
  fields: [
    {
      title: 'Menu Language',
      name: 'menu_lang',
      type: 'object',
      fields: [
        {
          title: 'Home',
          name: 'home',
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
              initialValue: 'Home',
            },
          ],
        },
        {
          title: 'About',
          name: 'about',
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
              initialValue: 'About Us',
            },
          ],
        },
        {
          title: 'Products',
          name: 'products',
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
              initialValue: 'Products',
            },
          ],
        },
        {
          title: 'Recipes',
          name: 'recipes',
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
              initialValue: 'Recipes',
            },
          ],
        },
        {
          title: 'Events',
          name: 'events',
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
              initialValue: 'Events',
            },
          ],
        },
        {
          title: 'Get Morin',
          name: 'get_morin',
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
              initialValue: 'Get Morin',
            },
          ],
        },
        {
          title: 'FAQ',
          name: 'faq',
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
              initialValue: 'FAQ',
            },
          ],
        },
        {
          title: 'Contact',
          name: 'contact',
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
              initialValue: 'Contact Us',
            },
          ],
        },
      ],
    },
    {
      title: 'Product Page Language',
      name: 'productLanguage',
      type: 'object',
      fields: [
        {
          title: 'Get This Product',
          name: 'linkStore',
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
              initialValue: 'Get This Product',
            },
          ],
        },
        {
          title: 'Things you can make',
          name: 'recipe',
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
                  initialValue: 'Get This Product',
                },
              ],
            },
            {
              title: 'Button',
              name: 'btn',
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
                  initialValue: 'See All Recipes',
                },
              ],
            },
          ],
        },
        {
          title: 'Similar Products',
          name: 'similar',
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
              initialValue: 'Similar Products',
            },
          ],
        },
      ],
    },
    {
      title: 'Event Page Language',
      name: 'eventLanguage',
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
              title: 'Button',
              name: 'btn',
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
                  initialValue: 'See event',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Recipe Page Language',
      name: 'recipeLanguage',
      type: 'object',
      fields: [
        {
          title: 'Ingredients',
          name: 'ingredients',
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
              initialValue: 'Ingredients',
            },
          ],
        },
        {
          title: 'Made With',
          name: 'made_with',
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
              initialValue: 'Made With',
            },
          ],
        },
        {
          title: 'Instructions',
          name: 'instructions',
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
              initialValue: 'Instructions',
            },
          ],
        },
        {
          title: 'Share',
          name: 'share',
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
              initialValue: 'Share',
            },
          ],
        },
        {
          title: 'You may also like',
          name: 'related',
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
                  initialValue: 'You may also like..',
                },
              ],
            },
            {
              title: 'Button',
              name: 'btn',
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
                  initialValue: 'See All Recipes',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Subscription Language',
      name: 'sub_language',
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
            },
          ],
        },
        {
          title: 'Sub Title',
          name: 'sub_title',
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
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Translation',
      }
    },
  },
}
