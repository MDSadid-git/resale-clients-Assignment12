import React from "react";

const ConfirmModal = ({
  title,
  message,
  closeModle,
  handleDeletuser,
  deletingUser,
  successButoonName,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="deletemodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => handleDeletuser(deletingUser)}
              htmlFor="deletemodal"
              className="btn"
            >
              {successButoonName}
            </label>
            <label
              onClick={closeModle}
              htmlFor="deletemodal"
              className="btn btn-outline"
            >
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
