import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4 text-[#ECEC75]">
              Test Kitchen
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Embark on a flavourful journey through authentic Russian cuisine. Serving Bangalore since November 2022.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1e293b] hover:bg-[#ECEC75] text-white hover:text-[#0f172a] rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1e293b] hover:bg-[#ECEC75] text-white hover:text-[#0f172a] rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1e293b] hover:bg-[#ECEC75] text-white hover:text-[#0f172a] rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ECEC75]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#94a3b8] hover:text-[#ECEC75] text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-[#94a3b8] hover:text-[#ECEC75] text-sm transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-[#94a3b8] hover:text-[#ECEC75] text-sm transition-colors duration-200">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#94a3b8] hover:text-[#ECEC75] text-sm transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-[#94a3b8] hover:text-[#ECEC75] text-sm transition-colors duration-200">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ECEC75]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-[#ECEC75] flex-shrink-0" />
                <div>
                  <a href="tel:+918012345678" className="text-[#94a3b8] hover:text-[#ECEC75] text-sm transition-colors">
                    +91 80 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-[#ECEC75] flex-shrink-0" />
                <div>
                  <a href="mailto:info@thalasserykitchen.com" className="text-[#94a3b8] hover:text-[#ECEC75] text-sm transition-colors">
                    info@thalasserykitchen.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 text-[#ECEC75] flex-shrink-0" />
                <div>
                  <p className="text-[#94a3b8] text-sm">Open Daily</p>
                  <p className="text-[#94a3b8] text-sm">10:00 AM - 11:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ECEC75]">Newsletter</h4>
            <p className="text-[#94a3b8] text-sm mb-4">
              Subscribe for special offers and updates
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-[#1e293b] text-white placeholder-[#64748b] rounded-lg border border-[#334155] focus:outline-none focus:border-[#ECEC75] transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#ECEC75] text-[#0f172a] rounded-lg font-medium hover:bg-[#e6e67c] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1e293b]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#64748b] text-sm">
              © {currentYear} Thalassery Kitchen. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-[#64748b] hover:text-[#ECEC75] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#64748b] hover:text-[#ECEC75] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
