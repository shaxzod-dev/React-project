import React from "react";
import { Header } from "../../component/header";

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
        <h2 className="title">Home</h2>
      </div>
    </div>
  );
};

export default Home;
