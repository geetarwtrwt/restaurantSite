import React from "react";
import BannerImg from "../assets/banner.png";
import { motion } from "framer-motion";
import { imgBg, imgAni, staggerSlide, slideUp } from "../assets/Motion";
let Banner = () => {
  return (
    <>
      <section className="py-20">
        <div className="container ">
          <div className="flex items-center gap-16 justify-between flex-row max-md:flex-col">
            <div className="relative flex justify-center w-2/5 max-md:w-full">
              <motion.img
                variants={imgAni}
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                className="max-w-[280px] relative z-10 dropShadow-3xl max-mobile:w-[220px]"
                src={BannerImg}
              />
              <motion.div
                variants={imgBg}
                initial="offscreen"
                whileInView="onscreen"
                className="absolute w-80 h-80 -z-0	bg-lightYellow top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full max-mobile:w-[260px] max-mobile:h-[260px]"
              ></motion.div>
            </div>

            <motion.div
              variants={staggerSlide}
              initial="offscreen"
              whileInView="onscreen"
              className="space-y-5 w-3/5 max-md:w-full max-md:flex flex-col items-center text-center"
            >
              <motion.h2
                variants={slideUp}
                className="text-4xl font-bold uppercase font-league max-md:text-[31px]"
              >
                the best yummy food in the town
              </motion.h2>
              <motion.p variants={slideUp} className="max-md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                dicta autem sit est explicabo dolorem?
              </motion.p>
              <motion.div variants={slideUp}>
                <button className="bg-darkGreen text-white capitalize px-6 py-1.5 rounded-full">
                  order now
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
