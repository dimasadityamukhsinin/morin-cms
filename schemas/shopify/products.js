import { SunIcon, WarningOutlineIcon, LockIcon } from '@sanity/icons'
import { Box, Card, Flex, Stack, Text, TextInput, Tooltip } from '@sanity/ui'
import React, { forwardRef } from 'react'
import { FormField } from '@sanity/base/components'
import { uuid } from '@sanity/uuid'
import get from 'lodash.get'

const ProductVariantHiddenInput = forwardRef((props, ref) => {
  return (
    <Card padding={4} radius={2} ref={ref} shadow={1} tone="critical">
      <Flex align="flex-start">
        <Text size={2}>
          <WarningOutlineIcon />
        </Text>
        <Box flex={1} marginLeft={3}>
          <Box>
            <Text size={2} weight="semibold">
              This variant is hidden
            </Text>
          </Box>
          <Stack marginTop={4} space={2}>
            <Text size={1}>It has been deleted from Shopify</Text>
          </Stack>
        </Box>
      </Flex>
    </Card>
  )
})

const ProxyString = forwardRef((props, ref) => {
  const {
    compareValue, // Value to check for "edited" functionality
    document,
    markers,
    onFocus,
    onBlur,
    placeholder,
    presence,
    readOnly,
    type,
  } = props

  const path = type?.options?.field
  const proxyValue = get(document, path)

  const inputId = uuid()

  return (
    <FormField
      compareValue={compareValue}
      description={type?.description}
      inputId={inputId}
      markers={markers}
      presence={presence}
      title={type?.title}
    >
      <Tooltip
        content={
          <Box padding={2}>
            <Text muted size={1}>
              This value is set in Shopify (<code>{path}</code>)
            </Text>
          </Box>
        }
        portal
      >
        <TextInput
          iconRight={LockIcon}
          id={inputId}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={true}
          ref={ref}
          value={proxyValue}
        />
      </Tooltip>
    </FormField>
  )
})

export default {
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
    {
      name: 'variants',
      title: 'Variants',
      options: {
        collapsed: true,
        collapsible: true,
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
    // Deleted
    {
      fieldset: 'status',
      name: 'isDeleted',
      title: 'Deleted from Shopify?',
      type: 'boolean',
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
      type: 'number',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Shopify Product handle',
    },
    // Description
    {
      name: 'descriptionHtml',
      title: 'HTML Description',
      type: 'text',
      rows: 5,
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
    {
      fieldset: 'organization',
      name: 'tags',
      title: 'Tags',
      type: 'string',
    },
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
      name: 'previewImageUrl',
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
    // Variants
    {
      fieldset: 'variants',
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          name: 'hidden',
          type: 'string',
          inputComponent: ProductVariantHiddenInput,
          hidden: ({ parent }) => {
            const isDeleted = parent?.store?.isDeleted

            return !isDeleted
          },
        },
        // Title (proxy)
        {
          name: 'proxyString',
          title: 'Title',
          type: 'string',
          inputComponent: ProxyString,
        },
        // Shopify product variant
        {
          name: 'shopifyProductVariant',
          title: 'Shopify',
          type: 'object',
          options: {
            collapsed: false,
            collapsible: true,
          },
          fieldsets: [
            {
              name: 'options',
              title: 'Options',
              options: {
                columns: 3,
              },
            },
            {
              name: 'status',
              title: 'Status',
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
              validation: (Rule) => Rule.required(),
            },
            // Deleted
            {
              fieldset: 'status',
              name: 'isDeleted',
              title: 'Deleted from Shopify?',
              type: 'boolean',
            },
            // Title
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            // SKU
            {
              name: 'sku',
              title: 'SKU',
              type: 'string',
            },
            // ID
            {
              name: 'id',
              title: 'ID',
              type: 'number',
              description: 'Shopify Product Variant ID',
            },
            // GID
            {
              name: 'gid',
              title: 'GID',
              type: 'string',
              description: 'Shopify Product Variant GID',
            },
            // Product ID
            {
              name: 'productId',
              title: 'Product ID',
              type: 'number',
            },
            // Product GID
            {
              name: 'productGid',
              title: 'Product GID',
              type: 'string',
            },
            // Price
            {
              name: 'price',
              title: 'Price',
              type: 'number',
            },
            // Compare at price
            {
              name: 'compareAtPrice',
              title: 'Compare at price',
              type: 'number',
            },
            // Inventory
            {
              name: 'inventory',
              title: 'Inventory',
              type: 'object',
              options: {
                columns: 3,
              },
              fields: [
                // Quantity
                {
                  name: 'quantity',
                  title: 'Quantity',
                  type: 'number',
                },
                // Management
                {
                  name: 'management',
                  title: 'Management',
                  type: 'string',
                },
                // Policy
                {
                  name: 'policy',
                  title: 'Policy',
                  type: 'string',
                },
              ],
            },
            // Option 1
            {
              fieldset: 'options',
              name: 'option1',
              title: 'Option 1',
              type: 'string',
            },
            // Option 2
            {
              fieldset: 'options',
              name: 'option2',
              title: 'Option 2',
              type: 'string',
            },
            // Option 3
            {
              fieldset: 'options',
              name: 'option3',
              title: 'Option 3',
              type: 'string',
            },
            // Preview Image URL
            {
              name: 'previewImageUrl',
              title: 'Preview Image URL',
              type: 'string',
              description: 'Image displayed in both cart and checkout',
            },
          ],
          readOnly: true,
        },
      ],
    },
  ],
}
