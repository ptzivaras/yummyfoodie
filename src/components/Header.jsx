import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <nav className="container mx-auto flex space-x-4">
        <Link to="/" className="font-bold ">Menu</Link>

        <Link to="/order" className="font-bold ">Order</Link>
        <Link to="/" className="font-bold">Menu</Link>
        <Link to="/order" className="font-bold">Order</Link>
      </nav>
    </header>
  )
}

export default Header