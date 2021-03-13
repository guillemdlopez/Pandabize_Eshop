import { shallow } from "enzyme";
import React from "react";
import SaddleColorInputs from "../../components/SaddleColorInputs";

describe("Testing the <SaddleColorInputs/> component", () => {
  const saddleColorInputsProps = {
    saddleColors: [
      {
        id: 191,
        name: "Saddle color",
        value: "Yellow",
        price: 7.11,
        bicycle_id: 26,
      },
      {
        id: 193,
        name: "Saddle color",
        value: "Black",
        price: 8.36,
        bicycle_id: 26,
      },
    ],
    handleInputChange: jest.fn(),
    setPrice: jest.fn(),
    setPriceSaddle: jest.fn(),
    price: 0,
    setErrorMsg: jest.fn(),
    displayError: false,
    errorMsgContent: "",
  };
  const wrapper = shallow(<SaddleColorInputs {...saddleColorInputsProps} />);
  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should display a label and an input for each saddle color", () => {
    const { saddleColors } = saddleColorInputsProps;
    const values = saddleColors.map((color) => color.value);

    const [yellow, black] = values;
    expect(wrapper.find("label").at(0).text()).toBe(yellow);
    expect(wrapper.find("label").at(1).text()).toBe(black);
    expect(wrapper.find("input").length).toBe(values.length);
  });
});
