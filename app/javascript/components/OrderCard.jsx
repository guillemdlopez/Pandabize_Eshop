import React from "react";

const OrderCard = ({ customizations, bicycle, photo, amount }) => {
  return (
    <div className="order-card order-card-dashboard">
      <img src={photo} className="dashboard-card-img" />
      <div className="dashboard-card-content">
        <ul className="block-list-left ml-3 mb-0">
          <li>
            <strong>Bicycle:</strong> {bicycle}
          </li>
          <li>
            <strong>Amount:</strong> {amount} €
          </li>
          {customizations.map((custom) => {
            return (
              <li key={custom.id} className="custom-item mt-2">
                <strong>{custom.name}:</strong> {custom.value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;
