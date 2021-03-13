import React from "react";
import { mount } from "enzyme";
import BicycleGrid from "../../components/BicycleGrid";
import { userContext } from "../../context/userContext";
import useFetch from "../../hooks/useFetch";
import { BrowserRouter as Route, Switch } from "react-router-dom";

jest.mock("../../hooks/useFetch");

describe("Testing the <BicycleGrid/> component", () => {
  const userInfo = {
    user: "Guillem",
    userId: 1,
  };

  useFetch.mockReturnValue({
    data: [
      {
        id: 1,
        name: "Prettiest Bicycle",
        description: "This is the prettiest bicycle in the world. Buy it!",
        photo: "image.jpg",
        customizations: [
          {
            id: 26,
            name: "Wheel size",
            value: "15 inches",
            price: 9.23,
            bicycle_id: 1,
          },
          {
            id: 148,
            name: "Wheel size",
            value: "16 inches",
            price: 6.15,
            bicycle_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Coolest Bicycle",
        description: "This is the coolest bicycle in the world. Buy it!",
        photo: "image-2.jpg",
        customizations: [
          {
            id: 26,
            name: "Wheel size",
            value: "15 inches",
            price: 7.23,
            bicycle_id: 2,
          },
          {
            id: 148,
            name: "Wheel size",
            value: "16 inches",
            price: 5.15,
            bicycle_id: 2,
          },
        ],
      },
    ],
  });

  const wrapper = mount(
    <Route>
      <Switch>
        <userContext.Provider value={userInfo}>
          <BicycleGrid />
        </userContext.Provider>
      </Switch>
    </Route>
  );

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should display a greeting message to the current user", () => {
    const { user } = userInfo;
    expect(wrapper.find("h1").text().trim()).toBe(`Welcome back, ${user}`);
    expect(wrapper.find("h1").text().trim()).not.toBe(`Welcome back, Antonio`);
  });

  test("should contain a banner", () => {
    expect(wrapper.find(".banner").exists()).toBe(true);
  });

  test("should contain a cards div", () => {
    expect(wrapper.find(".cards").exists()).toBe(true);
  });

  test("should display all the bicycles inside the cards div", () => {
    const cardsDiv = wrapper.find(".cards");
    expect(cardsDiv.find("a").length).toBe(2);
  });

  test("should render a BicycleCard for each object on the data's array", () => {
    expect(wrapper.find(".cards").children().length).toBe(2);
  });
});
