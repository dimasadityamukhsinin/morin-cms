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
  FiList
} from 'react-icons/fi'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'recipeList',
            'recipeCategory',
            'productList',
            'productType',
            'home',
            'footer',
            'settings',
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Product')
        .icon(() => <FiBook />)
        .child(
          S.list()
            .title('Product')
            .items([
              S.documentTypeListItem('productList').icon(() => <FiFileText />),
              S.documentTypeListItem('productType').icon(() => <FiFlag />),
            ]),
        ),
      S.listItem()
        .title('Recipe')
        .icon(() => <FiList />)
        .child(
          S.list()
            .title('Recipe')
            .items([
              S.documentTypeListItem('recipeList').icon(() => <FiFileText />),
              S.documentTypeListItem('recipeCategory').icon(() => <FiFlag />),
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
