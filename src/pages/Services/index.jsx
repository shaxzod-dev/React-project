import React, { useEffect, useState } from "react";
import { Header } from "../../component/header";
import Users from "../../component/Users";
import "./style.css";
import { json } from "react-router-dom";
import API from "../../component/BtnComponents";

const Services = () => {
  const [data, setData] = useState([]);
  const [api, setApi] = useState('');
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
    <div>
      <Header Logo={"Header-logo"} />
      <div className="card-container">
        <h2 className="title">Services</h2>
        {/* <ol className="users-container">
          {data.map((el, id) => (
            <Users key={id} {...el} />
          ))}
        </ol> */}
        <div className="Info">
          {api.map((el) => (
            <API key={el.id} {...el} />
          ))}
        </div>
        <div className="container">
          <button
            onClick={() => {
              setApi("posts");
            }}
          >
            Posts
          </button>
          <button
            onClick={() => {
              setApi("albums");
            }}
          >
            Albums
          </button>
          <button
            onClick={() => {
              setApi("todos");
            }}
          >
            Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
