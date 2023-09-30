import { useState, useEffect } from "react";

export const useFetch = (url, option) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setIsPending(true);
    try {
      let response = await fetch(url, option);
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setIsPending(false);
      setData(json);
      setError(null);
    } catch (error) {
      setError(`${error} Could not Fetch Data `);
      setIsPending(false);
    }
  };

  return { data, isPending, error, fetchData };
};

export default useFetch;
