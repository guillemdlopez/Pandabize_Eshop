import React from "react";
import OrderCard from "./OrderCard";

const OrdersList = ({ orders }) => {
  return (
    <>
      {orders?.reverse().map((order) => {
        return <OrderCard {...order} key={order.id} />;
      })}
    </>
  );
};

export default OrdersList;
