import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    return () => {
      //clean up process
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`There has been a problem ${res.status}`);

        return res.json();
      })
      .then((data) => {
        if (!data) throw new Error("No data was found!");
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  return state;
};

export default useFetch;
