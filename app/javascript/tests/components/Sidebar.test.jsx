import { shallow } from "enzyme";
import React from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

describe("Testing the <Sidebar/> component", () => {
  const sidebarProps = {
    avatar: "avatar.jpg",
    first_name: "Guillem",
    last_name: "Delás",
    orders: [
      {
        id: 19,
        bicycle_id: 26,
        amount: 13.1,
        user_id: 10,
        created_at: "2021-03-08T23:54:06.646Z",
        updated_at: "2021-03-08T23:54:06.646Z",
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
            created_at: "2021-03-08T19:34:57.247Z",
            updated_at: "2021-03-08T19:34:57.247Z",
          },
          {
            id: 168,
            name: "Rim color",
            value: "Blue",
            price: 6.95,
            bicycle_id: 26,
            created_at: "2021-03-08T19:34:57.404Z",
            updated_at: "2021-03-08T19:34:57.404Z",
          },
        ],
      },
    ],
  };

  const wrapper = shallow(<Sidebar {...sidebarProps} history={history} />);
  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should display the full name of the current user", () => {
    expect(
      wrapper.find(".full_name-item").text().includes("Guillem Delás")
    ).toBe(true);
  });

  test("should display the number of orders of the current_user", () => {
    expect(wrapper.find(".orders-item").text()).toBe("Orders: 1");
  });
});
