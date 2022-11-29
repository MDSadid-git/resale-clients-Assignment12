import React from "react";

const BookModal = ({ myModle }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{myModle?.name}</h3>
          <p className="py-4">Location: {myModle?.location}</p>
          <p className="py-4">ReslaePrice: {myModle?.resalePrice}</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Add Book
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
