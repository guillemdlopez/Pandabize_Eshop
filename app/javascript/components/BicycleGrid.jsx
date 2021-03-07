import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import BicycleCard from "./BicycleCard";
import icon from "../../assets/images/loading_spinner.png";
import { userContext } from "../context/userContext";

const BicycleGrid = () => {
  const { data, loading, error } = useFetch("/api/v1/bicycles");

  const { user } = useContext(userContext);
  return (
    <>
      <div className="banner">
        <div className="container">
          <h1 className="banner-greeting">
            Welcome back, <strong> {user}</strong>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="cards mb-5 mt-4">
          {loading ? (
            <img src={icon} className="spinner" />
          ) : (
            data?.map((bicycle) => (
              <BicycleCard key={bicycle.id} {...bicycle} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BicycleGrid;
