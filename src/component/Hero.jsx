import React from "react";
import Leaf from "../assets/leaf.png";
import Food from "../assets/food.png";
import Spoon from "../assets/spoon.png";
import Banana from "../assets/banana.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { staggerSlide, slideUp } from "../assets/Motion";

let Hero = () => {
  return (
    <>
      <main>
        <section className="min-w-96 py-14 overflow-hidden">
          <div className="container">
            <div className="relative flex items-center gap-24 flex-col md:flex-row  ">
              <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={staggerSlide}
                className=" w-full space-y-6 text-center md:text-left"
              >
                <h1 className="text-5xl uppercase font-bold  lg:text-7xl xl:text-8xl">
                  <motion.span
                    variants={slideUp}
                    className="relative inline-block text-outline text-transparent"
                  >
                    yummy
                    <img
                      className="absolute w-[50px] top-10 -right-9"
                      src={Leaf}
                    />
                  </motion.span>
                  <motion.span variants={slideUp} classname="inline-block">
                    breakfast
                  </motion.span>
                </h1>
                <motion.p variants={slideUp}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dicta autem sit est explicabo dolorem?
                </motion.p>
                <motion.div variants={slideUp}>
                  <button className="bg-darkGreen text-white flex items-center gap-2 capitalize py-1.5 px-4 rounded-full hover:scale-125 duration-[0.8s]">
                    <IoCartOutline />
                    order now
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={staggerSlide}
                className="z-10 w-full flex justify-end relative"
              >
                <motion.img
                  initial={{ opacity: 0, x: 400, y: 400, rotate: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  src={Food}
                  className="drop-shadow-3xl w-[320px]"
                />
                <motion.img
                  initial={{ opacity: 0, x: 150, y: 150, rotate: "120deg" }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: "95deg" }}
                  transition={{ duration: 0.8 }}
                  src={Spoon}
                  className="drop-shadow-3xl absolute left-32 top-48	rotate-[95deg] w-[250px]"
                />
                <motion.img
                  initial={{ opacity: 0, x: 280, y: 200 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  src={Banana}
                  className="drop-shadow-3xl absolute w-2/4	 -right-24 "
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100, y: 100, rotate: "55deg" }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: "45deg" }}
                transition={{ duration: 0.8 }}
                className="absolute -bottom-96 -right-96 -z-0 rotate-45  w-[480px] h-[900px] bg-lightYellow"
              ></motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Hero;
