import React from "react";
import BannerImg from "../assets/banner.png";
import { motion } from "framer-motion";
import { imgBg, imgAni, slideUp } from "../assets/Motion";
let Banner = () => {
  return (
    <>
      <section className="py-14">
        <div className="container ">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <div className="relative">
              <motion.img
                variants={imgAni}
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                className="max-w-[300px] z-10"
                src={BannerImg}
              />
              <div className="absolute w-80 h-80	bg-lightYellow top-0 rounded-full -z-10	"></div>
            </div>

            <div className="space-y-5">
              <h2 className="text-3xl font-bold uppercase font-league">
                the best yummy food in the town
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                dicta autem sit est explicabo dolorem?
              </p>
              <div>
                <button className="bg-darkGreen text-white capitalize px-6 py-1.5 rounded-full">
                  order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
