import React from "react";

import "../styles/Popup.css";

function Popup(props) {
  const { selectedCard, onClose } = props;
  console.log(selectedCard)
  return (
    <div className={`Popup ${selectedCard && "Popup-open"}`}>
      <div className="popup__container popup__container_type_img">
        <button
          type="button"
          className="popup__close popup__close_type_big-image"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        <img
          className="popup__image"
          src={selectedCard?.link}
          alt={selectedCard?.name}
        />

        <p className="popup__caption">{selectedCard?.name}</p>
      </div>
    </div>
  );
}

export default Popup;
