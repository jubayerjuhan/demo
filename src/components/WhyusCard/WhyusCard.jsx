import React from "react";
import doughnut from "../../assets/doughnut.svg";
import "./WhyusCard.scss";

const WhyusCard = () => {
  return (
    <div className="why__us-card">
      <img src={doughnut} alt="" />
      <p className="card__title">EPOCH GIVEAWAY</p>
      <p className="card__subtitle">
        SOCIETY.25 airdrops to our UNV25 pool delegators each EPOCHS end!
      </p>
    </div>
  );
};

export default WhyusCard;
