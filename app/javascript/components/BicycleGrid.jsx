import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import BicycleCard from "./BicycleCard";
import { userContext } from "../context/userContext";
import { API_BICYCLES_URL } from "../fixtures/variables";
import { server } from "../fixtures/config";

const BicycleGrid = () => {
  const { data, loading, error } = useFetch(`${server}${API_BICYCLES_URL}`);

  const { user } = useContext(userContext);
  return (
    <>
      <div className="banner">
        <div className="container">
          <h1 className="banner-greeting">
            Welcome back, <strong>{user}</strong>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="cards mb-5 mt-4 animate__animated animate__fadeIn">
          {data?.map((bicycle) => (
            <BicycleCard key={bicycle.id} {...bicycle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BicycleGrid;
