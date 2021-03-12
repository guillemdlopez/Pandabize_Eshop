import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe("Testing the useForm custom hook", () => {
  const initialFormValues = {
    name: "",
    age: "",
    city: "",
  };
  test("should return the values by default", () => {
    const { result } = renderHook(() => useForm(initialFormValues));

    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialFormValues);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should change each value of the form", () => {
    const { result } = renderHook(() => useForm(initialFormValues));

    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Guillem",
        },
      });
    });
    const [values] = result.current;

    expect(values.name).toBe("Guillem");
    expect(values).toEqual({ ...initialFormValues, name: "Guillem" });
  });

  test("should reset the values to the initial state thanks to reset()", () => {
    const { result } = renderHook(() => useForm(initialFormValues));

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Antonio",
        },
      });

      reset(initialFormValues);
    });

    const [values] = result.current;
    expect(values.name).not.toBe("Antonio");
    expect(values).toEqual(initialFormValues);
  });
});
