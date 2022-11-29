import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const ServicesCart = ({ ser: { image, productName, _id }, ser }) => {
  const { user } = useContext(AuthContext);
  const datadetails = {
    email: user?.email,
    productName,
  };

  return (
    <div>
      <div className="card w-4/5 glass mx-auto my-9 max-h-96">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>

          <hr />
          <div className="card-actions justify-start">
            <Link to={`/cataproducts/${_id}`}>
              <button className="btn btn-secondary">details</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <BookModal></BookModal> */}
    </div>
  );
};
// cataproducts
export default ServicesCart;
