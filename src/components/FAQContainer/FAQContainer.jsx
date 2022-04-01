import React from "react";
import { faqs } from "../../dummytext.js";
import Faq from "../Faq/Faq.jsx";
import "./FAQContainer.scss";

const FAQContainer = ({ titleColor }) => {
  return (
    <div className="faqs">
      <p className="title" style={{ color: titleColor ? titleColor : "" }}>
        FAQS
      </p>
      <div className="faq__container">
        {faqs.map((faq, index) => (
          <Faq title={faq.title} description={faq.description} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FAQContainer;
