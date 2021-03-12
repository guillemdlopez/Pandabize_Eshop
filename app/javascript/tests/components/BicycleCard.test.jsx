import React from "react";
import { mount } from "enzyme";
import BicycleCard from "../../components/BicycleCard";
import { userContext } from "../../context/userContext";
import { BrowserRouter as Router, Switch } from "react-router-dom";

describe("Testing the <BicycleCard /> component", () => {
  const bicycleProps = {
    id: 26,
    name: "Prettiest Bicycle",
    description: "This is the prettiest bicycle in the world. Buy it!",
    photo: "image.jpg",
    customizations: [
      {
        id: 26,
        name: "Wheel size",
        value: "15 inches",
        price: 9.23,
        bicycle_id: 26,
      },
      {
        id: 148,
        name: "Wheel size",
        value: "16 inches",
        price: 6.15,
        bicycle_id: 26,
      },
    ],
  };
  const wrapper = mount(
    <Router>
      <Switch>
        <userContext.Provider value={{ user: "Guillem", userId: 7 }}>
          <BicycleCard {...bicycleProps} />
        </userContext.Provider>
      </Switch>
    </Router>
  );
  test("should render it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("the link should point to the bicycle show", () => {
    const { id: bicycleId } = bicycleProps;
    expect(wrapper.find("a").props().href).toEqual(`/bicycle/${bicycleId}`);
  });

  test("should display the img with the right url", () => {
    const { photo } = bicycleProps;
    expect(wrapper.find("img").prop("src")).toEqual(photo);
  });

  test("should contain the name of the bicycle", () => {
    const { name } = bicycleProps;
    expect(wrapper.find(".bicycle-name").text().trim()).toEqual(name);
  });

  test("should display the description of the bicycle", () => {
    const { description } = bicycleProps;
    expect(wrapper.find(".bicycle-description").text()).toEqual(
      `${description.slice(0, 40)}...`
    );
  });

  test("should display the lowest price", () => {
    const prices = bicycleProps.customizations.map((custom) => custom.price);
    const lowest = Math.min(...prices);

    expect(wrapper.find(".lowest-price").text()).toEqual(`${lowest} €`);
  });
});
