import React, { useContext, useState } from "react";
import { json } from "react-router-dom";
import { UseGetData } from "../../Hooks/UseGetData";
import "./style.css";
import { ThemeContext } from "../../Context/useTheme";

const RandomUsers = () => {
  const { data } = UseGetData({ url: "https://randomuser.me/api/" });
  const ObjectLenght = Object.keys(data).length;
  const { setTheme, theme } = useContext(ThemeContext);
  function changeTheme() {
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  return (
    <div className="random-content">
      <button className="Users-btn" onClick={changeTheme}>
        Change Theme
      </button>

      <h2>Gender: {ObjectLenght ? data.results[0].gender : ""}</h2>
      <h2>
        Name: {ObjectLenght ? data.results[0].name.title : ""}
        <span> </span>
        {ObjectLenght ? data.results[0].name.first : ""}
        <span> </span>
        {ObjectLenght ? data.results[0].name.last : ""}
      </h2>
      {ObjectLenght ? <img src={data.results[0].picture.large} alt="" /> : ""}
    </div>
  );
};

export default RandomUsers;
