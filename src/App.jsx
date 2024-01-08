import "./App.css";
import Card from "./component/cards";
import img from "./assets/card-img.png";
import imgX from "./assets/X.svg";
import img2 from "./assets/card-img_2.png";
import imgY from "./assets/Y-img.svg";
import img3 from "./assets/card-img_3.png";
import { Header } from "./component/header";
function App() {
  const cardData = [
    {
      id: 0,
      img: img,
      imgX: imgX,
      title: "Вариативный замок Golden Soft для отеля",
      sub: "Нет в наличии",
      price1: "7 000₽",
      price2: "8 000₽",
    },
    {
      id: 1,
      img: img2,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "33 000₽",
      price2: "39 000₽",
    },
    {
      id: 2,
      img: img3,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "9 000₽",
      price2: "12 000₽",
    },
    {
      id: 0,
      img: img,
      imgX: imgX,
      title: "Вариативный замок Golden Soft для отеля",
      sub: "Нет в наличии",
      price1: "7 000₽",
      price2: "8 000₽",
    },
    {
      id: 1,
      img: img2,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "33 000₽",
      price2: "39 000₽",
    },
    {
      id: 2,
      img: img3,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "9 000₽",
      price2: "12 000₽",
    },
    {
      id: 0,
      img: img,
      imgX: imgX,
      title: "Вариативный замок Golden Soft для отеля",
      sub: "Нет в наличии",
      price1: "7 000₽",
      price2: "8 000₽",
    },
    {
      id: 1,
      img: img2,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "33 000₽",
      price2: "39 000₽",
    },
    {
      id: 2,
      img: img3,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "9 000₽",
      price2: "12 000₽",
    },
    {
      id: 0,
      img: img,
      imgX: imgX,
      title: "Вариативный замок Golden Soft для отеля",
      sub: "Нет в наличии",
      price1: "7 000₽",
      price2: "8 000₽",
    },
    {
      id: 1,
      img: img2,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "33 000₽",
      price2: "39 000₽",
    },
    {
      id: 2,
      img: img3,
      imgX: imgY,
      title: "Дверной Замок Golden Soft для офиса",
      sub: "В наличии",
      price1: "9 000₽",
      price2: "12 000₽",
    },
  ];
  return (
    <div className="container content">
      {cardData.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
}

export default App;
