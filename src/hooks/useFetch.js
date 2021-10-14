import { useState, useEffect } from "react";

export function useFetch(keyword) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_URL = "https://api.mocklets.com/mock68016";

  useEffect(() => {
    setLoading(true);

    fetch(`${API_URL}${keyword ? keyword : "/talleres"}`)
      .then((resp) => resp.json())
      .then((items) => {
        setItems(items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error("An error ocurred fetching data", err);
      });
  }, []);

  return { items, loading, error };
}
