import React from "react";
import { Link } from "react-router-dom";

const ServicesCart = ({ ser: { img, title, _id, description, PhoneName } }) => {
  return (
    <div className="card w-4/5 glass mx-auto my-9">
      <figure>
        <img src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description?.length > 60 ? (
            <>{description.slice(0, 60) + "..."}</>
          ) : (
            description
          )}
        </p>
        <hr />
        <div className="card-actions justify-start">
          <Link to={`/phone/${_id}`}>
            <button className="btn btn-secondary">{PhoneName}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
