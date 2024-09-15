import React, { useState, memo } from "react";
import logo from "../../assets/images/logo.jpeg";
import { links } from "../../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3,  } from "react-icons/hi";
import ResponsiveNav from "./ResponsiveNav";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <section className="w-full py-2 px-4 md:py-4 md:px-16  h-24 sm:h-24 md:h-[6.4rem]  bg-white fixed top-0  z-10 ">
      <div className="container mx-auto flex justify-between items-center   md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img className="w-36 md:w-40 h-20" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow">
          <ul className="flex flex-row gap-14 items-center">
            {links.map(({ link, title }, index) => (
              <li key={index} className="text-xl md:text-[1.3rem] lg:text-xl ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary text-xl  font-medium" : "text-secondary"
                  }
                  to={link}
                >
                  {title}
                </NavLink>
              </li>
            ))}
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
          >
            <ResponsiveNav showMenu={showMenu} links={links} toggleMenu={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(NavBar);
