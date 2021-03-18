import { mount } from "enzyme";
import React from "react";
import Dashboard from "../../components/Dashboard";
import { userContext } from "../../context/userContext";

describe("Testing the <Dashboard/> component", () => {
  test("should render the component correctly", () => {
    const wrapper = mount(
      <userContext.Provider value={{ user: "Guillem", userId: 10 }}>
        <Dashboard />
      </userContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
