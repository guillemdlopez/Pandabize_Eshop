import React from "react";
import { mount, shallow } from "enzyme";
import BicycleGrid from "../../components/BicycleGrid";
import { userContext } from "../../context/userContext";

describe("Testing the <BicycleGrid/> component", () => {
  const userInfo = {
    user: "Guillem",
    userId: 1,
  };

  const wrapper = mount(
    <userContext.Provider value={{ userInfo }}>
      <BicycleGrid />
    </userContext.Provider>
  );
});
