import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { logoSlide } from "../assets/Motion";

let Footer = () => {
  return (
    <>
      <motion.footer
        variants={logoSlide}
        initial="offscreen"
        whileInView="onscreen"
        className="py-10 bg-lightYellow"
      >
        <div className="container">
          <div className="flex flex-row  gap-12  max-sm:flex-col">
            <div className="w-2/5	max-sm:w-full">
              <img src={Logo} className="w-24 " />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                beatae sequi tempore nisi fuga atque excepturi dolores veniam
                ducimus ipsa?
              </p>
            </div>

            <div className="flex w-3/5 justify-between max-sm:w-full max-xs:flex-col gap-6">
              <div>
                <h4 className="font-bold capitalize text-lg">quick links</h4>
                <ul className="capitalize pt-3 space-y-2">
                  <li>Home</li>
                  <li>about</li>
                  <li>contact</li>
                  <li>food</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold capitalize text-lg">quick links</h4>
                <ul className="capitalize pt-3 space-y-2">
                  <li>Home</li>
                  <li>about</li>
                  <li>contact</li>
                  <li>food</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold capitalize text-lg">quick links</h4>
                <ul className="capitalize pt-3 space-y-2">
                  <li>Home</li>
                  <li>about</li>
                  <li>contact</li>
                  <li>food</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};
export default Footer;
