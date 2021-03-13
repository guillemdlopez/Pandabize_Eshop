import { shallow } from "enzyme";
import React from "react";
import RimColorInputs from "../../components/RimColorInputs";

describe("Testing the <RimColorInputs /> component", () => {
  const rimColorInputsProps = {
    rimColors: [
      {
        id: 175,
        name: "Rim color",
        value: "Lightblue",
        price: 9.37,
        bicycle_id: 28,
      },
      {
        id: 176,
        name: "Rim color",
        value: "Orange",
        price: 5.52,
        bicycle_id: 28,
      },
      {
        id: 177,
        name: "Rim color",
        value: "Purple",
        price: 5.79,
        bicycle_id: 28,
      },
    ],
    handleInputChange: jest.fn(),
    setPrice: jest.fn(),
    setPriceRim: jest.fn(),
    price: 0,
    setErrorMsg: jest.fn(),
    displayError: false,
    errorMsgContent: "",
  };
  const wrapper = shallow(<RimColorInputs {...rimColorInputsProps} />);

  test("should render it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should display a label and an input for each color", () => {
    const { rimColors } = rimColorInputsProps;

    const values = rimColors.map((color) => color.value);
    const [lightblue, orange, purple] = values;
    expect(wrapper.find("label").at(0).text()).toBe(lightblue);
    expect(wrapper.find("label").at(1).text()).toBe(orange);
    expect(wrapper.find("label").at(2).text()).toBe(purple);
    expect(wrapper.find("input").length).toBe(values.length);
  });
});
