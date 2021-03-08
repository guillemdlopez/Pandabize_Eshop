import React, { useContext, useMemo, useState } from "react";
import fetch from "node-fetch";
import OrdersList from "./OrdersList";
import Sidebar from "./Sidebar";

import { API_USERS_URL } from "../config/variables";
import { userContext } from "../context/userContext";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});

  const { user, userId } = useContext(userContext);

  const getUserInfo = async (id) => {
    const getJSON = await fetch(`${API_USERS_URL}${userId}`);
    const res = await getJSON;
    const data = await res.json();
    setUserInfo(data);
  };
  useMemo(() => getUserInfo(userId), [userId]);
  const currentUser = userInfo?.user;
  console.log(currentUser);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4 col-md-12 mb-4">
          <Sidebar {...currentUser} orders={userInfo.orders} />
        </div>
        <div className="col-lg-8 col-md-12">
          <OrdersList orders={userInfo.orders} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
