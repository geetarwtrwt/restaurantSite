import React from "react";
import BannerImg from "../assets/banner.png";
import PersonImg from "../assets/person.jpg";
import { motion } from "framer-motion";
import { imgBg, imgAni, staggerSlide, slideUp } from "../assets/Motion";

let Testimonial = () => {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-16 justify-between flex-row max-md:flex-col">
            <motion.div
              variants={staggerSlide}
              initial="offscreen"
              whileInView="onscreen"
              className="space-y-5 w-3/5 max-md:w-full max-md:flex items-center gap-0 flex-col max-sm: text-center"
            >
              <motion.p variants={slideUp} className="text-xl font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                debitis. Blanditiis modi incidunt doloremque in cumque corrupti
                iusto deleniti odit explicabo repellendus itaque, sunt nulla
                suscipit excepturi maxime. Quod, animi?
              </motion.p>
              <motion.div
                variants={staggerSlide}
                initial="offscreen"
                whileInView="onscreen"
                className="flex gap-4"
              >
                <motion.img
                  variants={slideUp}
                  src={PersonImg}
                  className="w-12 h-12	object-cover rounded-full"
                />
                <motion.div variants={slideUp}>
                  <h4 className="font-bold text-lg">John</h4>
                  <p className="text-sm">Manager</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="relative flex justify-center w-2/5 max-md:w-full">
              <motion.img
                variants={imgAni}
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                className="max-w-[240px] relative z-10 dropShadow-3xl"
                src={BannerImg}
              />
              <motion.div
                variants={imgBg}
                initial="offscreen"
                whileInView="onscreen"
                className="absolute w-64 h-64 -z-0	bg-lightYellow top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full	"
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
