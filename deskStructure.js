import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import {
  FiSettings,
  FiSliders,
  FiFile,
  FiStar,
  FiBook,
  FiFlag,
  FiFileText,
  FiList,
  FiAlertCircle,
  FiPhone,
  FiFilter,
} from 'react-icons/fi'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'contact',
            'contactList',
            'faq',
            'faqList',
            'decorList',
            'getMorin',
            'event',
            'eventList',
            'eventCategory',
            'recipe',
            'recipeList',
            'recipeTitle',
            'recipeData',
            'product',
            'productList',
            'productType',
            'about',
            'home',
            'footer',
            'settings',
            'shopifyData',
            'translation',
          ].includes(listItem.getId()),
      ),
      S.listItem()
      .title('Pages')
      .icon(() => <FiFile />)
      .child(
        S.list()
          .title('Pages')
          .items([
            S.listItem()
              .title('Home')
              .icon(() => <FiStar />)
              .child(S.document().schemaType('home').documentId('home')),
            S.listItem()
              .title('About')
              .icon(() => <FiStar />)
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Product List')
              .icon(() => <FiStar />)
              .child(
                S.document().schemaType('product').documentId('product'),
              ),
            S.listItem()
              .title('Recipe List')
              .icon(() => <FiStar />)
              .child(S.document().schemaType('recipe').documentId('recipe')),
            S.listItem()
              .title('Event List')
              .icon(() => <FiStar />)
              .child(S.document().schemaType('event').documentId('event')),
            S.listItem()
              .title('Get Morin')
              .icon(() => <FiStar />)
              .child(
                S.document().schemaType('getMorin').documentId('getMorin'),
              ),
            S.listItem()
              .title('FAQ')
              .icon(() => <FiStar />)
              .child(S.document().schemaType('faq').documentId('faq')),
            S.listItem()
              .title('Contact')
              .icon(() => <FiStar />)
              .child(
                S.document().schemaType('contact').documentId('contact'),
              ),
          ]),
      ),
      S.listItem()
        .title('Products')
        .icon(() => <FiBook />)
        .child(
          S.list()
            .title('Products')
            .items([
              // S.documentTypeListItem('productList').icon(() => <FiFileText />),
              S.documentTypeListItem('productType').icon(() => <FiFlag />),
              S.documentTypeListItem('decorList').icon(() => <FiFileText />),
              S.documentTypeListItem('shopifyData')
                .title('Store Products [Shopify Inactive]')
                .icon(() => <FiFileText />),
            ]),
        ),
      S.listItem()
        .title('Recipes')
        .icon(() => <FiList />)
        .child(
          S.list()
            .title('Recipes')
            .items([
              S.documentTypeListItem('recipeList').icon(() => <FiFileText />),
              S.documentTypeListItem('recipeTitle').icon(() => <FiFileText />),
            ]),
        ),
      S.listItem()
        .title('Events')
        .icon(() => <FiFlag />)
        .child(
          S.list()
            .title('Events')
            .items([
              S.documentTypeListItem('eventList').icon(() => <FiFileText />),
              S.documentTypeListItem('eventCategory').icon(() => <FiFlag />),
            ]),
        ),
      S.documentTypeListItem('faqList').icon(() => <FiAlertCircle />),
      S.documentTypeListItem('contactList').icon(() => <FiPhone />),
      S.listItem()
        .title('Settings')
        .icon(() => <FiSettings />)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .icon(() => <FiSliders />)
                .child(
                  S.document().schemaType('settings').documentId('settings'),
                ),
              S.listItem()
                .title('Footer Settings')
                .icon(() => <FiSliders />)
                .child(S.document().schemaType('footer').documentId('footer')),
              S.listItem()
                .title('Translation')
                .icon(() => <FiSliders />)
                .child(S.document().schemaType('translation').documentId('translation')),
            ]),
        ),
    ])
