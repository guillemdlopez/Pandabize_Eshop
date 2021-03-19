import React from "react";
import PropTypes from "prop-types";

const WheelSizeInputs = ({
  wheelSizes,
  handleInputChange,
  fetchAssociations,
  setPrice,
  setPriceWheel,
}) => {
  return (
    <ul className="block-list-center">
      {wheelSizes?.map((customization) => (
        <li key={customization.id} id="wheel-sizes">
          <label htmlFor={customization.name}>
            {customization.name}: <strong>{customization.value}</strong>
          </label>
          <br />
          <input
            type="radio"
            name="wheelSize"
            onClick={(e) => {
              handleInputChange(e);
              fetchAssociations(customization.id, e);
              setPrice(customization.price);
              setPriceWheel(customization.price);
            }}
            value={customization.id}
            className="ml-2"
          />
        </li>
      ))}
    </ul>
  );
};

WheelSizeInputs.propTypes = {
  wheelSizes: PropTypes.array,
  handleInputChange: PropTypes.func.isRequired,
  fetchAssociations: PropTypes.func.isRequired,
  setPriceWheel: PropTypes.func.isRequired,
};

export default WheelSizeInputs;
