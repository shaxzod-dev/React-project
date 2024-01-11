import React from "react";
import "./style.css";
import rate from "../../assets/rate.svg";
import Gift from "../../assets/gift.svg";

export const Card = ({ img, imgX, title, sub, price1, price2 }) => {
  return (
      <div className="card">
        <div className="card-img">
          <img src={img} />
          <div className="card-img_info">
            <div className="card-X_info">
              <img src={imgX} alt="" />
              <p className="card-title">{sub}</p>
            </div>
            <button className="img-btn">SALE</button>
            <div className="gift-div">
              <img src={Gift} alt="Gift-icon" className="gift-icon" />
              <p className="card-sub">Подарок</p>
            </div>
          </div>
        </div>
        <div className="card-info">
          <div className="rate">
            <img src={rate} alt="" className="rate" />
            <p className="card-info_sub">(12) отзывов</p>
          </div>
          <p className="card-info_text">{title}</p>
          <div className="card-prices">
            <p className="a-price">{price1}</p>
            <p className="b-price">{price2}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
