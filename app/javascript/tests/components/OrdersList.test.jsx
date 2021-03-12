import { shallow } from "enzyme";
import React from "react";
import OrdersList from "../../components/OrdersList";

describe("Testing the <OrderList /> component", () => {
  test("should be empty when there are no orders", () => {
    const wrapper = shallow(<OrdersList />);
    expect(wrapper.children().length).toBe(0);
  });

  test("should render the component correctly", () => {
    const orders = [
      {
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
      },
      {
        id: 20,
        bicycle_id: 28,
        amount: 14.26,
        user_id: 10,
        bicycle: "Fast and Furious 5000",
        photo:
          "http://res.cloudinary.com/doker55/image/upload/fj7x3ykjgk56nxonx42wqd67l3il.jpg",
        customizations: [
          {
            id: 154,
            name: "Wheel size",
            value: "15 inches",
            price: 6.28,
            bicycle_id: 28,
          },
          {
            id: 196,
            name: "Saddle color",
            value: "Blue",
            price: 7.98,
            bicycle_id: 28,
          },
        ],
      },
    ];
    const wrapper = shallow(<OrdersList orders={orders} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.children().length).toBe(2);
  });
});
