import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { userContext } from "../context/userContext";

const ModalOrder = ({
  content,
  name,
  photo,
  price,
  setSuccessMsg,
  successMsg,
  displaySuccess,
}) => {
  const { user } = useContext(userContext);
  const history = useHistory();
  console.log(typeof displaySuccess);

  const goToDashboard = () => {
    history.push("/dashboard");
  };

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div className="modal-order animate__animated animate__fadeIn">
      <div className="text-center">
        <i className="far fa-check-circle fa-5x mb-3 text-success text-center"></i>
        <p className="mb-4">
          <strong>{user}</strong>, {content}
        </p>
      </div>
      <div className="order-card d-flex align-items-center">
        <img src={photo} className="order-card-img" />
        <div className="order-card-content ml-4">
          <ul className="block-list-left mb-0">
            <li className="mb-0">
              <strong>Bicycle:</strong> {name}
            </li>
            <li className="mb-0">
              <strong>Price:</strong>{" "}
              <span className="price-tag">{price.toFixed(2)} €</span>
            </li>
          </ul>
        </div>
      </div>
      <button
        className="btn btn-success btn-block mt-5"
        onClick={goToDashboard}
      >
        Go to dashboard
      </button>
      <button className="btn-customized" onClick={goToHomePage}>
        Home
      </button>
    </div>
  );
};

ModalOrder.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
  successMsg: PropTypes.object.isRequired,
  displaySuccess: PropTypes.bool.isRequired,
};

export default ModalOrder;
