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
            {/* {countries.map((el) => (
              <div className="country">
                <p className="country-text">Name:{el.name}</p>
                <p className="a-country-text">Capital:{el.capital}</p>
                <p className="c-country-text">Currency:{el.currency}</p>
                <p className="d-country-text">Population:{el.population}</p>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
