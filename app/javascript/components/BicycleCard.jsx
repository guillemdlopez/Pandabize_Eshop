import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { backgroundColor, isColor } from "../config/functions";

const BicycleCard = ({ id, name, description, photo, customizations }) => {
  const lowestPrice = function () {
    const prices = customizations.map((custom) => custom.price);
    return Math.min(...prices);
  };

  return (
    <Link to={`bicycle/${id}`}>
      <div className="bike-card" data-bike-id={id}>
        <img src={photo} className="bike-img" />
        <div className="bike-card-content">
          <p>
            <strong>{name}</strong>
          </p>
          <p className="text-black-50">
            {description.slice(0, 40)}
            {description.length > 30 ? "..." : ""}
          </p>
          <div className="d-flex mb-3">
            {customizations.map((custom) =>
              isColor(custom.value) ? (
                <div
                  className="color-value-card mr-1"
                  style={backgroundColor(custom.value)}
                  key={custom.id}
                ></div>
              ) : (
                ""
              )
            )}
          </div>
          {lowestPrice() !== Infinity ? (
            <div className="d-flex align-items-center">
              <p className="text-muted mb-0">from</p>
              <p className="ml-2 lowest-price mb-0">{lowestPrice()} €</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};

BicycleCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  customizations: PropTypes.array.isRequired,
};

export default BicycleCard;
