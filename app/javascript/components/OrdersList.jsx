import React from "react";
import OrderCard from "./OrderCard";
import PropTypes from "prop-types";

const OrdersList = ({ orders }) => {
  return (
    <>
      {orders?.reverse().map((order) => {
        return <OrderCard {...order} key={order.id} />;
      })}
    </>
  );
};

OrdersList.propTypes = {
  orders: PropTypes.array,
};

export default OrdersList;
