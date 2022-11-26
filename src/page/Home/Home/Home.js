import React from "react";
import Products from "../../Products/Products";
import Carousel from "../Banner/Carasole";
import Divider from "../Divider/Divider";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Products></Products>
      <Divider></Divider>
    </div>
  );
};

export default Home;
