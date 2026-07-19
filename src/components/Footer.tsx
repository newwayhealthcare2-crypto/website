import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe, Hash, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/nav-logo.png" alt="New Way Healthcare" className="h-24 w-auto object-contain scale-150 origin-left ml-2" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping Healthcare Organizations Improve Revenue, Accuracy and Operational Excellence through Intelligent Revenue Cycle Management.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-fluorescent hover:text-gray-900 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-fluorescent hover:text-gray-900 transition-colors">
                <Hash size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-fluorescent hover:text-gray-900 transition-colors">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Solutions', 'Case Studies', 'Team'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Legal & Security</h4>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'HIPAA Compliance', path: '/hipaa-compliance' },
                { name: 'ISO Certifications', path: '/iso-certifications' },
                { name: 'Security Architecture', path: '/security-architecture' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-fluorescent shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/61nyCTAx8w6f4n3g7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Kosmo One Business Park<br />
                  Nolambur, Chennai
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-fluorescent shrink-0" />
                <div className="flex flex-col">
                  <span>+91 8667001566 (India)</span>
                  <span>+1 307 463 4168 (US)</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-fluorescent shrink-0" />
                <a href="mailto:Jay@newwayhealthcare.com" className="hover:text-white transition-colors">
                  Jay@newwayhealthcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} New Way Healthcare Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
