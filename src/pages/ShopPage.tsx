import React from 'react'
import { useParams } from 'react-router-dom'

function ShopPage() {
  const id = useParams()
  return (
    <div>{`ShopPage: ${id.id}`}</div>
  )
}

export default ShopPage