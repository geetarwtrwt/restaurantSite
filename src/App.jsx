import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import HotDessert from "./component/HotDessert";
import Banner from "./component/Banner";

let App = () => {
  return (
    <>
      <div className="bg-white2">
        <NavBar />
        <Hero />
        <HotDessert />
        <Banner />
      </div>
    </>
  );
};

export default App;
