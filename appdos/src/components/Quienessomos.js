import React from 'react'
import { Link } from 'react-router-dom'
import Productos from './Productos'

function Detalles() {
  return (
    <div>
      <h1>Detalles</h1>
      <Link to={<Productos />}>Productos</Link>
    </div>
  )
}

export default Detalles
