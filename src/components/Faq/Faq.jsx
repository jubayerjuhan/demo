import React from "react";
import arrowDown from "../../assets/Sign/arrowdown.svg";
import arrowRight from "../../assets/Sign/arrowright.svg";
import "./faq.scss";
const Faq = ({ title, description, mb }) => {
  const [faqOpen, setFaqOpen] = React.useState(false);
  return (
    <div
      className="faq__wrapper"
      style={{
        marginBottom: mb ? mb : "38px",
      }}
    >
      <div className="faq">
        <img
          src={faqOpen ? arrowDown : arrowRight}
          alt="arrow"
          onClick={() => setFaqOpen(!faqOpen)}
        />
        <p className="faq__title">{title}</p>
      </div>
      <div className={faqOpen ? "faq__extended" : "faq__null"}>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Faq;
