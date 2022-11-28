import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const AllProducts = () => {
  const { user } = useContext(AuthContext);

  const allData = useLoaderData();
  console.log(allData);
  const datadetails = {
    email: user.email,
    productName: allData.name,
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {allData.data.map((ses, i) => (
        <>
          <div className="card w-4/5 glass mx-auto my-9" key={ses._id}>
            <figure>
              <img src={ses.image} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ses.datePosted}</h2>
              <h2 className="card-title">{ses.location}</h2>
              <p>Name: {ses.name}</p>
              <p>OriginalPrice: {ses.originalPrice}</p>
              <p>ResalePrice: {ses.resalePrice}</p>
              <h2 className="card-title">Seller: {ses.sellerName}</h2>
              <hr />
              <div className="card-actions justify-start">
                <label htmlFor="my-modal" className="btn">
                  Book Now
                </label>
              </div>
            </div>
          </div>
          <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{ses.name}</h3>
                <p className="py-4">{user.email}</p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AllProducts;
