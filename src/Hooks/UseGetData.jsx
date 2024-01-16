import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export function UseGetData({ url }) {
  const [data, setData] = useState([]);

  async function getData() {
    return await fetch(`${url}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getData();
  }, []);
  return { data };
}
