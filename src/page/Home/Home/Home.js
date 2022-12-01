import React from "react";
import useTitle from "../../../hooks/useTitle";
import Products from "../../Products/Products";
import Carousel from "../Banner/Carasole";
import Divider from "../Divider/Divider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousel></Carousel>
      <Products></Products>
      <Divider></Divider>
    </div>
  );
};

export default Home;
