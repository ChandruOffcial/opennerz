import React from "react";
import { Section } from "./UI";

const aboutFeatures = [
  {
    icon: "panorama",
    title: "Comprehensive Digital Services",
    description:
      "We deliver end-to-end digital solutions — from websites and mobile apps to custom software — for startups and enterprises alike.",
  },
  {
    icon: "settings_applications",
    title: "Creative Design & Branding",
    description:
      "We craft unique brand identities and stunning UI/UX designs that set you apart and resonate with your audience.",
  },
  {
    icon: "face",
    title: "Marketing That Delivers",
    description:
      "We drive growth with targeted digital marketing strategies including SEO, PPC, content, and social media.",
  },
];

const aboutDetails = {
  title: "Core Values and Future Goals",
  text1:
    "We turn ideas into powerful digital solutions. From websites, apps, and software to design, branding, and digital marketing — we deliver it all.",
  text2:
    "Blending strategy, creativity, and technology, we craft tailored solutions that drive growth and performance.",
};
const AboutUsSection = () => {
  return (
    <Section sectionNo="2" url="assets/img/background/img-73.jpg">
      <div className="fix-11-12">
        <ul className="flex reverse">
          <li className="col-6-12 left box-73">
            <h1 className="ae-2">{aboutDetails.title}</h1>
            <p className="ae-4">
              <span className="opacity-8">
                {aboutDetails.text1}
                <br />
                {aboutDetails.text2}
              </span>
            </p>
          </li>
          <li className="col-6-12 left ae-1 fromAbove">
            <img
              className="shiftImage shiftImageVertical image-73"
              src="assets/img/iphone-73.png"
              width="702"
              alt="iPhone showcasing design"
              data-action="zoom"
            />
          </li>
        </ul>

        <div className="fix-11-12">
          <ul className="grid fixedSpaces equal left grid-73">
            {aboutFeatures.map((feature, idx) => (
              <li key={feature.title} className={`col-4-12 ae-${idx + 3}`}>
                <div
                  className={`cell-73 rounded equalElement ${
                    idx === 2 ? "last" : ""
                  }`}
                >
                  <i className="material-icons">{feature.icon}</i>
                  <h3>{feature.title}</h3>
                  <p className="tiny opacity-6">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AboutUsSection;
