import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../config/variables";
import _ from "lodash";
import { backgroundColor, isColor } from "../config/functions";

const BicycleShow = () => {
  const [bicycle, setBicycle] = useState();
  const { bicycleId } = useParams();

  const getBicycle = async (url) => {
    try {
      const getJSON = await fetch(url);
      const res = await getJSON;
      const data = await res.json();
      if (!data) {
        const message = "Not possible to retrieve data from API";
        throw new Error(message);
      }
      setBicycle(data);
    } catch (error) {
      console.error(error);
    }
  };

  useMemo(() => getBicycle(`${API_BASE_URL}${bicycleId}`), [bicycleId]);

  const wheelSize = bicycle?.customizations.filter(
    (custom) => custom.name === "Wheel size"
  );
  const rimColor = bicycle?.customizations.filter(
    (custom) => custom.name === "Rim color"
  );
  const saddleColor = bicycle?.customizations.filter(
    (custom) => custom.name === "Saddle color"
  );

  return (
    <div className="bicycle-show container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12  mb-4">
          <img src={bicycle?.photo} className="bicycle-photo" />
        </div>
        <div className="col-lg-5 col-md-12 bicycle-info mb-5">
          <h2 className="bicycle-name">{bicycle?.name}</h2>
          <p className="text-muted bicycle-description">
            {bicycle?.description}
          </p>

          {/* WHEEL SIZE CUSTOMIZATION */}
          {wheelSize?.length === 0 ? (
            ""
          ) : (
            <p className="mb-3 custom-name">
              <strong>Wheel size{wheelSize?.length > 1 ? "s" : ""}</strong>{" "}
            </p>
          )}

          <div className="customization d-flex">
            {wheelSize?.map((size) => {
              return (
                <ul className="inline-list mb-4" key={size.id}>
                  <li className="custom-list-item mr-2">{size.value}</li>
                </ul>
              );
            })}
          </div>

          {/* RIM COLOR CUSTOMIZATION */}
          {rimColor?.length === 0 ? (
            ""
          ) : (
            <p className="mb-0 custom-name">
              <strong>Rim color{rimColor?.length > 1 ? "s" : ""}</strong>
            </p>
          )}

          <div className="customization d-flex mb-3" id="color-customization">
            {rimColor?.map((color) => {
              return (
                <div
                  className="color-value mr-2"
                  style={backgroundColor(color.value)}
                  data-color={color.value}
                  key={color.id}
                ></div>
              );
            })}
          </div>

          {/* SADDLE COLOR CUSTOMIZATION */}
          {saddleColor?.length === 0 ? (
            ""
          ) : (
            <p className="mb-0 custom-name">
              <strong>Saddle color{saddleColor?.length > 1 ? "s" : ""}</strong>
            </p>
          )}
          <div className="customization d-flex mb-3" id="color-customization">
            {saddleColor?.map((color) => {
              return (
                <div
                  className="color-value mr-2"
                  style={backgroundColor(color.value)}
                  data-color={color.value}
                  key={color.id}
                ></div>
              );
            })}
          </div>
          <Link to={`/bicycle/${bicycleId}/order`}>
            <button
              className="btn btn-outline-success btn-block mb-5"
              id="btn-to-form"
            >
              Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BicycleShow;
