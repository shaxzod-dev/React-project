import React, { useState } from "react";
import { json } from "react-router-dom";
import { UseGetData } from "../../Hooks/UseGetData";
import "./style.css";

const RandomUsers = () => {
  const { data } = UseGetData({ url: "https://randomuser.me/api/" });
  const ObjectLenght = Object.keys(data).length;
  console.log(data);
  return (
    <div className="random-content">
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
