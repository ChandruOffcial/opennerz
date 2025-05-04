import React from "react";
import { Section } from "./UI";

const pricingPlans = [
  {
    name: "Web development(Basic)",
    price: "75£",
    details: [
      "5 static pages",
      "20 revisions",
      "No admin panel",
      "hosting(additional charge)",
    ],
    buttonLabel: "Purchase",
    background: "#f5fbfe",
    className: "ae-3",
  },

  {
    name: "Logo & Brand identity(Basic)",
    price: "55£",
    details: [
      "3 variations",
      "10  Revisions",
      "full files with presentation",
      "custom post designs",
    ],
    buttonLabel: "Purchase",
    className: "ae-4",
  },

  {
    name: "Digital Marketing(Basic)",
    price: "80£",
    details: [
      "Social Media Setup",
      "1-Month Content Plan",
      "Google Ads Setup (additional charge)",
    ],
    buttonLabel: "Purchase",
    className: "ae-5",
  },
];

const PricingSection = ({ openModal }) => {
  return (
    <Section url={"assets/img/background/img-83.jpg"} id="pricing">
      <div className="fix-10-12">
        <h1 className="ae-1">Pricing</h1>
        <ul className="grid grid-83 noSpaces equal ae-2 fadeIn">
          {pricingPlans.map((plan, index) => {
            const isFree = plan.price === 0;
            const billingInfo = isFree
              ? "No Credit Card Needed"
              : "Billed per Month";

            return (
              <li
                key={plan.name}
                className={`col-4-12 ${plan.className}`}
                style={
                  plan.background ? { background: plan.background } : undefined
                }
              >
                <h3>{plan.name}</h3>
                <div className={`price ae-${index + 5}`}>
                  <span className="currency"></span>
                  {plan.price}
                </div>
                <div className={`ae-${index + 5}`}>
                  <h6 className="uppercase bold small opacity-4">
                    {billingInfo}
                  </h6>
                </div>
                <div
                  className={`margin-top-3 margin-bottom-3 equalElement ae-${
                    index + 6
                  }`}
                >
                  <ul className="p tiny">
                    {plan.details.map((detail, detailIndex) => {
                      const isDimmed =
                        (isFree && detailIndex > 0) ||
                        (!isFree && detailIndex >= 3);
                      const className = isDimmed ? "opacity-7 opacity-8" : "";

                      return (
                        <li key={detailIndex} className={className}>
                          <strong>{detail}</strong>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button
                  onClick={openModal}
                  className={`button ${
                    isFree ? "blue" : "green"
                  } gradient wide cropSides cropBottom ae-${index + 7}`}
                >
                  {plan.buttonLabel}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default PricingSection;
