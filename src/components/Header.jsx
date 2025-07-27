import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = useSelector(state => 
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-10">
      <div className="container flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-blue-600">
          YummyGreek
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-blue-600">Menu</Link>
          <Link to="/order" className="font-medium hover:text-blue-600">
            Order {cartCount > 0 && `(${cartCount})`}
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <Link 
            to="/" 
            className="block px-4 py-3 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/order" 
            className="block px-4 py-3 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Order {cartCount > 0 && `(${cartCount})`}
          </Link>
        </div>
      )}
    </header>
  );
};