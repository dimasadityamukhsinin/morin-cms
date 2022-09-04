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
  