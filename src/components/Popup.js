import React from "react";

import "../styles/Popup.css";

function Popup(props) {
  const { openPopup, popupData, onClose } = props;
  return (
    <div className={`Popup ${openPopup && "Popup-open"}`}>
      <div className="Popup-container">
        <button
          type="button"
          className="Popup-close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        <img
          className="Popup-image"
          src={popupData?.link}
          alt={popupData?.title}
        />

        <h3 className="Popup-title">{popupData?.title}</h3>
        <p className="Popup-subtitle">{popupData?.subtitle}</p>
        <span className="Popup-tagline">{popupData?.tagline}</span>
        <p className="Popup-text">{popupData?.abv}</p>
        <p className="Popup-text">{popupData?.food}</p>
      </div>
    </div>
  );
}

export default Popup;
