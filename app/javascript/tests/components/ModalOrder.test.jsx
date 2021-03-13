import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import ModalOrder from "../../components/ModalOrder";
import { userContext } from "../../context/userContext";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Testing the component <ModalOrder/>", () => {
  const userInfo = {
    user: "Guillem",
    userId: 1,
  };

  const modalProps = {
    content: "your order has been succesfully completed!",
    name: "Black Panther 5000",
    photo: "img.jpg",
    price: 25,
  };
  const wrapper = mount(
    <MemoryRouter>
      <userContext.Provider value={userInfo}>
        <ModalOrder {...modalProps} />
      </userContext.Provider>
    </MemoryRouter>
  );
  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should containa a message with the name of the current user", () => {
    const { content } = modalProps;
    const { user } = userInfo;
    expect(wrapper.find("p").text()).toBe(`${user}, ${content}`);
  });

  test("should contain the name of the bicycle", () => {
    const { name: bicycle } = modalProps;
    expect(wrapper.find("li").at(0).text()).toBe(`Bicycle: ${bicycle}`);
  });

  test("should contain the price of the bicycle", () => {
    const { price } = modalProps;
    expect(wrapper.find("li").at(1).text()).toBe(
      `Price: ${price.toFixed(2)} €`
    );
  });

  test("should contain a button to go to the dashboard", () => {
    const btnDashboard = wrapper.find("button").at(0);
    expect(btnDashboard.exists()).toBe(true);
    expect(btnDashboard.text()).toBe("Go to dashboard");
  });

  test("should contain a button to go to the home page", () => {
    const btnHome = wrapper.find("button").at(1);
    expect(btnHome.exists()).toBe(true);
    expect(btnHome.text()).toBe("Home");
  });

  test("should redirect to the Dashboard when the user clicks on the button", () => {
    const btnDashboard = wrapper.find("button").at(0);
    btnDashboard.simulate("click");

    expect(mockHistoryPush).toBeCalledWith("/dashboard");
  });

  test("should redirect to the Home page when the user clicks on the button", () => {
    const btnHome = wrapper.find("button").at(1);
    btnHome.simulate("click");

    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });
});
