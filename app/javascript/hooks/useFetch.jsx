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
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};

export default useFetch;
