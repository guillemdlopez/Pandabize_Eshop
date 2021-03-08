import React from "react";
import { borderColor } from "../fixtures/functions";
import PropTypes from "prop-types";

const SaddleColorInputs = ({
  saddleColors,
  handleInputChange,
  setPrice,
  setPriceSaddle,
  price,
  setErrorMsg,
  displayError,
  errorMsgContent,
}) => {
  return (
    <>
      <p className="text-muted text-center mb-0">Saddle color</p>
      <ul
        className="block-list-center customizations-list text-center animate__animated animate__fadeIn"
        id="custom-associations"
      >
        {saddleColors.map((color) => {
          return (
            <li
              key={color.id}
              id="saddle-colors"
              style={borderColor(color.value)}
            >
              <label htmlFor={color.id} className="mb-0 mr-2">
                {color.value}
              </label>
              <input
                type="radio"
                name="saddleColor"
                key={color.id}
                value={color.id}
                onClick={(e) => {
                  handleInputChange(e);
                  setPriceSaddle(color.price);
                  setPrice(price + color.price);
                  setErrorMsg({ displayError: false, errorMsgContent: "" });
                }}
                data-id={color.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

SaddleColorInputs.propTypes = {
  saddleColors: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setPriceSaddle: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  setErrorMsg: PropTypes.func.isRequired,
  displayError: PropTypes.bool.isRequired,
  errorMsgContent: PropTypes.string.isRequired,
};

export default SaddleColorInputs;
