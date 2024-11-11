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
        <section className="w-full py-16 pt-44 overflow-hidden  max-md:pt-36">
          <div className="container">
            <div className="relative flex items-center gap-28 flex-row max-md:flex-col max-md:gap-20 max-sm:gap-20">
              <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={staggerSlide}
                className=" w-full space-y-6 text-center md:text-left max-md:flex flex-col items-center "
              >
                <h1 className="text-6xl uppercase font-bold  lg:text-7xl xl:text-8xl max-md:text-7xl max-sm:text-[45px]">
                  <motion.span
                    variants={slideUp}
                    className="relative inline-block text-outline text-transparent max-md:block max-md:mb-6"
                  >
                    yummy
                    <img
                      className="absolute w-[42px] top-[30%] -right-11 max-lg:w-[28px] max-lg:-right-7 max-md:w-[35px] max-md:right-[5%] max-sm:right-[2%]"
                      src={Leaf}
                    />
                  </motion.span>
                  <motion.span
                    variants={slideUp}
                    className="inline-block max-md:block "
                  >
                    breakfast
                  </motion.span>
                </h1>
                <motion.p
                  variants={slideUp}
                  className="max-md:text-xl max-sm:text-lg"
                >
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

              {/* <div className="z-10 w-full flex justify-end relative max-md:justify-center items-center">
                <motion.img
                  initial={{ opacity: 0, x: 40, y: 40, rotate: "40deg" }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: "0deg" }}
                  transition={{ duration: 0.5 }}
                  src={Food}
                  className="drop-shadow-3xl w-[320px] max-sm:w-[290px] max-mobile:w-[240px] max-mobile:translate-y-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: 50, y: 50, rotate: "120deg" }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: "95deg" }}
                  transition={{ duration: 0.8 }}
                  src={Spoon}
                  className="drop-shadow-3xl absolute 	rotate-[95deg] w-[250px] left-[30%] top-[52%] max-xl:left-[5%] max-lg:left-[-15%] max-md:left-[10%] max-sm:left-[8%] max-sm:top-[55%] max-sm:w-[220px] max-mobile:w-[180px] max-mobile:left-[0%]"
                />
                <motion.img
                  initial={{ opacity: 0, x: 50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  src={Banana}
                  className="drop-shadow-3xl absolute w-2/4	 -right-[20%] max-lg:-right-[24%] top-4 max-lg:w-[65%] max-md:w-[40%] max-md:right-10 max-md:top-0 max-sm:right-8  max-sm:top-5 max-sm:w-[35%] max-mobile:w-[60%] max-mobile:right-25  max-mobile:top-2"
                />
              </div> */}

              <div className="relative z-10">
                <motion.img
                  initial={{ opacity: 0, x: 100, y: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  src={Food}
                  className="w-[430px] drop-shadow-3xl relative max-md:w-[300px] max-mobile:w-[220px]"
                />
                <motion.img
                  initial={{ opacity: 0, rotate: 120, x: 50, y: 50 }}
                  whileInView={{ opacity: 1, rotate: 90, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  src={Spoon}
                  className="absolute -bottom-20 -right-35  rotate-90 w-4/5 drop-shadow-3xl"
                />
                <motion.img
                  initial={{ opacity: 0, rotate: 20, x: 80, y: 100 }}
                  whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  src={Banana}
                  className="absolute drop-shadow-3xl top-0 -right-24 w-4/5 max-mobile:-right-20"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 10, y: 10, rotate: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 45 }}
                transition={{ duration: 0.8 }}
                className="absolute -bottom-96 -right-96 -z-0 rotate-45  w-[480px] h-[900px] bg-lightYellow "
              ></motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Hero;
