import { Header } from "../../component/header";
import "./style.css";
import img from "../../assets/card-img.png";
import imgX from "../../assets/X.svg";
import img2 from "../../assets/card-img_2.png";
import imgY from "../../assets/Y-img.svg";
import img3 from "../../assets/card-img_3.png";
import Card from "../../component/cards";
import Countries from "../../component/Card";
import { useState } from "react";
import { Country } from "../../component/Data";

const Home = () => {
  // const CardsMap = [
  //   {
  //     id: 0,
  //     img: img,
  //     imgX: imgX,
  //     title: "Вариативный замок Golden Soft для отеля",
  //     sub: "Нет в наличии",
  //     price1: "7 000₽",
  //     price2: "8 000₽",
  //   },
  //   {
  //     id: 1,
  //     img: img2,
  //     imgX: imgY,
  //     title: "Дверной Замок Golden Soft для офиса",
  //     sub: "В наличии",
  //     price1: "33 000₽",
  //     price2: "39 000₽",
  //   },
  //   {
  //     id: 2,
  //     imgX: imgY,
  //     img: img3,
  //     title: "Дверной Замок Golden Soft для офиса",
  //     sub: "В наличии",
  //     price1: "9 000₽",
  //     price2: "12 000₽",
  //   },
  // ];
  // let Data = [];
  // async function getData() {
  //   return await fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((product) => product.json())
  //     .then((money) => (Data = money));
  // }
  // getData();

  // console.log(Data);
  const [CountryName, setCountry] = useState("");
  const [result, setResult] = useState({});
  const [message, setMessage] = useState("")

  function handleChange(e) {
    setCountry(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (CountryName.length) {
      Country.filter((el) => {
        if (el.name == CountryName) {
          setResult(el);
        } else {
          setMessage("Country not found")
        }
      });
    }
  }
  console.log(result);
  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className="container">
        <h2 className="title">Home</h2>
        {/* <div className="content">
          {CardsMap.map((el) => (
            <Card key={el.id} {...el} />
          ))}
        </div> */}
        <div className="Country-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Search"
              onChange={(e) => handleChange(e)}
            />
            <button className="country-btn" type="submit">
              Click
            </button>
          </form>
          {Object.keys(result).length ? (
            <Countries {...result} />
          ) : (
            <h3>{message}</h3>
          )}
          {/* {Country.map((el, i) => (
            <Countries key={i} {...el} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
