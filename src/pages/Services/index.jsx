import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../component/header";
import "./style.css";
import API from "../../component/API";
import RandomUsers from "../../component/RandomUser";
import clsx from "clsx";
import { ThemeContext } from "../../Context/useTheme";

const Services = () => {
  const [num, setNum] = useState(0);
  const [state, setState] = useState(false);
  const { theme } = useContext(ThemeContext);
  function plus() {
    if (num > 9) {
      setState(true);
    }
    setNum(num + 1);
  }
  function minus() {
    setNum(num - 1);
  }
  useEffect(() => {
    console.log("render");
  }, [state]);
  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className={clsx(`${theme}` == "light" ? "bg-light" : "bg-dark")}>
        <div className="container">
          <h2 className="title">Services</h2>
          <h2 className="title">{num}</h2>
          <div className="btn-group">
            <button className="counter-btn" width={100} onClick={minus}>
              -
            </button>
            <button className="counter-btn" width={100} onClick={plus}>
              +
            </button>
          </div>
          <RandomUsers />
        </div>
      </div>
    </div>
  );
};

export default Services;
