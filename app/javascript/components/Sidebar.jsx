import React from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

const Sidebar = ({ avatar, first_name, last_name, orders }) => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div className="sidebar d-flex align-items-center">
      <img src={avatar} className="avatar-md" />
      <div className="user-info">
        <ul className="sidebar-list ml-3">
          <li className="full_name-item">
            <strong>Full Name: </strong>
            {`${first_name} ${last_name}`}
          </li>
          <li className="orders-item">
            <strong>Orders:</strong> {orders?.length}
          </li>
          <li>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={goToHomePage}
            >
              Continue shopping
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  avatar: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  orders: PropTypes.array,
};

export default Sidebar;
