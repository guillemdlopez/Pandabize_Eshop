import { shallow } from "enzyme";
import React from "react";
import OrderCard from "../../components/OrderCard";

describe("Testing the <OrderCard /> component", () => {
  const order = {
    id: 19,
    bicycle_id: 26,
    amount: 13.1,
    user_id: 10,
    bicycle: "New School XC",
    photo:
      "http://res.cloudinary.com/doker55/image/upload/jbwjj6i6r1f2oz551vxojkmtb42c.jpg",
    customizations: [
      {
        id: 148,
        name: "Wheel size",
        value: "16 inches",
        price: 6.15,
        bicycle_id: 26,
      },
      {
        id: 168,
        name: "Rim color",
        value: "Blue",
        price: 6.95,
        bicycle_id: 26,
      },
    ],
  };
  const wrapper = shallow(<OrderCard {...order} />);

  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should display the name of the bicycle", () => {
    const { bicycle } = order;
    expect(wrapper.find("li").at(0).text()).toBe(`Bicycle: ${bicycle}`);
  });

  test("should display the amount of the bicycle", () => {
    const { amount } = order;
    expect(wrapper.find("li").at(1).text()).toBe(`Amount: ${amount} €`);
  });

  test("should display the customizations names and their values", () => {
    const value = order.customizations.map((custom) => custom.value);
    const name = order.customizations.map((custom) => custom.name);

    expect(wrapper.find(".custom-item").at(0).text()).toBe(
      `${name[0]}: ${value[0]}`
    );
    expect(wrapper.find(".custom-item").at(1).text()).toBe(
      `${name[1]}: ${value[1]}`
    );
  });
});
