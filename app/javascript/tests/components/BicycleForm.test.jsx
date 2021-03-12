import { mount } from "enzyme";
import React from "react";
import {
  MemoryRouter,
  BrowserRouter as Route,
  useParams,
} from "react-router-dom";
import BicycleForm from "../../components/BicycleForm";
import { userContext } from "../../context/userContext";

// jest.mock("../../hooks/useForm");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ bicycleId: 26 }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: () => ({ bicycleId: 26 }),
}));

describe("Testing <BicycleForm/> component", () => {
  const currentUser = {
    user: "Guillem",
    userId: 1,
  };

  const { bicycleId } = useParams();

  const wrapper = mount(
    <userContext.Provider value={currentUser}>
      <MemoryRouter initialEntries={[`/bicycle/${bicycleId}/order`]}>
        <Route path="/bicycle/:bicycleId/order">
          <BicycleForm />
        </Route>
      </MemoryRouter>
    </userContext.Provider>
  );
  test("should render it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should contain a form to purchase a bicycle with its customizations", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });
});
