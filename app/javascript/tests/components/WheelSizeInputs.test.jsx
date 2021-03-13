import { shallow } from "enzyme";
import React from "react";
import WheelSizeInputs from "../../components/WheelSizeInputs";

describe("Testing the <WheelSizeInputs/> component", () => {
  const wheelSizeInputsProps = {
    wheelSizes: [
      {
        id: 146,
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
      {
        id: 149,
        name: "Wheel size",
        value: "17 inches",
        price: 8.42,
        bicycle_id: 26,
      },
    ],
    handleInputChange: jest.fn(),
    fetchAssociations: jest.fn(),
    setPriceWheel: jest.fn(),
  };
  const wrapper = shallow(<WheelSizeInputs {...wheelSizeInputsProps} />);

  test("should render it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should display a label and an input for each wheel size", () => {
    const { wheelSizes } = wheelSizeInputsProps;
    const sizes = wheelSizes.map((size) => size.value);
    const [size15, size16, size17] = sizes;

    expect(wrapper.find("label").at(0).text()).toBe(`Wheel size: ${size15}`);
    expect(wrapper.find("label").at(1).text()).toBe(`Wheel size: ${size16}`);
    expect(wrapper.find("label").at(2).text()).toBe(`Wheel size: ${size17}`);

    expect(wrapper.find("input").length).toBe(sizes.length);
  });
});
