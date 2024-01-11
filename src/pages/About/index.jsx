import React, { useState } from "react";
import { Header } from "../../component/header";
import "./style.css";

const About = () => {
  const [number, setNumber] = useState(0);
  const [minus, setMinus] = useState("");
  const [plus, setPlus] = useState("");
  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className="container">
        <div className="counter-content">
          <div className="minus">-</div>
          <div className="nums">0</div>
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default About;
