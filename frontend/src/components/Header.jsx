import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { getCartItems } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const items = getCartItems();
      const count = items.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/locations', label: 'Locations' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/order', label: 'Order Online' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0f172a]">
              Thalassery
              <span className="block text-sm font-normal text-[#64748b]">Kitchen</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#0f172a]'
                    : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918012345678"
              className="flex items-center space-x-2 text-[#64748b] hover:text-[#0f172a] transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <Link
              to="/order"
              className="relative p-2 text-[#0f172a] hover:bg-[#f8fafc] rounded-lg transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0f172a] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0f172a] hover:bg-[#f8fafc] rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e6e67c]/20">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-[#ECEC75] text-[#0f172a]'
                    : 'text-[#64748b] hover:bg-[#f8fafc]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+918012345678"
              className="flex items-center space-x-2 px-4 py-3 text-[#64748b] hover:bg-[#f8fafc] rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <Link
              to="/order"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-colors"
            >
              <span>View Cart</span>
              {cartCount > 0 && (
                <span className="bg-[#ECEC75] text-[#0f172a] text-sm px-2 py-1 rounded-full font-medium">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
