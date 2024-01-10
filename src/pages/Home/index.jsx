import React from "react";
import { Header } from "../../component/header";
import "./style.css";
import { countries } from "../../component/Data";

const Home = () => {
  let Data = [];
  async function getData() {
    return await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((product) => product.json())
      .then((money) => (Data = money));
  }
  getData();

  console.log(Data);
  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className="container">
        <div className="content">
          <div className="country">
            <h2 className="title">Home</h2>
            {countries.map((el) => {
              <div className="elements">
                <p>{el.name}</p>
                <p>{el.capital}</p>
                <p>{el.languages}</p>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
