import React, { useContext, useMemo, useState } from "react";
import OrdersList from "./OrdersList";
import Sidebar from "./Sidebar";

import { API_USERS_URL } from "../fixtures/variables";
import { userContext } from "../context/userContext";
import { server } from "../fixtures/config";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});

  const { userId } = useContext(userContext);

  const getUserInfo = async () => {
    try {
      const getJSON = await fetch(`${server}${API_USERS_URL}${userId}`);
      if (!getJSON.ok) throw new Error(`Problem getting location data`);

      const res = await getJSON;
      if (!res.ok) throw new Error(`Bicycle not found ${res.status}`);

      const data = await res.json();
      setUserInfo(data);
    } catch (err) {
      setUserInfo(err);
    }
  };
  useMemo(() => getUserInfo(), [userId]);

  const currentUser = userInfo?.user;
  console.log(userInfo);

  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-12 mb-4">
          <Sidebar {...currentUser} orders={userInfo.orders} />
        </div>
        <div className="col-lg-7 col-md-12">
          <OrdersList orders={userInfo.orders} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
