import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutFrom";
import useTitle from "../../../hooks/useTitle";

const Payment = () => {
  useTitle("Payment");
  const myData = useLoaderData();
  const { price, productName } = myData;
  const stripePromise = loadStripe(
    "pk_test_51M6jEQDrzXJQqF8KpkwmFSbqT73Jfs00DUx9H0ANGW5P55Cf0duSokWAhWWiVxkk2CCTVeTT7KDt7zP6tJ7Z5iYD00a9yMrEHL"
  );
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <progress className="progress w-56 mx-auto"></progress>;
  }
  return (
    <div>
      <h3 className="text-3xl">My Payment Name: {productName}</h3>
      <p className="text-xl my-5">
        Please pay <strong>${price}</strong> for {productName}
      </p>
      <div className=" flex items-center justify-center">
        <div className="w-96 my-12 bg-slate-100 p-5 rounded-xl">
          <Elements stripe={stripePromise}>
            <CheckoutForm myData={myData} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
