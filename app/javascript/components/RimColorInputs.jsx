import React from "react";
import PropTypes from "prop-types";
import { borderColor } from "../config/functions";

const RimColorInputs = ({
  rimColors,
  handleInputChange,
  setPrice,
  setPriceRim,
  priceRim,
  price,
  setErrorMsg,
  displayError,
  errorMsgContent,
}) => {
  return (
    <>
      <p className="text-muted text-center mb-0">Rim Color</p>
      <ul
        className="block-list-center customizations-list text-center animate__animated animate__fadeIn"
        id="custom-associations"
      >
        {rimColors.map((color) => {
          return (
            <li key={color.id} id="rim-colors" style={borderColor(color.value)}>
              <label htmlFor={color.id} className="mb-0 mr-2">
                {color.value}
              </label>
              <input
                type="radio"
                name="rimColor"
                key={color.id}
                value={color.id}
                onClick={(e) => {
                  handleInputChange(e);
                  setPriceRim((priceRim = 0));
                  setPriceRim(color.price);
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

RimColorInputs.propTypes = {
  rimColors: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setPriceRim: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  setErrorMsg: PropTypes.func.isRequired,
  displayError: PropTypes.bool.isRequired,
  errorMsgContent: PropTypes.string.isRequired,
};

export default RimColorInputs;
