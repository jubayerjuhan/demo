import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./account.scss";
import UserPic from "../../assets/Members/Flavio.svg";

const Account = () => {
  return (
    <div className="account__wrapper">
      <Navbar />
      <div className="account">
        <div className="red__backgorund" />
        <div className="account__content horizontalPadding">
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
        </div>
      </div>
    </div>
  );
};

export default Account;
