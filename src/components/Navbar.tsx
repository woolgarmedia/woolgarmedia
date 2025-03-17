import React, { useState } from "react";
import { Menu, X, Code } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    // { name: "SUCCESS STORIES", href: "/success-stories" },
    { name: "PROJECTS", href: "/projects" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/#contact", onClick: handleContactClick },
  ];

  return (
    <nav className="fixed w-full nav-gradient z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Code size={32} className="text-blue-500" />
            <span className="font-bold text-2xl text-white">Woolgar Media</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.onClick}
                  className={`text-sm relative group ${
                    location.pathname === item.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  } transition-colors duration-200`}>
                  <span className="block transform transition-transform duration-200 group-hover:scale-105">
                    {item.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                      location.pathname === item.href ? "w-full" : ""
                    }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={item.onClick}
                className={`block px-3 py-2 ${
                  location.pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                } text-sm`}>
                <span className="block transform transition-transform duration-200 group-hover:scale-105">
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0 left-3 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-[calc(100%-24px)] ${
                    location.pathname === item.href ? "w-[calc(100%-24px)]" : ""
                  }`}></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
