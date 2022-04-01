import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./account.scss";
import AccountInfo from "../../components/Account Info/AccountInfo.jsx";

import WalletSection from "../../components/WalletSection/WalletSection.jsx";
import itemsIcon from "../../assets/nami.png";
import ItemCard from "../../components/ItemCard/ItemCard.jsx";
import Faq from "../../components/Faq/Faq.jsx";
const items = [1, 2, 3, 4, 5];

const Account = () => {
  return (
    <div className="account__wrapper">
      <Navbar />
      <div className="account">
        <div className="red__backgorund" />
        <div className="account__content horizontalPadding">
          <AccountInfo />
          <div className="account__mainContent">
            <div className="account__rignt">
              <WalletSection title="Connect Wallet" />
              <WalletSection title="Verified Wallet" address />
              <Faq
                title={"Wen In the Drop"}
                description="Hi guys"
                mb={"19px"}
              />
              <Faq
                title={"Wen In the Drop"}
                description="Hi guys"
                mb={"19px"}
              />
            </div>
            <div className="account__left">
              <div className="items__container">
                <div className="itemsHeader">
                  <div className="title">
                    <img src={itemsIcon} alt="" />
                    <p>Items</p>
                  </div>
                </div>
                <div className="items__container-content">
                  {items.map((item, index) => (
                    <ItemCard key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
