import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Security', path: '/security' },
  { name: 'Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-800' : 'bg-gray-900 py-6'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img src="/nav-logo.png" alt="New Way Healthcare" className="h-16 lg:h-20 w-auto object-contain scale-[2] origin-left ml-4" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-semibold transition-colors relative group',
                location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-fluorescent"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center px-6 py-2.5 font-semibold text-gray-900 bg-fluorescent rounded-full hover:bg-white hover:text-gray-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              Talk To Us
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 p-6 flex flex-col gap-4 lg:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-lg font-semibold transition-colors',
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center px-6 py-3 font-semibold text-gray-900 bg-fluorescent rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Talk To Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
