import React, { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";


const ResponsiveNav = ({ showMenu, links, toggleMenu }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(showMenu);
  }, [showMenu]);

  return (
    <div
      className={`fixed bottom-0 top-0 w-[40%] transition-all duration-300 ${
        isVisible ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="bg-secondary h-screen p-10 ">
        <div className="text-[1.5rem]">
          <span>
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer text-3xl mb-5 text-white"
            />
          </span>
        </div>
        <div>
          {/* menu */}
          <ul className=" gap-5">
            {links.map(({ title,link },index) => {
              return (
                <li key={index} className="cursor-pointer py-4">
                  <a
                    href={link}
                    className="text-lg font-medium text-white 
                        transition-all duration-300 
                        "
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
