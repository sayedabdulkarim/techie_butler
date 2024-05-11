import React from "react";

const CardComponent = ({ item, handleClick, isView }) => {
  const { id, title, body } = item;
  return (
    <>
      <div className="content_container">
        <div className="details_section">
          <span className="text-gray">{"Title : "}</span>
          <strong className="heading_text">{title}</strong>
        </div>

        <div className="details_section">
          <span className="text-gray">{"Body : "}</span>
          <strong className="heading_text">{body}</strong>
        </div>
        {isView && (
          <button
            className="view_button"
            onClick={() => handleClick(title, id)}
          >
            View
          </button>
        )}
      </div>
    </>
  );
};

export default CardComponent;
