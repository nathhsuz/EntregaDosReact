import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Carpishop</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/contacto">Contacto</Link></li>
            <li><Link className="menu-link" to="/productos/quienesosmos">Quienes Somos</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;