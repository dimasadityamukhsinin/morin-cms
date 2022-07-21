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
    {
      title: 'Shopify',
      name: 'shopify',
      description: 'Synced from Shopify',
      options: { collapsible: true },
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
