import React from "react";
import { Section } from "./UI";
const features = [
  {
    title: "Web & App Development",
    description:
      "From pixel-perfect websites to user-friendly apps — we code with purpose.",
    animation: "ae-3",
  },
  {
    title: "Design & Branding",
    description:
      "We shape how the world sees you. Logos, identities, and visuals that leave a mark.",
    animation: "ae-4",
  },
  {
    title: "Digital Marketing",
    description:
      "Let the world hear your story. Targeted, data-driven, and results-focused.",
    animation: "ae-5",
  },
  {
    title: "Tech Consulting",
    description:
      "We don’t just build things — we guide, solve, and strategize for growth",
    animation: "ae-6",
  },
];

const OurVisionSection = () => {
  return (
    <Section sectionNo="4" url="assets/img/background/img-89.jpg">
      <div className="fix-12-12">
        <ul className="flex left">
          {/* Text Content */}
          <li className="col-6-12 fromBottomLeft">
            <p className="opacity-6 margin-bottom-2 ae-1">About Us</p>
            <h1 className="ae-2">The Secret of Success</h1>
            <div className="ae-3">
              <p className="opacity-8">
                At Opennerz, we take those wild ideas and turn them into
                powerful digital experiences. Whether it’s a website, an app, or
                an entire brand overhaul — we build it better, smarter, and
                cooler.
              </p>
            </div>
            <ul className="flex">
              {features.map((item, idx) => (
                <li key={idx} className={`col-6-12 ${item.animation}`}>
                  <h3 className="margin-top-3">{item.title}</h3>
                  <p className="tiny opacity-6">{item.description}</p>
                </li>
              ))}
            </ul>
          </li>

          {/* Spacer */}
          <li className="col-1-12">&nbsp;</li>

          {/* Images */}
          <li className="col-5-12 bottom">
            <img
              src="assets/img/image-89-1.jpg"
              data-action="zoom"
              className="shadow rounded ae-8"
              alt="Image"
            />

            <img
              src="assets/img/image-89-2.png"
              data-action="zoom"
              className="shadow rounded ae-8"
              alt="Image"
            />
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default OurVisionSection;
