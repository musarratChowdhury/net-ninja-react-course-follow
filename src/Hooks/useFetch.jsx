import { useEffect, useRef, useState } from "react";

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //use useRef to wrap object/array as argument
  const options = useRef(_options).current;

  useEffect(() => {
    // console.log(options);

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setLoading(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setError({ msg: "Could not fetch the data" });
          setLoading(false);
        }
      }
    };
    //need to invoke the function

    fetchData();

    //clean up function
    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, loading, error };
};
