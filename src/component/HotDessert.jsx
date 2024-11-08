import React from "react";
import Food1 from "../assets/food.png";
import Food2 from "../assets/food2.png";
import Food3 from "../assets/banner.png";
import { motion } from "framer-motion";
import { staggerSlide, slideUp } from "../assets/Motion";

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

let HotDessert = () => {
  return (
    <>
      <section className="py-14">
        <motion.div
          variants={staggerSlide}
          initial="offscreen"
          whileInView="onscreen"
          className="container"
        >
          <motion.h3
            variants={slideUp}
            className="text-center pb-4 text-3xl font-semibold text-darkGreen"
          >
            Hot Desserts
          </motion.h3>

          <div className="flex flex-col items-center justify-between md:flex-row gap-8">
            {hotDessertData.map((e) => {
              return (
                <motion.div
                  variants={slideUp}
                  key={e.id}
                  className="group flex gap-4 items-center shadow-lg p-2 px-4 rounded-xl"
                >
                  <img
                    className="w-24 group-hover:scale-125 group-hover:rotate-90  duration-[0.5s]"
                    src={e.url}
                  />
                  <div className=" text-xl">
                    <h3 className=" font-semibold">{e.name}</h3>
                    <p className="text-lightYellow">₹ {e.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default HotDessert;