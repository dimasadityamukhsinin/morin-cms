export default {
  name: 'home',
  title: 'Home',
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
      title: 'Slider Component',
      name: 'component',
      type: 'object',
      description: "Edit the Slider Component to change and customize the landing slideshow on the main website.",
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'array',
          of: [
            {
              title: 'Slider',
              name: 'slider',
              type: 'object',
              fields: [
                {
                  title: 'Change to Text Image',
                  name: 'option',
                  type: 'boolean',
                  initialValue: false,
                  description: "Turn on the ‘Change to Text Image’ button to use an overlay image for the title on the landing slideshow.",
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: 'Text Display',
                  name: 'title',
                  type: 'string',
                  description: "Text on top of the background image.",
                  hidden: ({ parent }) => !(parent?.option === false),
                  validation: (Rule) =>
                    Rule.custom((field, context) => {
                      if(!context.parent.option) {
                        return "Required"
                      }else {
                        return true
                      }
                    }),
                },
                {
                  title: 'Text Image',
                  name: 'textImage',
                  type: 'object',
                  description: "Add Text Image to use an overlay image as the title on the background picture slider. Refer to the Figma template to create the text image.",
                  fields: [
                    {
                      title: 'Image Text / Graphic  on Desktop Image',
                      name: 'imageDesktop',
                      type: 'image',
                      description: "For text display on desktop screen in a Landscape Format  I  recommended size 1920 x 1200 pixels  I  SVG / PNG (with transparent background)",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Image Text / Graphic on Mobile Image',
                      name: 'imageMobile',
                      type: 'image',
                      description: "For text display on mobile screen in a Portrait Format  I  recommended size 800 x 1800 pixels  I  SVG / PNG (with transparent background)",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  hidden: ({ parent }) => !(parent?.option === true),
                },
                {
                  title: 'Background Image',
                  name: 'background',
                  type: 'image',
                  description: "Picture on the background slide  I  Recommended size 1920 x 1200 pixels  I  JPEG / WEBP",
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
                  title: 'Set Menu & Header Button Color',
                  name: 'langColor',
                  type: 'string',
                  description: "Customize the color for the header, text, and button on the slider to black or white.",
                  validation: (Rule) => Rule.required(),
                  options: {
                    list: [
                      { title: 'Black', value: 'black' },
                      { title: 'White', value: 'white' },
                    ],
                    layout: 'radio',
                  },
                  initialValue: 'white',
                },
                {
                  title: 'Button',
                  name: 'button',
                  type: 'object',
                  fields: [
                    {
                      title: 'Button Text',
                      name: 'title',
                      type: 'string',
                      initialValue: 'Find Out More',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Custom Button Link',
                      name: 'customLink',
                      type: 'boolean',
                      description: "Enable this option to display a button for this slider that can be customized.",
                      initialValue: false,
                    },
                    {
                      title: 'Button Link',
                      name: 'link',
                      type: 'url',
                      hidden: ({ parent }) => !(parent?.customLink === true),
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  media: 'background',
                },
                prepare(selection) {
                  const { media } = selection
                  return {
                    title: 'Home Slider',
                    media: media,
                  }
                },
              },
            },
          ],
        },
        {
          name: 'id',
          title: 'ID',
          type: 'array',
          of: [
            {
              title: 'Slider',
              name: 'slider',
              type: 'object',
              fields: [
                {
                  title: 'Change to Text Image',
                  name: 'option',
                  type: 'boolean',
                  initialValue: false,
                  description: "Turn on the ‘Change to Text Image’ button to use an overlay image for the title on the landing slideshow.",
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: 'Text Display',
                  name: 'title',
                  type: 'string',
                  description: "Text on top of the background image.",
                  hidden: ({ parent }) => !(parent?.option === false),
                  validation: (Rule) =>
                    Rule.custom((field, context) => {
                      if(!context.parent.option) {
                        return "Required"
                      }else {
                        return true
                      }
                    }),
                },
                {
                  title: 'Text Image',
                  name: 'textImage',
                  type: 'object',
                  description: "Add Text Image to use an overlay image as the title on the background picture slider. Refer to the Figma template to create the text image.",
                  fields: [
                    {
                      title: 'Image Text / Graphic  on Desktop Image',
                      name: 'imageDesktop',
                      type: 'image',
                      description: "For text display on desktop screen in a Landscape Format  I  recommended size 1920 x 1200 pixels  I  SVG / PNG (with transparent background)",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Image Text / Graphic on Mobile Image',
                      name: 'imageMobile',
                      type: 'image',
                      description: "For text display on mobile screen in a Portrait Format  I  recommended size 800 x 1800 pixels  I  SVG / PNG (with transparent background)",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  hidden: ({ parent }) => !(parent?.option === true),
                },
                {
                  title: 'Background Image',
                  name: 'background',
                  type: 'image',
                  description: "Picture on the background slide  I  Recommended size 1920 x 1200 pixels  I  JPEG / WEBP",
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
                  title: 'Set Menu & Header Button Color',
                  name: 'langColor',
                  type: 'string',
                  description: "Customize the color for the header, text, and button on the slider to black or white.",
                  validation: (Rule) => Rule.required(),
                  options: {
                    list: [
                      { title: 'Black', value: 'black' },
                      { title: 'White', value: 'white' },
                    ],
                    layout: 'radio',
                  },
                  initialValue: 'white',
                },
                {
                  title: 'Button',
                  name: 'button',
                  type: 'object',
                  fields: [
                    {
                      title: 'Button Text',
                      name: 'title',
                      type: 'string',
                      initialValue: 'Temukan lebih banyak lagi',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Custom Button Link',
                      name: 'customLink',
                      type: 'boolean',
                      description: "Enable this option to display a button for this slider that can be customized.",
                      initialValue: false,
                    },
                    {
                      title: 'Button Link',
                      name: 'link',
                      type: 'url',
                      hidden: ({ parent }) => !(parent?.customLink === true),
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  media: 'background',
                },
                prepare(selection) {
                  const { media } = selection
                  return {
                    title: 'Home Slider',
                    media: media,
                  }
                },
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Product Section',
      name: 'product',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'See All Products Button Text',
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
          title: 'Icons',
          name: 'icons',
          type: 'array',
          description: "Symbol in the lower part of the section | SVG / PNG (with transparent background)",
          of: [
            {
              title: 'Icon',
              name: 'icon',
              type: 'object',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: 'Icon',
                  name: 'icon',
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
              ],
            },
          ],
        },
        {
          title: 'Product Section Description',
          name: 'description',
          type: 'object',
          description: "All text below will be displayed on the product section.",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'EN',
              name: 'en',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'ID',
              name: 'id',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: 'Recipe Section',
      name: 'recipe',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
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
          title: 'Browse Recipe Button Text',
          name: 'button',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'See All Recipes',
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
          title: 'Recipe Section Description',
          name: 'description',
          type: 'object',
          description: "All text below will be displayed in the recipe section.",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'EN',
              name: 'en',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'ID',
              name: 'id',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: 'Event Section',
      name: 'event',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
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
          title: 'All Event Button Text',
          name: 'btn_all',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'See All Events',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          title: 'View Event Button Text',
          name: 'btn_card',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: 'See Events',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'instagram',
      title: 'Instagram Section',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
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
          title: 'Instagram Button Text',
          name: 'button',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Instagram Button Link',
          name: 'url',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Elfsight ID',
          name: 'elfsightID',
          type: 'string',
          description: "The ID of the Elfsight Widget used to embed the Widget on Morin's Website. Please refer to the documentation for further instructions to get the ID.",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
}
