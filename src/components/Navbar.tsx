
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-brand-blue to-brand-purple shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl md:text-2xl">
            Tech Prints
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-gray-200 transition-colors">
              Products
            </Link>
            <Link to="/admin" className="text-white hover:text-gray-200 transition-colors">
              Admin
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-brand-orange">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/admin" 
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
            <Link 
              to="/cart" 
              className="text-white hover:text-gray-200 transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">Cart</span>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="ml-2 bg-brand-orange">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
