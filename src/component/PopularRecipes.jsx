import React from "react";
import Food1 from "../assets/food.png";
import Food2 from "../assets/food2.png";
import Food3 from "../assets/banner.png";
import { motion } from "framer-motion";
import { staggerSlide, slideUp, imgAni } from "../assets/Motion";
let hotDessertData = [
  {
    id: 1,
    name: "Hot Cake",
    url: Food1,
    price: 450,
  },
  {
    id: 2,
    name: "Hot Cake",
    url: Food2,
    price: 800,
  },
  {
    id: 3,
    name: "Hot Cake",
    url: Food3,
    price: 999,
  },
];
let PopularRecipes = () => {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <motion.h3
            variants={slideUp}
            initial="offscreen"
            whileInView="onscreen"
            className="text-center pb-8 text-4xl uppercase tracking-widest font-semibold font-leagueGothic "
          >
            our popular recipe
          </motion.h3>

          <motion.div
            variants={staggerSlide}
            initial="offscreen"
            whileInView="onscreen"
            className="flex justify-evenly max-md:justify-between gap-4 max-sm:flex-col max-sm:gap-8"
          >
            {hotDessertData.map((e) => {
              return (
                <motion.div
                  key={e.id}
                  variants={slideUp}
                  className="group rounded-xl shadow-xl  px-3 py-2 max-sm:flex justify-evenly max-sm:py-4"
                >
                  <motion.img
                    variants={imgAni}
                    whileHover="hover"
                    src={e.url}
                    className="w-32 h-32 object-cover"
                  />

                  <div className="text-center space-y-1">
                    <button className="bg-darkGreen px-3 py-1 rounded-full text-white capitalize opacity-0	 group-hover:opacity-100 duration-500 ">
                      order now
                    </button>
                    <h4 className="text-lg font-bold">{e.name}</h4>
                    <p className="text-lightYellow font-semibold">
                      ₹ {e.price}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default PopularRecipes;
