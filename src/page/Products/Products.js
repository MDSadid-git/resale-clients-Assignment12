import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../hooks/useTitle";
import ProductsCart from "./ProductsCart";

const Products = () => {
  useTitle("Products");
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://resale-server-eight.vercel.app/resalesPhone`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleBook = (data) => {
    // console.log(data);
  };

  return (
    <div className="my-10 mx-auto">
      <div className="text-center mb-4">
        <p className="text-5xl font-extrabold text-pink-600 pt-5 mb-3">
          Our Services
        </p>
        <p>
          Find second-hand mobile phones for sale near you at the best price.{" "}
          Explore the wide range of used mobile
          <br /> phones from top brands like Apple, Samsung, OPPO.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products.map((pro) => (
          <ProductsCart
            key={pro._id}
            ser={pro}
            handleBook={handleBook}
          ></ProductsCart>
        ))}
      </div>
    </div>
  );
};

export default Products;
