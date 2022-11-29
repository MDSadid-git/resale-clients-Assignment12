import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "../BookModal/BookModal";

const CataProducts = () => {
  const datass = useLoaderData();
  const [myModle, setMyModle] = useState("");
  const handleBook = (data) => {
    setMyModle(data);
    console.log(data);
  };
  console.log(myModle);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {datass.data.map((ses, i) => (
          <>
            <div className="card w-4/5 glass mx-auto my-9" key={i}>
              <figure>
                <img src={ses?.image} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ses?.datePosted}</h2>
                <h2 className="card-title">{ses?.location}</h2>
                <p>Name: {ses?.name}</p>
                <p>OriginalPrice: {ses?.originalPrice}</p>
                <p>ResalePrice: {ses?.resalePrice}</p>
                <h2 className="card-title">Seller: {ses?.sellerName}</h2>
                <hr />
                <div className="card-actions justify-start">
                  <label
                    onClick={() => handleBook(ses)}
                    htmlFor="my-modal"
                    className="btn"
                  >
                    Book Now
                  </label>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <BookModal myModle={myModle}></BookModal>
    </div>
  );
};

export default CataProducts;
