import { SunIcon, ImageIcon } from '@sanity/icons'
import React, { forwardRef, useState } from 'react'

const ShopifyDocumentStatus = forwardRef((props, ref) => {
  const { url } = props

  const [imageVisible, setImageVisible] = useState(true)

  // Hide image on error / 404
  const handleImageError = () => setImageVisible(false)

  return (
    <div
      ref={ref}
      style={{
        alignItems: 'center',
        borderRadius: 'inherit',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {imageVisible && url ? (
        <img
          onError={handleImageError}
          src={`${url}&width=400`}
          style={{
            height: '100%',
            left: 0,
            objectFit: 'contain',
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        />
      ) : (
        <ImageIcon style={{ position: 'absolute' }} />
      )}
    </div>
  )
})

export default {
  name: 'shopifyData',
  title: 'Shopify Data',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // disable for initial publish
  fieldsets: [
    {
      title: 'Status',
      name: 'status',
    },
  ],
  fields: [
    {
      name: 'shopifyProduct',
      title: 'Shopify',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      readOnly: true,
      fieldsets: [
        {
          name: 'status',
          title: 'Status',
          options: {
            columns: 2,
          },
        },
        {
          name: 'organization',
          title: 'Organization',
          options: {
            columns: 2,
          },
        },
      ],
      fields: [
        // Created at
        {
          fieldset: 'status',
          name: 'createdAt',
          title: 'Created at',
          type: 'string',
        },
        // Updated at
        {
          fieldset: 'status',
          name: 'updatedAt',
          title: 'Last updated at',
          type: 'string',
        },
        // Product status
        {
          fieldset: 'status',
          name: 'status',
          title: 'Product status',
          type: 'string',
          options: {
            layout: 'dropdown',
            list: ['active', 'archived', 'draft'],
          },
        },
        // Title
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Title displayed in both cart and checkout',
        },
        // Product ID
        {
          name: 'id',
          title: 'ID',
          type: 'string',
          description: 'Shopify Product ID',
        },
        // Product ID
        {
          name: 'gid',
          title: 'GID',
          type: 'string',
          description: 'Shopify Product GID',
        },
        // Slug
        {
          name: 'handle',
          title: 'Slug',
          type: 'string',
          description: 'Shopify Product handle',
        },
        // Product Type
        {
          fieldset: 'organization',
          name: 'productType',
          title: 'Product type',
          type: 'string',
        },
        // Vendor
        {
          fieldset: 'organization',
          name: 'vendor',
          title: 'Vendor',
          type: 'string',
        },
        // Tags
        // {
        //   fieldset: 'organization',
        //   name: 'tags',
        //   title: 'Tags',
        //   type: 'string',
        // },
        // Price range
        {
          name: 'priceRange',
          title: 'Price range',
          type: 'object',
          options: {
            columns: 2,
          },
          fields: [
            {
              name: 'minVariantPrice',
              title: 'Min variant price',
              type: 'number',
            },
            {
              name: 'maxVariantPrice',
              title: 'Max variant price',
              type: 'number',
            },
          ],
        },
        // Preview Image URL
        {
          name: 'image',
          title: 'Preview Image URL',
          type: 'string',
          description: 'Image displayed in both cart and checkout',
        },
        // Options
        {
          name: 'options',
          title: 'Options',
          type: 'array',
          of: [
            {
              title: 'Product option',
              name: 'productOption',
              type: 'object',
              icon: SunIcon,
              readOnly: true,
              fields: [
                // Name
                {
                  title: 'Name',
                  name: 'name',
                  type: 'string',
                },
                // Values
                {
                  title: 'Values',
                  name: 'values',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
              preview: {
                select: {
                  name: 'name',
                },
                prepare(selection) {
                  const { name } = selection

                  return {
                    title: name,
                  }
                },
              },
            },
          ],
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
        source: 'shopifyProduct.title',
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
      name: 'thumbnail',
      description: 'A cover image for this product | PNG / JPEG / WEBP',
      title: 'Thumbnail',
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
    {
      title: 'Product Type',
      name: 'type',
      type: 'reference',
      to: [{ type: 'productType' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Product Description - EN',
      name: 'description_en',
      type: 'text',
    },
    {
      title: 'Product Description - ID',
      name: 'description_id',
      type: 'text',
    },
    {
      title: "Image Slider",
      name: 'slider_image',
      type: 'array',
      of: [
        {
          title: 'Slider',
          name: 'slider',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
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
          preview: {
            prepare() {
              return {
                title: 'Image Slider',
              }
            },
          },
        }
      ]
    },
    {
      title: 'Weight',
      name: 'listWeight',
      type: 'array',
      of: [
        {
          title: 'Weight',
          name: 'weight',
          type: 'object',
          fields: [
            {
              title: 'Default Weight',
              name: 'defaultWeight',
              type: 'boolean',
              initialValue: false,
              validation: (Rule) =>
                Rule.required().custom((field, context) => {
                  if (
                    context.document.listWeight.filter(
                      (item) => item.defaultWeight,
                    ).length === 0
                  ) {
                    return 'Required'
                  } else {
                    if (
                      context.document.listWeight.filter(
                        (item) => item.defaultWeight,
                      ).length > 1
                    ) {
                      return 'The default weight has been selected'
                    } else {
                      return true
                    }
                  }
                }),
            },
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'shopifyProduct.title',
      media: 'shopifyProduct.image',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        media: <ShopifyDocumentStatus url={media} />,
        title,
      }
    },
  },
}
