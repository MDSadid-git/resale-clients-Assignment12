import { useQuery } from "@tanstack/react-query";
import React from "react";
import BookModal from "./BookModal/BookModal";
import ProductsCart from "./ProductsCart";

const Products = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/resalesPhone");
      const data = await res.json();
      return data;
    },
  });

  const handleBook = (data) => {
    // setMyModle(data);
    console.log(data);
  };

  return (
    <div className="my-10 py-10 mx-auto">
      <hr />
      <div className="text-center mb-4">
        <p className="text-5xl font-extrabold text-pink-600 pt-5">
          Our Services
        </p>
        <h2 className="text-5xl font-semibold my-7">Resale Phone</h2>
        <p>
          Find second-hand mobile phones for sale near you at the best price.{" "}
          <br /> Explore the wide range of used mobile phones from <br /> top
          brands like Apple, Samsung, OPPO.
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
      <BookModal></BookModal>
    </div>
  );
};

export default Products;
