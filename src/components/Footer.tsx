import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code size={32} className="text-blue-500" />
              <span className="font-bold text-2xl text-white">Woolgar Media</span>
            </div>
            <p className="text-gray-400">
              Crafting innovative solutions for the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Success Stories', path: '/success-stories' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/#contact', onClick: handleContactClick }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={item.onClick}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <a href="mailto:contact@woolgarmedia.com" className="hover:text-white transition-colors duration-200">
                  contact@woolgarmedia.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="mt-1" />
                <span>
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={24} />, href: '#' },
                { icon: <Github size={24} />, href: '#' },
                { icon: <Twitter size={24} />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Woolgar Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer