"use client"
import ErrorMessage from '@/component/errorMessage/ErrorMessage'
import React from 'react'

const error = ({error}: {error: Error}) => {
    console.log(error, "new error is showing")
  return (
      <ErrorMessage 
        message={error.message}
       />
  )
}

export default error
