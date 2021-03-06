import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./AboutUs.scss";
import nftPhoneModel from "../../assets/nftBackground.png";
import {
  faqs,
  teamMembers,
  whatTheFisuniverse25,
  whatTheFOBrian,
} from "../../dummytext.js";
import Faq from "../../components/Faq/Faq.jsx";
import FAQContainer from "../../components/FAQContainer/FAQContainer.jsx";

const AboutUs = () => {
  const [faqOpen, setFaqOpen] = React.useState(false);
  return (
    <div className="aboutUs">
      <Navbar />
      <div className="aboutUs__content horizontalPadding">
        <img className="background__nft-image" src={nftPhoneModel} alt="" />
        <div className="aboutUs__content__text underNav">
          <p className="title">
            WHAT THE F*** IS
            <br />
            <span>UNIVERSE.25</span>
          </p>
          <div className="description">
            <p>{whatTheFisuniverse25}</p>
          </div>
        </div>
      </div>
      <div className="aboutUs__content horizontalPadding paddingTop">
        <img className="background__nft-image" src={nftPhoneModel} alt="" />
        <div className="aboutUs__content__text underNav">
          <p className="title">
            WHAT THE F*** Are
            <br />
            <span>We</span>
          </p>
          <div className="team__section">
            {teamMembers.map((member, index) => (
              <div className="members" key={index}>
                <img src={member.avatar} alt="" />
                <p className="name">
                  {member.name}
                  <span>{member.sureName}</span>
                </p>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="aboutUs__content horizontalPadding paddingTop">
        <img className="background__nft-image" src={nftPhoneModel} alt="" />
        <div className="aboutUs__content__text underNav">
          <p className="title">
            WHAT THE F*** IS
            <br />
            <span>O???BRIEN</span>
          </p>
          <div className="description">
            <p>{whatTheFOBrian}</p>
          </div>
        </div>
      </div>
      <div className="aboutUs__content redBackground horizontalPadding paddingTop">
        <img className="background__nft-image" src={nftPhoneModel} alt="" />
        <FAQContainer />
      </div>
    </div>
  );
};

export default AboutUs;
