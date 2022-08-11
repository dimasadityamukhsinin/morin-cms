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
      title: 'Title - EN',
      name: 'title_en',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title - ID',
      name: 'title_id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description - EN',
      name: 'description_en',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description - ID',
      name: 'description_id',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Backgrounds',
      name: 'backgrounds',
      type: 'object',
      fields: [
        {
          title: 'Image Left',
          name: 'imageLeft',
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
        {
          title: 'Image Right',
          name: 'imageRight',
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
      title: 'First Read More',
      name: 'first_more',
      type: 'object',
      fields: [
        {
          title: "Button",
          name: "btn",
          type: "object",
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
              initialValue: 'Read More',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
            },
          ],
        },
        {
          title: 'Title - EN',
          name: 'title_en',
          type: 'string',
        },
        {
          title: 'Title - ID',
          name: 'title_id',
          type: 'string',
        },
        {
          title: 'Description - EN',
          name: 'description_en',
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
          title: 'Description - ID',
          name: 'description_id',
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
    {
      title: 'Our Process',
      name: 'our_process',
      type: 'object',
      fields: [
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
              initialValue: 'Learn More',
            },
          ],
        },
        {
          title: 'Title Cover - EN',
          name: 'titleCover_en',
          type: 'string',
        },
        {
          title: 'Title Cover - ID',
          name: 'titleCover_id',
          type: 'string',
        },
        {
          name: 'thumbnail',
          title: 'Thumbnail',
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
        {
          title: 'Title Description - EN',
          name: 'titleDescription_en',
          type: 'string',
        },
        {
          title: 'Title Description - ID',
          name: 'titleDescription_id',
          type: 'string',
        },
        {
          title: 'Description - EN',
          name: 'description_en',
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
          title: 'Description - ID',
          name: 'description_id',
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
    {
      title: 'Visi & Misi',
      name: 'visi_misi',
      type: 'object',
      fields: [
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
              initialValue: 'Learn More',
            },
          ],
        },
        {
          title: 'Title Cover - EN',
          name: 'titleCover_en',
          type: 'string',
        },
        {
          title: 'Title Cover - ID',
          name: 'titleCover_id',
          type: 'string',
        },
        {
          name: 'thumbnail',
          title: 'Thumbnail',
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
        {
          title: 'Title Description - EN',
          name: 'titleDescription_en',
          type: 'string',
        },
        {
          title: 'Title Description - ID',
          name: 'titleDescription_id',
          type: 'string',
        },
        {
          title: 'Description - EN',
          name: 'description_en',
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
                annotations: [],
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
          title: 'Description - ID',
          name: 'description_id',
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
                annotations: [],
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
    prepare() {
      return {
        title: 'About',
      }
    },
  },
}
