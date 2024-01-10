import React, { useState } from "react";
import { Header } from "../../component/header";
import "./style.css";
import { countries } from "../../component/Data";
import Card from "../../component/cards";

const Home = () => {
  // let Data = [];
  // async function getData() {
  //   return await fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((product) => product.json())
  //     .then((money) => (Data = money));
  // }
  // getData();

  // console.log(Data);
  const [countryName, setCountryName] = useState("");
  const [result, setResult] = useState({});
  const [message, setMessage] = useState("");
  function handleChange(e) {
    e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (countryName.length) {
      countries.filter((el) => {
        if (el.name == countryName) {
          setResult(el);
        } else {
          setMessage("Country not found");
        }
      });
    }
  }
  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className="container">
        {/* <h2 className="title">Home</h2> */}
        <div className="content">
          <form>
            <input
              type="text"
              placeholder="Search any country"
              className="input"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" className="btn">
              Click
            </button>
          </form>
          {Object.keys(result).length ? (
            <Card {...result} />
          ) : (
            <h2>{message}</h2>
          )}
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
