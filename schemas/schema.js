// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import footer from './footer'
import settings from './settings'
import home from './home'
import productType from './productType'
import productList from './productList'
import blockContent from './blockContent'
import recipeCategory from './recipeCategory'
import recipeList from './recipeList'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    recipeList,
    recipeCategory,
    productList,
    productType,
    home,
    footer,
    settings,
    blockContent
  ]),
})
