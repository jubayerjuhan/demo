import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./StakePool.scss";
import mouse from "../../assets/mouse.svg";
import { stakePoolText, wallets } from "../../dummytext.js";
import WhyusCard from "../../components/WhyusCard/WhyusCard.jsx";
import nami from "../../assets/nami.svg";
import FAQContainer from "../../components/FAQContainer/FAQContainer.jsx";
const StakePool = () => {
  return (
    <div className="stake-pool__container">
      <Navbar />
      <div className="spool__content-main">
        <div className="unv25__container horizontalPadding">
          <img src={mouse} alt="" className="sideMousePic" />
          <div className="stake__pool">
            <p className="title">
              STAKE POOL// <br />
              <span>UNV25</span>
            </p>
            <p className="subtitle">{stakePoolText}</p>
          </div>
        </div>
        <div className="why__us-container horizontalPadding">
          <div className="header">
            <p className="title">WHY us</p>
            <p className="subtitle">TICKER: UNV25</p>
            <p className="description">
              UNV25 IS A HIGHLY PERFORMANT AND RESILIENT STAKE POOL FOR THE
              CARDANO NETWORK. WE HAVE A SOLID, FAST, RELIABLE, AND SECURE CLOUD
              INFRASTRUCTURE WITH A PROFESSIONAL TEAM FOR CONSISTENT STAKING
              REWARDS.WITH COMMUNITY MIND WE AIM TO ALWAYS ENSURE WE COME UP
              WITH SOME DOPE REWARDS FOR OUR DELEGATORS AND HOLDERS!{" "}
            </p>
          </div>
          <div className="why__us-cards-container">
            <WhyusCard />
            <WhyusCard />
            <WhyusCard />
            <WhyusCard />
            <WhyusCard />
          </div>
        </div>
        <div className="how__to-deligate horizontalPadding">
          <p className="header__title">How to deligate//</p>
          <div className="deligate__wallet-container">
            {wallets.map((wallet, index) => (
              <div className="deligate__wallet-card" key={index}>
                <div className="wallet-card__header">
                  <p>{wallet.title}</p>
                </div>
                <div className="content">
                  <img src={nami} alt="" />
                  <p className="card__title">{wallet.name}</p>
                  <div className="description">
                    {wallet.description.map((desc, index) => (
                      <p key={index}>{desc}</p>
                    ))}
                  </div>
                  {wallet.hasBtn && (
                    <div className="deligate__button">
                      <p>Deligate</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq__section horizontalPadding">
          <FAQContainer titleColor={"rgba(255, 255, 255, 0.6)"} />
          <img src={mouse} alt="" className="heroPic" />
        </div>
      </div>
    </div>
  );
};

export default StakePool;
