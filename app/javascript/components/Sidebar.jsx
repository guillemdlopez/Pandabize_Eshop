import React from "react";
import { useHistory } from "react-router";

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
          <li>
            <strong>Full Name: </strong>
            {`${first_name} ${last_name}`}
          </li>
          <li>
            <strong>Orders: </strong> {orders?.length}
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

export default Sidebar;
