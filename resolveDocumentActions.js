// resolveDocumentActions.js

import { useDocumentOperation } from '@sanity/react-hooks'
import defaultResolve, {
  DeleteAction,
} from 'part:@sanity/base/document-actions'
import React from 'react'
import { Button, Grid } from '@sanity/ui'
import client from 'part:@sanity/base/client'

function DeleteAllAction(props) {
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

export default function resolveDocumentActions(props) {
  if (props.type === 'productType') {
    return [
      ...defaultResolve(props).filter(
        (action) => action.name !== 'DeleteAction',
      ),
      DeleteAllAction,
    ]
  } else {
    return [...defaultResolve(props)]
  }
}