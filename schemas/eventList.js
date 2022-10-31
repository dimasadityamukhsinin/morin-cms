import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const linkRender = (props) => (
  <span>
    {props.children} <FiExternalLink />
  </span>
)

export default {
  name: 'eventList',
  title: 'Event List',
  type: 'document',
  fields: [
    {
      title: "Event Title",
      name: "title",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'id',
          title: 'ID',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
          if (slug) {
            if (slug.current.match(regex) !== null) {
              return true
            } else {
              return 'Not a valid slug'
            }
          } else {
            return 'Required'
          }
        }),
    },
    {
      title: "SEO",
      name: "seo",
      type: "object",
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'object',
          options: {
            collapsible: true,
          },
          fields: [
            {
              name: 'seo_description',
              description:
                'Enter up to 400 characters to describe this article. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe this article (separated by commas)',
              type: 'string',
              title: 'Keywords',
            },
            {
              name: 'seo_image',
              title: 'Image',
              description:
                '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
              type: 'image',
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
          fields: [
            {
              name: 'seo_description',
              description:
                'Enter up to 400 characters to describe this article. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe this article (separated by commas)',
              type: 'string',
              title: 'Keywords',
            },
            {
              name: 'seo_image',
              title: 'Image',
              description:
                '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
              type: 'image',
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
      title: 'Event Category',
      name: 'eventCategory',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'eventCategory' },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'thumbnail',
      description: 'Image on the Card in the Event landing page  I  Recommended Size 900 x 530 pixels  I  JPEG / WEBP',
      title: 'Event Thumbnail',
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
    {
      name: 'cover_image',
      title: 'Event Cover Image',
      type: 'image',
      description: "Image on top of the Event article page  I  Recommended Size 900 x 600 pixels  I  JPEG / WEBP",
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
    {
      title: "Event Content",
      name: "description",
      type: "object",
      description: "Image on the event article alongside with text  I  Recommended Size 600 x 300 pixels  I  JPEG / WEBP",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              title: 'Block',
              type: 'block',
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' },
                  { title: 'Strike', value: 'strike-through' },
                  { title: 'Underline', value: 'underline' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    blockEditor: {
                      icon: () => <FiExternalLink />,
                      render: linkRender,
                    },
                    fields: [
                      {
                        name: 'url',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
              ],
              lists: [],
            },
            {
              title: 'Image Component',
              name: 'imageComponent',
              type: 'object',
              fields: [
                {
                  title: 'Normal / Wide',
                  name: 'option',
                  type: 'boolean',
                  initialValue: false,
                },
                {
                  title: 'Image',
                  name: 'image',
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
              preview: {
                select: {
                  media: 'image',
                },
                prepare(selection) {
                  const { media } = selection
                  return {
                    title: 'Image',
                    media: media,
                  }
                },
              },
            },
          ],
        },
        {
          title: 'ID',
          name: 'id',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              title: 'Block',
              type: 'block',
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' },
                  { title: 'Strike', value: 'strike-through' },
                  { title: 'Underline', value: 'underline' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    blockEditor: {
                      icon: () => <FiExternalLink />,
                      render: linkRender,
                    },
                    fields: [
                      {
                        name: 'url',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
              ],
              lists: [],
            },
            {
              title: 'Image Component',
              name: 'imageComponent',
              type: 'object',
              fields: [
                {
                  title: 'Normal / Wide',
                  name: 'option',
                  type: 'boolean',
                  initialValue: false,
                },
                {
                  title: 'Image',
                  name: 'image',
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
              preview: {
                select: {
                  media: 'image',
                },
                prepare(selection) {
                  const { media } = selection
                  return {
                    title: 'Image',
                    media: media,
                  }
                },
              },
            },
          ],
        },
      ]
    },
    {
      title: 'Date Published',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
  ],
  initialValue: async () => ({
    date: new Date().toISOString().slice(0, 10),
  }),
  preview: {
    select: {
      title: 'title.en',
      media: 'thumbnail',
    },
  },
}
