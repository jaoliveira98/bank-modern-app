import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="w-full flex py-6 justify-between items-center navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <img src={logo} alt="Logo" className="w-[124px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <button type="button" onClick={() => scrollTo(nav.id)}>
              {nav.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <img
            src={open ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
        </button>
      </div>

      <div
        className={`${
          open ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        id="menu"
        tabIndex={open ? "0" : "-1"}
      >
        <ul className="list-none flex justify-end items-center flex-col flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mb-0" : "mb-4"
              } text-white`}
            >
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  scrollTo(nav.id);
                }}
              >
                {nav.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
