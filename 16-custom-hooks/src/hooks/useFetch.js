import { useEffect, useState } from "react";

export function useFetch(fetchFn, initVal) {
  const [isFetching, setIsFetching] = useState();
  const [error, isError] = useState();
  const [fetchData, setFetchData] = useState(initVal);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return { fetchData, isFetching, error, setFetchData };
}
