import React from "react";

import "../styles/Popup.css";

function Popup(props) {
  const { popupData, onClose } = props;
  console.log(popupData?.title);
  return (
    <div className={`Popup ${popupData && "Popup-open"}`}>
      <div className="Popup-container">
        <button
          type="button"
          className="popup__close popup__close_type_big-image"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        <img
          className="popup__image"
          src={popupData?.link}
          alt={popupData?.title}
        />

        <p className="popup__caption">{popupData?.title}</p>
      </div>
    </div>
  );
}

export default Popup;
