import React from 'react'
import { Alert, AlertTitle } from '@mui/material'

const ErrorCard = ({componentName, error}) => {
  return (
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        An error has occurred in {componentName} — <strong>{error}!</strong>
    </Alert>
  )
}

export default ErrorCard