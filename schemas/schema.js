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
import recipeList from './recipeList'
import recipe from './recipe'
import product from './product'
import event from './event'
import getMorin from './getMorin'
import about from './about'
import eventCategory from './eventCategory'
import eventList from './eventList'
import decorList from './decorList'
import faq from './faq'
import faqList from './faqList'
import contact from './contact'
import contactList from './contactList'
import editorBasic from './editorBasic'
import shopifyData from './shopifyData'
import recipeDetail from './recipeDetail'
import productDetail from './productDetail'
import eventDetail from './eventDetail'
import translation from './translation'
import recipeTitle from './recipeTitle'
import recipeData from './recipeData'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    contact,
    contactList,
    faq,
    faqList,
    decorList,
    getMorin,
    event,
    eventList,
    eventDetail,
    eventCategory,
    recipe,
    recipeList,
    recipeDetail,
    recipeTitle,
    recipeData,
    product,
    productDetail,
    productList,
    productType,
    about,
    home,
    footer,
    settings,
    blockContent,
    editorBasic,
    shopifyData,
    translation,
  ]),
})
