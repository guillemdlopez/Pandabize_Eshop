import { renderHook } from "@testing-library/react-hooks";
import { server } from "../../fixtures/config";
import { API_BICYCLES_URL } from "../../fixtures/variables";
import useFetch from "../../hooks/useFetch";

describe("Testing the custom hook useFetch", () => {
  test("should return some data", () => {
    const { result } = renderHook(() =>
      useFetch(`${server}${API_BICYCLES_URL}`)
    );

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
});
