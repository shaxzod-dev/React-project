import React, { useState } from "react";
import { Header } from "../../component/header";
import "./style.css";

const About = () => {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0);
  };
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className="container">
        <h2 className="title">About Us</h2>
        <div className="row">
          <div className="nums">
            <h3 className="count-num">{count}</h3>
            <button className="btn-count_reset" type="button" onClick={reset}>
              Reset
            </button>
          </div>
          <div className="data">
            <button
              className="count-btn_plus"
              disabled={count == 10}
              onClick={plus}
              type="button"
            >
              +
            </button>
            <button
              className="count-btn_minus"
              onClick={minus}
              disabled={count == 0}
              type="button"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
