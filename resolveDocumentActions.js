// resolveDocumentActions.js

import { useDocumentOperation } from '@sanity/react-hooks'
import defaultResolve, {
  DeleteAction,
  PublishAction,
} from 'part:@sanity/base/document-actions'
import React from 'react'
import { Button, Grid } from '@sanity/ui'
import client from 'part:@sanity/base/client'

function DeleteAllActionRecipe(props) {
  const doc = props.draft || props.published

  const { del } = useDocumentOperation(props.id, props.type)
  const deleteAllAction = DeleteAction(props)
  const [isDialogOpen, setDialogOpen] = React.useState(false)

  return {
    ...deleteAllAction,
    onHandle: () => {
      setDialogOpen(true)
    },
    dialog: isDialogOpen && {
      type: 'modal',
      onClose: () => {
        setDialogOpen(false)
      },
      header: 'Delete Document?',
      content: (
        <p style={{ padding: 0, margin: 0 }}>
          Are you sure you want to delete <b>“{doc?.title?.en}”</b>?
        </p>
      ),
      footer: (
        <Grid columns={2} gap={2}>
          <Button
            fontSize={2}
            padding={3}
            tone="default"
            mode="ghost"
            text="Cancel"
            onClick={() => setDialogOpen(false)}
          />
          <Button
            fontSize={2}
            padding={3}
            tone="critical"
            mode="default"
            text="Delete now"
            onClick={() => {
              client
                .fetch(`*[_type == "recipeTitle" && _id == "${props.id}"]`)
                .then((data) => {
                  data.map((item) => {
                    item.data?.map((e) => {
                      client
                        .delete({
                          query: `*[_type == "recipeData" && _id == "${e._ref}"]`,
                        })
                        .catch(console.error)
                    })
                  })
                })
                .catch(console.error)
              del.execute()
            }}
          />
        </Grid>
      ),
    },
  }
}

function SetAndPublishActionRecipe(props) {
  const doc = props.draft || props.published
  const defaultPublishAction = PublishAction(props)

  return {
    ...defaultPublishAction,
    onHandle: () => {
      client
        .fetch(
          `*[_type == "recipeTitle" && _id == "${props.id}"] {
          ...,
          data[]->
        }`,
        )
        .then((data) => {
          data.map((item) => {
            item.data?.map((e) => {
              client
                .patch(e._id) // Document ID to patch
                .set({ type: doc?.title?.en }) // Shallow merge
                .commit() // Perform the patch and return a promise
                .catch(console.error)
            })
          })
        })
        .catch(console.error)
      defaultPublishAction.onHandle()
    },
  }
}

function DeleteAllActionProduct(props) {
  const doc = props.draft || props.published

  const { del } = useDocumentOperation(props.id, props.type)
  const deleteAllAction = DeleteAction(props)
  const [isDialogOpen, setDialogOpen] = React.useState(false)

  return {
    ...deleteAllAction,
    onHandle: () => {
      setDialogOpen(true)
    },
    dialog: isDialogOpen && {
      type: 'modal',
      onClose: () => {
        setDialogOpen(false)
      },
      header: 'Delete Document?',
      content: (
        <p style={{ padding: 0, margin: 0 }}>
          Are you sure you want to delete <b>“{doc?.title?.en}”</b>?
        </p>
      ),
      footer: (
        <Grid columns={2} gap={2}>
          <Button
            fontSize={2}
            padding={3}
            tone="default"
            mode="ghost"
            text="Cancel"
            onClick={() => setDialogOpen(false)}
          />
          <Button
            fontSize={2}
            padding={3}
            tone="critical"
            mode="default"
            text="Delete now"
            onClick={() => {
              client
                .fetch(`*[_type == "productType" && _id == "${props.id}"]`)
                .then((data) => {
                  data.map((item) => {
                    item.products?.map((e) => {
                      client
                        .delete({
                          query: `*[_type == "productList" && _id == "${e._ref}"]`,
                        })
                        .catch(console.error)
                    })
                  })
                })
                .catch(console.error)
              del.execute()
            }}
          />
        </Grid>
      ),
    },
  }
}

function SetAndPublishActionProduct(props) {
  const doc = props.draft || props.published
  const defaultPublishAction = PublishAction(props)

  return {
    ...defaultPublishAction,
    onHandle: () => {
      client
        .fetch(
          `*[_type == "productType" && _id == "${props.id}"] {
          ...,
          products[]->
        }`,
        )
        .then((data) => {
          data.map((item) => {
            item.products?.map((e) => {
              client
                .patch(e._id) // Document ID to patch
                .set({ type: doc?.title?.en }) // Shallow merge
                .commit() // Perform the patch and return a promise
                .catch(console.error)
            })
          })
        })
        .catch(console.error)
      defaultPublishAction.onHandle()
    },
  }
}

export default function resolveDocumentActions(props) {
  if (props.type === 'productType') {
    return defaultResolve(props).map((Action) =>
      Action === PublishAction
        ? SetAndPublishActionProduct
        : Action === DeleteAction
        ? DeleteAllActionProduct
        : Action,
    )
  } else if (props.type === 'recipeTitle') {
    return defaultResolve(props).map((Action) =>
      Action === PublishAction
        ? SetAndPublishActionRecipe
        : Action === DeleteAction
        ? DeleteAllActionRecipe
        : Action,
    )
  } else {
    return [...defaultResolve(props)]
  }
}
