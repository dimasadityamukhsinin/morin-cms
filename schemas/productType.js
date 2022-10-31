import client from 'part:@sanity/base/client'

export default {
  name: 'productType',
  title: 'Product Type',
  type: 'document',
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
      title: 'Product Category Background',
      name: 'background',
      type: 'image',
      description: "Picture on the background Banner of Homepage for each Product Type  I  Recommended Size 1200 x 1200 pixels  I  JPEG / WEBP",
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Decoration Component',
      name: 'decor',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Left Decoration',
          name: 'decor1',
          type: 'reference',
          description: "The decoration for the left side of the landing page",
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'decor2',
          title: 'Decor Right',
          type: 'reference',
          description: "The decoration for the right side of the landing page",
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Product Category Description',
      name: 'description',
      type: 'object',
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
    {
      title: 'Middle Image',
      name: 'image1',
      type: 'image',
    },
    {
      title: 'Left Image',
      name: 'image2',
      type: 'image',
    },
    {
      title: 'Right Image',
      name: 'image3',
      type: 'image',
    },
    {
      name: 'animation',
      title: 'Animation Layout',
      type: 'string',
      description: "A list of Animation Layouts for hovered images.",
      options: {
        list: [
          { title: 'Layout 1', value: '1' },
          { title: 'Layout 2', value: '2' },
          { title: 'Layout 3', value: '3' },
          { title: 'Layout 4', value: '4' },
        ],
        layout: 'radio',
      },
      initialValue: '1',
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [
        {
          title: 'Product',
          name: 'product',
          type: 'reference',
          to: [{ type: 'productList' }],
          validation: (Rule) =>
            Rule.custom(async (value, ctx) => {
              let product = await client.fetch(
                `*[_type == "productType" && !(_id in path("drafts.**"))]`,
              )
              let productData = ctx.parent.map((items) => {
                let dataFilter = product.filter((item) => {
                  if (item.products.find((e) => e._id === items._ref)) {
                    return {
                      ...item,
                      data: item.products.find((e) => e._id === items._ref),
                    }
                  }
                })
                return {
                  ...dataFilter[0],
                }
              })
              return true
            }),
        },
      ],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
}
