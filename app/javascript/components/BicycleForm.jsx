import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  API_CUSTOMIZATIONS_URL,
  API_ORDERS_URL,
  API_BICYCLES_URL,
} from "../fixtures/variables";
import { userContext } from "../context/userContext";
import useForm from "../hooks/useForm";
import ModalOrder from "./ModalOrder";
import RimColorInputs from "./RimColorInputs";
import SaddleColorInputs from "./SaddleColorInputs";
import WheelSizeInputs from "./WheelSizeInputs";
import { server } from "../fixtures/config";

const BicycleForm = () => {
  // we able to navigate and to get the bicycleId from the url params
  const history = useHistory();
  const { bicycleId } = useParams();
  const { userId } = useContext(userContext);

  // get information about the current bicycle from the API thorugh its id
  const [bicycle, setBicycle] = useState({});
  const { name, photo } = bicycle;

  // selecting only WHEEL SIZES
  const wheelSizes = bicycle?.customizations?.filter(
    (custom) => custom.name === "Wheel size"
  );

  // retrieving available Customizations from the API
  const [availableCustomizations, setAvailableCustomizations] = useState([]);

  const [formValues, handleInputChange, setFormValues] = useForm({
    wheelSize: "",
    rimColor: "",
    saddleColor: "",
  });

  const { wheelSize, rimColor, saddleColor } = formValues;

  // be able to update the bicycle's price
  const [price, setPrice] = useState(0);
  // be ablte to update the wheel size price
  const [priceWheel, setPriceWheel] = useState(0);
  // be ablte to update the rim color price
  const [priceRim, setPriceRim] = useState(0);
  // be ablte to update the saddle color price
  const [priceSaddle, setPriceSaddle] = useState(0);

  // error msg when the form is not correctly submitted
  const [errorMsg, setErrorMsg] = useState({
    displayError: false,
    errorMsgContent: "",
  });
  const { displayError, errorMsgContent } = errorMsg;

  // success msg when the form is correctly submited
  const [successMsg, setSuccessMsg] = useState({
    displaySuccess: false,
    successMsgContent: "",
  });
  const { displaySuccess, successMsgContent } = successMsg;

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    fetch(`${server}${API_BICYCLES_URL}${bicycleId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Bicycle not found ${res.status}`);

        return res.json();
      })
      .then((data) => {
        if (!data) throw new Error(`No bicycle was found!`);

        setBicycle(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [bicycleId]);

  const fetchAssociations = (id, { target }) => {
    setFormValues({
      wheelSize: target.value,
      rimColor: "",
      saddleColor: "",
    });
    setPriceRim(0);
    setPriceSaddle(0);

    setAvailableCustomizations([]);
    fetch(`${server}${API_CUSTOMIZATIONS_URL}${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Customizations not found ${res.status}`);

        return res.json();
      })
      .then((data) => {
        if (!data) throw new Error("No customizations were found!");
        setAvailableCustomizations(data.associations);
      })
      .catch((err) => {
        console.error(err);
      });

    setErrorMsg({ displayError: false, errorMsgContent: "" });
  };

  const isFormValid = () => {
    const arr = Object.values(formValues);
    if (arr[0] === "") {
      setErrorMsg({
        displayError: true,
        errorMsgContent: "Your have to select a Wheel size",
      });
      return false;
    }
    if (arr[1] === "" && arr[2] === "") {
      setErrorMsg({
        displayError: true,
        errorMsgContent: "You have to select a Rim color and/or a Saddle Color",
      });
      return false;
    }
    return true;
  };

  const rimColors = availableCustomizations?.filter(
    (custom) => custom.name === "Rim color"
  );
  const saddleColors = availableCustomizations?.filter(
    (custom) => custom.name === "Saddle color"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const customs = [+wheelSize, +rimColor, +saddleColor];

      if (customs.includes(0)) {
        const ind = customs.findIndex((custom) => custom === 0);
        customs.splice(ind, 1);
      }

      const roundedPrice = price.toFixed(2);

      fetch(`${server}${API_ORDERS_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order: {
            bicycle_id: +bicycleId,
            user_id: userId,
            amount: roundedPrice,
            customization_ids: customs,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      setErrorMsg({ displayError: false, errorMsgContent: "" });
      setSuccessMsg({
        displaySuccess: true,
        successMsgContent: "your order has been succesfully completed!",
      });
    }
  };

  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row align-items-start mt-5 mb-5">
        <div className="col-lg-7 col-md-12 mb-4">
          <img src={photo} className="bicycle-photo" />
        </div>
        <div className="col-lg-5 col-md-12 order-form">
          <h2 className="mb-0">{name}</h2>
          {displayError && (
            <div className="customized-error animate__animated animate__fadeIn">
              {errorMsgContent}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <WheelSizeInputs
              wheelSizes={wheelSizes}
              handleInputChange={handleInputChange}
              fetchAssociations={fetchAssociations}
              setPrice={setPrice}
              setPriceWheel={setPriceWheel}
              setPriceRim={setPriceRim}
              setPriceSaddle={setPriceSaddle}
            />

            {rimColors?.length >= 1 ? (
              <RimColorInputs
                rimColors={rimColors}
                handleInputChange={handleInputChange}
                setPrice={setPrice}
                priceRim={priceRim}
                setPriceRim={setPriceRim}
                price={price}
                setErrorMsg={setErrorMsg}
                displayError={displayError}
                errorMsgContent={errorMsgContent}
              />
            ) : (
              <div className="block-list-center" id="custom-associations"></div>
            )}
            {saddleColors?.length >= 1 ? (
              <SaddleColorInputs
                saddleColors={saddleColors}
                handleInputChange={handleInputChange}
                setPrice={setPrice}
                setPriceSaddle={setPriceSaddle}
                price={price}
                setErrorMsg={setErrorMsg}
                displayError={displayError}
                errorMsgContent={errorMsgContent}
              />
            ) : (
              <div className="block-list" id="custom-associations"></div>
            )}
            <hr />
            <ul className="block-list-left">
              <li>
                <strong className="text-muted">Wheel size: </strong>
                {priceWheel} €
              </li>
              <li>
                <strong className="text-muted">Rim color: </strong>
                {priceRim} €
              </li>
              <li>
                <strong className="text-muted">Saddle color: </strong>
                {priceSaddle} €
              </li>
              <li className="mt-4">
                <strong className="text-muted">TOTAL:</strong>
                <span className="price-tag"> {price.toFixed(2)} €</span>
              </li>
            </ul>
            <button
              type="submit"
              className="btn btn-success btn-block mb-4"
              id="btn-form"
            >
              Buy
            </button>
          </form>
          <button className="btn-customized" onClick={goBack}>
            Go back
          </button>
        </div>
        {displaySuccess && (
          <div className="overlay animate__animated animate__fadeIn"></div>
        )}

        {displaySuccess && (
          <ModalOrder content={successMsgContent} {...bicycle} price={price} />
        )}
      </div>
    </div>
  );
};

export default BicycleForm;
