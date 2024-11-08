import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
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
  return (
    <>
      <BrowserRouter>
        <nav>
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
              className="w-36"
            />

            <div className="hidden md:block ">
              <ul className="flex gap-6 ">
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

            <motion.button
              variants={btnSlide}
              className="text-xl p-2 rounded-full bg-dark text-white"
            >
              <IoCartOutline className="" />
            </motion.button>
          </motion.div>
        </nav>
      </BrowserRouter>
    </>
  );
};
export default NavBar;
