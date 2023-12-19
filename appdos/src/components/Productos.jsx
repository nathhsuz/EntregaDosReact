import React from 'react'
import { Link } from 'react-router-dom'
import Inicio from './Inicio'


function Productos() {
  return (
    <div>
    <h1>Productos</h1>
<Link to={<Inicio/>}>Inicio</Link>
    </div>
  )
}

export default Productos
