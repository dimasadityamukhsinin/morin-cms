export default {
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    {
      name: 'mailchimpID',
      description:
        'Place your Mailchimp URL here to receive incoming emails from this website',
      title: 'Mailchimp Embed URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Show Social Media',
      name: 'show_socmed',
      type: 'boolean',
      description: "Toggle to show or hide social media on Footer",
      initialValue: true,
    },
    {
      title: 'Social Media Links',
      name: 'footerLink',
      type: 'object',
      description: "Leave blank to hide the specific social media button.",
      hidden: ({ parent }) => !(parent?.show_socmed === true),
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'email',
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'url',
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'url',
        },
        {
          title: 'Twitter',
          name: 'twitter',
          type: 'url',
        },
      ],
    },
    {
      name: 'creditText',
      title: 'Credits Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings',
      }
    },
  },
}
