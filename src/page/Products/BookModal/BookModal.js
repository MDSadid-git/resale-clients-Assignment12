import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../UserContext/UserContext";

const BookModal = ({ myModle }) => {
  const { user } = useContext(AuthContext);
  const handleBooking = (data) => {
    const booking = {
      productName: data.name,
      price: data.resalePrice,
      email: user?.email,
    };
    fetch(`http://localhost:5000/bookings`, {
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
          <p className="py-4">Location: {myModle?.location}</p>
          <p className="py-4">ReslaePrice: {myModle?.resalePrice}</p>
          <div className="modal-action">
            <label
              onClick={() => handleBooking(myModle)}
              htmlFor="my-modal"
              className="btn"
            >
              Add Book
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
