import React, { useState, memo } from "react";
import logo from "../../assets/images/logo safarilink.png";
import { links } from "../../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import ResponsiveNav from "./ResponsiveNav";
import { motion, AnimatePresence } from "framer-motion";
import { MdRouter, MdWifi, MdDevices, MdCloud } from "react-icons/md";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const serviceLinks = [
    { 
      title: "SD-WAN Solutions", 
      link: "/services/sd-wan",
      icon: <MdRouter className="text-2xl" />
    },
    { 
      title: "Cloud Managed WIFI", 
      link: "/services/cloud",
      icon: <MdWifi className="text-2xl" />
    },
    { 
      title: "Mobile Routers Solutions", 
      link: "/services/missioncritical",
      icon: <MdDevices className="text-2xl" />
    },
    { 
      title: "SOHO Routers", 
      link: "/services/remote-devices",
      icon: <MdCloud className="text-2xl" />
    },
  ];

  return (
    <section className="w-full py-4 px-4 md:py-2 md:px-16 h-24 sm:h-24 md:h-[5.5rem] bg-white">
      <div className="container mx-auto flex justify-between items-center md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img className="w-40 sm:w-48 md:w-56 h-fit" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation with larger text */}
        <div className="hidden lg:flex flex-grow">
          <ul className="flex flex-row gap-14 items-center">
            {links.map(({ link, title, dropdown }, index) => {
              if (dropdown) {
                return (
                  <li 
                    key={index} 
                    className="relative group"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <Link 
                      to="/services" 
                      className="flex items-center gap-1 text-xl text-secondary group-hover:text-primary transition-colors duration-300"
                    >
                      {title}
                      <IoIosArrowDown className={`transform transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-3 z-50"
                        >
                          {serviceLinks.map((service, idx) => (
                            <Link
                              key={idx}
                              to={service.link}
                              className="flex items-center gap-4 px-6 py-4 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-300"
                            >
                              <span className="text-secondary">{service.icon}</span>
                              <span className="text-lg font-medium">{service.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={index} className="text-xl">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary font-medium" : "text-secondary"
                    }
                    to={link}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex justify-end">
          <AnimatePresence initial={false}>
            {showMenu ? (
              <motion.div
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer text-3xl md:text-3xl"
                onClick={toggleMenu}
              >
                <HiMenuAlt1 />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 0 }}
                animate={{ rotate: -90 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer text-3xl md:text-4xl"
                onClick={toggleMenu}
              >
                <HiMenuAlt3 />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-50 bg-white"
          >
            <ResponsiveNav showMenu={showMenu} links={links} toggleMenu={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(NavBar);
