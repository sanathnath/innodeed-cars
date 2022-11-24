import React from 'react'
import { useParams } from 'react-router-dom'

function LearnPage() {
  const id = useParams()
  return (
    <div>{`LearnPage: ${id.id}`}</div>
  )
}

export default LearnPage