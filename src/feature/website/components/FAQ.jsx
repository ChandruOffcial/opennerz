import React, { useState } from "react";

const faqItems = [
  {
    question: "1. What services do you offer?",
    answer:
      "We offer a wide range of services including web development, mobile app development, software development, logo and graphic design, and digital marketing. Each service is tailored to meet the unique needs of your business.",
  },
  {
    question: "2. How do I get started with your team?",
    answer:
      "Simply reach out to us via our contact page or email. We’ll schedule a discovery call to understand your requirements, goals, and provide a custom proposal or quote.",
  },
  {
    question: "3. How long does it take to complete a project?",
    answer:
      "Project timelines vary based on the scope and complexity. A basic website might take 1–2 weeks, while larger projects like apps or software can take a few months. We always share a clear timeline before starting.",
  },
  {
    question: "4. Do you offer ongoing support after the project is completed?",
    answer:
      "Yes, we offer maintenance and support packages for all our services — including website updates, bug fixes, design revisions, and more.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqItems.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggle(index)}>
            <h4>{item.question}</h4>
            <span>{activeIndex === index ? "−" : "+"}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
