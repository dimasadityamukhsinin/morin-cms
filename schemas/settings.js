export default {
  name: 'settings',
  title: 'General Settings',
  type: 'document',
  initialValue: () => ({
    webTitle: 'Morin',
  }),
  fields: [
    {
      name: 'webTitle',
      title: 'Website Title',
      type: 'string',
      description: "Title will be shown on the browser tab along side other general and meta purposes.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Default SEO Metadata",
      name: "seo",
      type: "object",
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
        validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'object',
          options: {
            collapsible: true,
          },
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'seo_description',
              description:
                'Enter up to 400 characters to describe this website. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe this website (separated by commas)',
              type: 'string',
              title: 'Keywords',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'seo_image',
              title: 'Image',
              description:
                '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
              type: 'image',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'name',
                  type: 'string',
                  initialValue: 'Morin',
                },
              ],
            },
          ],
        },
        {
          title: 'ID',
          name: 'id',
          type: 'object',
          options: {
            collapsible: true,
          },
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'seo_description',
              description:
                'Enter up to 400 characters to describe this website. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe this website (separated by commas)',
              type: 'string',
              title: 'Keywords',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'seo_image',
              title: 'Image',
              description:
                '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
              type: 'image',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'name',
                  type: 'string',
                  initialValue: 'Morin',
                },
              ],
            },
          ],
        },
      ]
    },
    {
      title: "Analytics",
      name: "analytics",
      type: "object",
      fields: [
        {
          name: 'googleID',
          description:
            'Place your Google Analytics ID here to link to your Google Analytics to see the website traffic statistic',
          title: 'Google Analytics ID Main Website',
          type: 'string',
        },
        {
          name: 'googleIDShop',
          description:
            'Place your Google Analytics ID here to link to your Google Analytics to see the website traffic statistic',
          title: 'Google Analytics ID Shop',
          type: 'string',
        },
        {
          name: 'facebookID',
          title: 'Facebook Pixel ID',
          type: 'string',
        },
      ]
    },
    {
      name: 'whatsapp',
      title: 'Floating Whatsapp Button',
      type: 'object',
      fields: [
        {
          title: "Number",
          description: "Use +62 or 62",
          name: "number",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Message",
          name: "message",
          type: "text",
          description: "All text below will be used as a preset message filled for the customer when they clicked on the WhatsApp Button.",
        }
      ]
    },
    {
      title: "Advance Setting",
      name: "advance_setting",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: "Hide FAQ",
          name: "hide_faq",
          type: "boolean",
          initialValue: false,
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Hide Shop",
          name: "hide_shop",
          type: "boolean",
          description: "Hide All Internal Shop related button and content",
          initialValue: false,
        },
        {
          title: "Turn off Dual Language",
          name: "turn_language",
          type: "boolean",
          description: "Set website to 1 Language (Indonesian)",
          initialValue: false,
        },
        {
          title: 'Default Language',
          name: 'default_language',
          type: 'string',
          options: {
            list: [
              {title: 'ID', value: 'id'},
              {title: 'EN', value: 'en'}
            ],
            layout: 'radio'
          },
          initialValue: 'id',
        },
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
}
