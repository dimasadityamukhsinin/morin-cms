export default {
  name: 'settings',
  title: 'General',
  type: 'document',
  initialValue: () => ({
    webTitle: 'Morin',
  }),
  fields: [
    {
      name: 'webTitle',
      title: 'Website Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'SEO - EN',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo_en',
      type: 'object',
      options: {
        collapsible: true,
      },
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
      title: 'SEO - ID',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo_id',
      type: 'object',
      options: {
        collapsible: true,
      },
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
      title: "Hide FAQ",
      name: "hide_faq",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Turn Off Language",
      name: "turn_language",
      type: "boolean",
      initialValue: false,
    },
    {
      name: 'share_en',
      title: 'Share - EN',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'message',
          title: 'Message',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'share_id',
      title: 'Share - ID',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'message',
          title: 'Message',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'googleID',
      description:
        'Place your Google Analytics ID here to link to your Google Analytics to see the website traffic statistic',
      title: 'Google Analytics ID',
      type: 'string',
    },
    {
      name: 'facebookID',
      title: 'Facebook Pixel ID',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'url',
    },
    {
      name: 'mailchimpID',
      description:
        'Place your Mailchimp URL here to receive incoming emails from this website',
      title: 'Mailchimp Embed URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
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
              initialValue: 'Home',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'General',
      }
    },
  },
}
