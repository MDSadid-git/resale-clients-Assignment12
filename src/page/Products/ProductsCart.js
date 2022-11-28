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
      </div>
    </div>
  );
};

export default ServicesCart;
