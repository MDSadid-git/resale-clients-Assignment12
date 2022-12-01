import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../UserContext/UserContext";

const BookModal = ({ myModle }) => {
  const { user } = useContext(AuthContext);
  const [close, setClose] = useState(null);
  const closeModale = () => {
    setClose(null);
  };
  const handleBooking = (data) => {
    const booking = {
      productName: data.name,
      price: data.resalePrice,
      email: user?.email,
    };
    fetch(`https://resale-server-eight.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking success!!!");
        }
      });
    // console.log(booking);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{myModle?.name}</h3>
          <p className="py-2">Seller: {myModle?.sellerName}</p>
          <p className="">Location: {myModle?.location}</p>
          <p className="py-2">ReslaePrice: {myModle?.resalePrice}</p>
          <p className="">User: {user.displayName}</p>
          <p className="py-2">Email: {user.email}</p>
          <div className="modal-action">
            <label
              onClick={() => handleBooking(myModle)}
              htmlFor="my-modal"
              className="btn btn-secondary btn-sm"
            >
              Add Book
            </label>
            <label
              onClick={() => closeModale(close)}
              htmlFor="my-modal"
              className="btn btn-sm"
            >
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
