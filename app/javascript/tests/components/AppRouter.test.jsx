import { mount, shallow } from "enzyme";
import React from "react";
import AppRouter from "../../components/AppRouter";
import { userContext } from "../../context/userContext";

describe("Testing the <AppRouter/> component", () => {
  const userInfo = {
    user: "Guillem",
    userId: 1,
  };
  const wrapper = mount(
    <userContext.Provider value={{ userInfo }}>
      <AppRouter />
    </userContext.Provider>
  );
  test("should render it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
