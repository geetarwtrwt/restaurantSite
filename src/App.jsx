import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import HotDessert from "./component/HotDessert";
import Banner from "./component/Banner";
import PopularRecipes from "./component/PopularRecipes";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";

let App = () => {
  return (
    <>
      <div className="bg-white2  ">
        <NavBar />
        <Hero />
        <HotDessert />
        <Banner />
        <PopularRecipes />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
