import React, { useEffect, useState } from "react";
import Users from "../../component/Users";
import "./style.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const API = () => {
  const [data, setData] = useState([]);
  const [api, setApi] = useState("posts");
  const loadingArr = Array.from({ length: 15 });
  async function getData() {
    return await fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, [api]);
  console.log(data);
  return (
    <>
      <div className="card-container">
        <h2 className="title">Services</h2>
        <div className="container">
          <div className="api-content">
            <button
              className="api-btn"
              onClick={() => {
                setApi("posts");
              }}
            >
              Posts
            </button>
            <button
              className="api-btn"
              onClick={() => {
                setApi("albums");
              }}
            >
              Albums
            </button>
            <button
              className="api-btn"
              onClick={() => {
                setApi("todos");
              }}
            >
              Todos
            </button>
          </div>
        </div>
        <ol className="users-container">
          {data.length
            ? data.map((el, id) => <Users key={id} {...el} />)
            : loadingArr.map((el) => <Skeleton height={200} width={300} />)}
        </ol>
      </div>
    </>
  );
};

export default API;
