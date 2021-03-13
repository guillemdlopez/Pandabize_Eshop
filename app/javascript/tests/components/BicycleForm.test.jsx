import { mount } from "enzyme";
import React from "react";
import {
  MemoryRouter,
  BrowserRouter as Route,
  useParams,
} from "react-router-dom";
import BicycleForm from "../../components/BicycleForm";
import { userContext } from "../../context/userContext";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    goBack: mockHistoryPush,
  }),
  useParams: () => ({ bicycleId: 26 }),
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

  test("should redirect to the BicycleShow if the user clicks on the Go Back button", () => {
    const btnGoBack = wrapper.find(".btn-customized");
    btnGoBack.simulate("click");

    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
  });
});
