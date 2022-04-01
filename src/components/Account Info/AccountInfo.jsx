import React from "react";
import UserPic from "../../assets/Members/Flavio.svg";

const AccountInfo = () => {
  return (
    <div className="accountInfo">
      <img src={UserPic} alt="" className="profilepic" />
      <div className="info">
        <p className="name">CRYPTOMZ#65652</p>
        <p className="description">
          HUMANS//<span>155</span>
        </p>
        <p className="description">
          TICKETS//<span>5</span>
        </p>
        <p className="logout">Logout</p>
      </div>
    </div>
  );
};

export default AccountInfo;
