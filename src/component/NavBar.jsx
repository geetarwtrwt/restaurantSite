import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { navSlide, liSlideDown, logoSlide, btnSlide } from "../assets/Motion";

let navMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    delay: 0.5,
  },
];
let NavBar = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <nav className="bg-white2  shadow-lg shadow-gray-200 fixed w-full top-0 z-50 py-2">
          <motion.div
            variants={navSlide}
            initial="offscreen"
            animate="onscreen"
            className="container flex justify-between items-center font-leagueGothic"
          >
            <motion.img
              variants={logoSlide}
              src={Logo}
              alt="logo"
              className="w-36 max-md:w-24"
            />

            <div className="hidden md:block ">
              <ul className="hidden md:flex gap-6 ">
                {navMenu.map((e) => {
                  return (
                    <motion.li
                      variants={liSlideDown}
                      key={e.id}
                      className="navMenu p-2 text-2xl"
                    >
                      <Link to={e.path}>{e.title}</Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="flex gap-4 items-center">
              <button
                className="text-3xl md:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <MdClose className="text-4xl" /> : <FaBars />}
              </button>

              <motion.button
                variants={btnSlide}
                className="text-xl p-2 rounded-full bg-dark text-white"
              >
                <IoCartOutline className="" />
              </motion.button>
            </div>

            {open && (
              <div className="absolute right-0 top-[85px] pt-4 pb-4 z-10  rounded bg-lightYellow ">
                <ul className="flex flex-col text-2xl gap-8 ">
                  {navMenu.map((e) => {
                    return (
                      <li
                        key={e.id}
                        className="w-full py-2 px-8 hover:bg-white2 duration-700 hover:text-darkGreen"
                      >
                        <Link to={e.path}>{e.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </motion.div>
        </nav>
      </BrowserRouter>
    </>
  );
};
export default NavBar;
