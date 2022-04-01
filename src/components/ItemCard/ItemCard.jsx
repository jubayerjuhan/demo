import React from "react";
import Itemcard from "../../assets/Itemcard.svg";
import "./itemcard.scss";

const ItemCard = () => {
  return (
    <div className="item__card">
      <img src={Itemcard} alt="" />
      <div className="info">
        <p className="title">
          CIRCLE <span>II//BASIC TICKET</span>
        </p>
        <p className="subtitle">#1558</p>
      </div>
    </div>
  );
};

export default ItemCard;
