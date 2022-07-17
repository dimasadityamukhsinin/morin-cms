import { SunIcon, WarningOutlineIcon, LockIcon } from '@sanity/icons'
import { Box, Card, Flex, Stack, Text, TextInput, Tooltip } from '@sanity/ui'
import React, { forwardRef } from 'react'
import { FormField } from '@sanity/base/components'
import { uuid } from '@sanity/uuid'
import get from 'lodash.get'

export default {
  name: "test_shopify",
  title: "Test Shopify",
  type: "document",
  __experimental_actions: ["update", "publish"], // disable for initial publish
  fieldsets: [
    {
      title: "Status",
      name: "status",
    },
    {
      title: "Shopify",
      name: "shopify",
      description: "Synced from Shopify",
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
      title: "title",
    },
  },
};
