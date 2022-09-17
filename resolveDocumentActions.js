// resolveDocumentActions.js

// import the default document actions
import { useDocumentOperation } from '@sanity/react-hooks'
import defaultResolve, {
  DeleteAction,
} from 'part:@sanity/base/document-actions'
import React from 'react'
import { Button, Grid } from '@sanity/ui'

function DeleteAllAction(props) {
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
      content: 'Are you sure you want to delete “tes”?',
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
            onClick={() => del.execute()}
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

// const MyPublishAction = (props) => {
//   const defaultPublishAction = DeleteAction(props)
//   return {
//     ...defaultPublishAction,
//     onHandle: () => {
//       console.log('Hello world!')
//       defaultPublishAction.onHandle()
//     }
//   }
// }

// export default function resolveDocumentActions(props) {
//   return [...defaultResolve(props).filter((action) => action.name !== 'DeleteAction'),MyPublishAction]
// }
