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
} from 'react-icons/fi'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'getMorin',
            'event',
            'eventList',
            'eventCategory',
            'recipe',
            'recipeList',
            'recipeCategory',
            'product',
            'productList',
            'productType',
            'about',
            'home',
            'footer',
            'settings',
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Products')
        .icon(() => <FiBook />)
        .child(
          S.list()
            .title('Products')
            .items([
              S.documentTypeListItem('productList').icon(() => <FiFileText />),
              S.documentTypeListItem('productType').icon(() => <FiFlag />),
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
              S.documentTypeListItem('recipeCategory').icon(() => <FiFlag />),
            ]),
        ),
      S.listItem()
        .title('Events')
        .icon(() => <FiStar />)
        .child(
          S.list()
            .title('Events')
            .items([
              S.documentTypeListItem('eventList').icon(() => <FiFileText />),
              S.documentTypeListItem('eventCategory').icon(() => <FiFlag />),
            ]),
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
                .title('Product')
                .icon(() => <FiStar />)
                .child(
                  S.document().schemaType('product').documentId('product'),
                ),
              S.listItem()
                .title('Recipe')
                .icon(() => <FiStar />)
                .child(S.document().schemaType('recipe').documentId('recipe')),
              S.listItem()
                .title('Event')
                .icon(() => <FiStar />)
                .child(S.document().schemaType('event').documentId('event')),
              S.listItem()
                .title('Get Morin')
                .icon(() => <FiStar />)
                .child(
                  S.document().schemaType('getMorin').documentId('getMorin'),
                ),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .icon(() => <FiSettings />)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .icon(() => <FiSliders />)
                .child(
                  S.document().schemaType('settings').documentId('settings'),
                ),
              //   S.listItem()
              //     .title('Header')
              //     .icon(() => <FiSliders />)
              //     .child(S.document().schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .icon(() => <FiSliders />)
                .child(S.document().schemaType('footer').documentId('footer')),
            ]),
        ),
    ])
