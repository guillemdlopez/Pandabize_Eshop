import React from "react";
import { mount } from "enzyme";
import BicycleShow from "../../components/BicycleShow";
import {
  MemoryRouter,
  BrowserRouter as Route,
  useParams,
} from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ bicycleId: 26 }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useMemo: () => `http://localhost:3000/api/v1/bicycles/26`,
}));

describe("Testing the <BicycleShow /> component", () => {
  const { bicycleId } = useParams();

  const wrapper = mount(
    <MemoryRouter initialEntries={[`/bicycle/${bicycleId}`]}>
      <Route path="/bicycle/:bicycleId">
        <BicycleShow />
      </Route>
    </MemoryRouter>
  );
  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should contain a div with the bicycle info", () => {
    expect(wrapper.find(".bicycle-info").exists()).toBe(true);
  });

  test("should contain paragraphs with customizations: Wheel size, Rim color and Saddle Color", () => {
    expect(wrapper.find(".custom-name").at(0).text().trim()).toBe("Wheel size");
    expect(wrapper.find(".custom-name").at(1).text().trim()).toBe("Rim color");
    expect(wrapper.find(".custom-name").at(2).text().trim()).toBe(
      "Saddle color"
    );
  });

  test("should contain a link to the bicycle's order page", () => {
    expect(wrapper.find("a").prop("href")).toBe("/bicycle/26/order");
  });

  test("should contain a button that says 'Buy'", () => {
    expect(wrapper.find("button").text()).toBe("Buy");
  });
});
