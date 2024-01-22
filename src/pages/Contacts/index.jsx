import React, { useReducer, useState } from "react";
import { Header } from "../../component/header";
import "./style.css";
import { nameReducer, reducer } from "../../Reducer/store";
import { ADD, MINUS, PLUS, RESET } from "../../Reducer/type";

const Contacts = () => {
  // const arr = [1, 2, 3, 4, 5, 66];

  // let result = arr.reduce((acc, curV) => acc + curV, 0);
  // let result = 0;
  // for(let key of arr){
  //   result += key
  // }
  // console.log(result);
  // const [count, setCount] = useState(0);
  // const plus = () => {
  //   setCount(count + 1);
  // };
  // const minus = () => {
  //   setCount(count - 1);
  // };
  // const reset = () => {
  //   setCount(count * 0);
  // };
  // const initialData = 0;
  // const initialData = {
  //   name: "Ismoiljon",
  // };
  const initialData = {
    name: "Ismoiljon",
  };
  const [data, dispatch] = useReducer(nameReducer, initialData.name);

  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className="container">
        <h2 className="title">Contacts</h2>
        <div className="counter">
          <h2 className="counter-num">{data}</h2>
          <div className="counter-btns">
            <button onClick={() => dispatch({ type: PLUS })}>+</button>
            <button onClick={() => dispatch({ type: MINUS })}>-</button>
          </div>
          <button onClick={() => dispatch({ type: RESET })}>RESET</button>
          <button onClick={() => dispatch({ type: ADD, payload: "Akbar" })}>
            Change Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
