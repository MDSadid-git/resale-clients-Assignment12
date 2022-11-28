import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const ServicesCart = ({ ser: { image, productName, _id } }) => {
  const { user } = useContext(AuthContext);
  const datadetails = {
    email: user.email,
    productName,
  };
  return (
    <div className="card w-4/5 glass mx-auto my-9">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>

        <hr />
        <div className="card-actions justify-start">
          <Link to={`/allproducts/${_id}`}>
            <button className="btn btn-secondary">details</button>
          </Link>
        </div>
        <div>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
