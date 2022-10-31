import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const linkRender = (props) => (
  <span>
    {props.children} <FiExternalLink />
  </span>
)

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
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
                'Enter up to 400 characters to describe the Homepage. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe the Homepage (separated by commas)',
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
                'Enter up to 400 characters to describe the Homepage. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seo_keywords',
              description:
                'Enter some keywords to describe the Homepage (separated by commas)',
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
      ],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'object',
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
      ],
    },
    {
      title: 'Backgrounds',
      name: 'backgrounds',
      type: 'object',
      fields: [
        {
          title: 'Left Floating Product Image',
          name: 'imageLeft',
          type: 'image',
          validation: (Rule) => Rule.required(),
          description: "Featured product image on the left side of the website  I  recommended size 530 x 600 pixels  I  WEBP / PNG (with transparent background)",
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
          title: 'Right Floating Product Image',
          name: 'imageRight',
          type: 'image',
          validation: (Rule) => Rule.required(),
          description: "Featured product image on the right side of the website  I  recommended size 530 x 600 pixels  I  WEBP / PNG (with transparent background)",
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
      title: 'Cover Content',
      name: 'cover',
      type: 'object',
      description: "The pop-up window that will show when the button in the Header is clicked",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: 'Content Title',
          name: 'titleDescription',
          type: 'object',
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
          ],
        },
        {
          title: 'Button Text',
          name: 'button',
          type: 'object',
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
          ],
        },
        {
          title: 'Description',
          name: 'description',
          type: 'object',
          description: "All text below will be displayed on the Cover Content section",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'EN',
              name: 'en',
              type: 'array',
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
                  name: 'image',
                  title: 'Image',
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
            },
            {
              title: 'ID',
              name: 'id',
              type: 'array',
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
                  name: 'image',
                  title: 'Image',
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
            },
          ],
        },
      ],
    },
    {
      title: 'Contents',
      name: 'contents',
      type: 'array',
      of: [
        {
          title: 'Content',
          name: 'content',
          type: 'object',
          fields: [
            {
              title: 'Cover Title',
              name: 'titleCover',
              type: 'object',
              description: "All text below will be displayed on the thumbnail for this content.",
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
              ],
            },
            {
              title: 'Content Title',
              name: 'titleDescription',
              type: 'object',
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
              ],
            },
            {
              title: 'Button Text',
              name: 'button',
              type: 'object',
              description: "All text will be displayed on the button in the thumbnail for this content.",
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
              ],
            },
            {
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
              description: "Image which represents the whole article  I  recommended size 900 x 1150 pixels  I  JPEG / WEBP",
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
              title: 'Description',
              name: 'description',
              type: 'object',
              validation: (Rule) => Rule.required(),
              description: "All contents below will be displayed on the pop-up window when this content is clicked.",
              fields: [
                {
                  title: 'EN',
                  name: 'en',
                  type: 'array',
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
                      name: 'image',
                      title: 'Image',
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
                },
                {
                  title: 'ID',
                  name: 'id',
                  type: 'array',
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
                      name: 'image',
                      title: 'Image',
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
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'titleDescription.en',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
      }
    },
  },
}
