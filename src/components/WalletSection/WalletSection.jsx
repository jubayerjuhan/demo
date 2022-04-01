import React from "react";
import walletIcon from "../../assets/wallet.svg";
import connectedIcon from "../../assets/connectedIcon.svg";
// import './WalletSection.scss'

const WalletSection = ({ title, address }) => {
  const lists = ["ETRNL", "Nami", "Flint", "Yoroi"];
  const addresses = [
    "stake1u8t4u47ssdnzkt24qs40nn63kmgtwwz2p5p6qk4ssa46ptsp8alec",
    "stake1u8t4u47ssdnzkt24qs40nn63kmgtwwz2p5p6qk4ssa46ptsp8alec",
    "stake1u8t4u47ssdnzkt24qs40nn63kmgtwwz2p5p6qk4ssa46ptsp8alec",
  ];
  return (
    <div className="account__walletSection">
      <div className="title">
        <img src={walletIcon} alt="" />
        <p>{title}</p>
      </div>
      {!address && (
        <div className="account__wallet-list">
          {lists.map((list, index) => (
            <div className="list" key={index}>
              <img src={connectedIcon} alt="" />
              <p className="list_title">{list}</p>
            </div>
          ))}
        </div>
      )}
      {address && (
        <div className="account__wallet-list">
          {addresses.map((list, index) => (
            <div className="list" key={index}>
              <img src={connectedIcon} alt="" />
              <p className="list_titleWhite">{list}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletSection;
