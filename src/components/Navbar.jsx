import React from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/', id: 'hero' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Experience', path: '/experience', id: 'experience' },
    { name: 'Certifications', path: '/certifications', id: 'certifications' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  const handleNavClick = (e, path, id) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    } else {
      // If not on home page, navigate to home and then scroll (or just navigate)
      // For simplicity, we'll navigate to the dedicated page
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900">
          The Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              // onClick={(e) => handleNavClick(e, link.path, link.id)}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors relative py-1",
                  isActive 
                    ? "text-primary after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full" 
                    : "text-on-surface-variant hover:text-on-surface"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={(e) => handleNavClick(e, '/contact', 'contact')}
            className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dim transition-all shadow-sm"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path, link.id)}
                  className={({ isActive }) =>
                    cn(
                      "text-lg font-medium transition-colors",
                      isActive ? "text-primary" : "text-on-surface-variant"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button 
                onClick={(e) => handleNavClick(e, '/contact', 'contact')}
                className="bg-primary text-on-primary px-5 py-3 rounded-lg font-medium text-center"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
