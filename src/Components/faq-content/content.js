import React, { useState } from "react";
import "../faq/faq.css";
import FAQ from "../faq/faq";

export default function Content() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is there a registration fee to participate in Hack4Impact?",
      answer: "This event is absolutely FREE for everyone.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div>
      <div class="heading">Frequently Asked Questions</div>
      <hr class="line-faq" />
      <div className="App">
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}
