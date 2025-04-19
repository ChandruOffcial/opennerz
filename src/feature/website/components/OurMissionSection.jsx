/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Section } from "./UI";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const slides = [
  {
    img: "assets/img/web-development.png",
    heading: "Software Development",
    text: "Custom websites, CMS integration, e-commerce solutions, and continuous support to help you grow online.",
    services: [
      "Designing",
      "Customized coding",
      "Testing ",
      "Documentation",
      "Debugging",
      "Maintenance",
      "IT Support",
    ],
  },
  {
    img: "assets/img/mobile-app-development.png",
    heading: "Mobile App Development",
    text: "Build native or cross-platform apps with beautiful UI/UX and ongoing app support.",
    services: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform App Development (Flutter, React Native)",
      "Mobile UI/UX Design",
      "App Maintenance & Upgrades",
    ],
  },
  {
    img: "assets/img/software-development.png",
    heading: "Software Development",
    text: "Streamline operations with tailored business software, cloud apps, and API integrations.",
    services: [
      "Custom Business Software",
      "ERP & CRM Solutions",
      "Cloud-Based Applications",
      "SaaS Product Development",
      "API Development & Integration",
    ],
  },
  {
    img: "assets/img/graphic-design.png",
    heading: "Graphic Design",
    text: "Visually compelling designs for marketing, branding, and packaging across all platforms.",
    services: [
      "Social Media Design",
      "Marketing Materials (Posters, Flyers, Brochures)",
      "Business Cards & Stationery",
      "Infographics",
      "Product Packaging Design",
    ],
  },
  {
    img: "assets/img/logo-design.png",
    heading: "Logo & Brand Identity",
    text: "Craft timeless brands with logos, brand kits, and style guides tailored to your business.",
    services: [
      "Logo Design (Minimal, Iconic, Wordmark, etc.)",
      "Brand Guidelines & Style Sheets",
      "Business Branding Kits",
      "Rebranding & Logo Redesign",
    ],
  },
  {
    img: "assets/img/digital-marketing.png",
    heading: "Digital Marketing",
    text: "Grow your presence with SEO, social media, content marketing, and paid ad campaigns.",
    services: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing & Management",
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing Campaigns",
      "Content Creation & Strategy",
      "Analytics & Reporting",
    ],
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const OurMissionSection = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Resettable auto-slider
  const startAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);

  const handleManualSelect = (index) => {
    setCurrent(index);
    startAutoSlide();
  };

  function prev() {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  }

  function next() {
    setCurrent((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  }

  return (
    <Section sectionNo="3" url="assets/img/background/img-27.jpg">
      <div className="fix-12-12">
        <ul className="flex verticalCenter">
          {/* Left: Thumbnails and dots */}
          <div className="leftControl-82 ae-5 fromLeft" onClick={prev}>
            <svg>
              <use xlinkHref="#arrow-left" />
            </svg>
          </div>

          <li className="col-5-12 cell-27">
            <div className="fix-4-12">
              <ul
                className="slider clickable ae-1 fromAbove"
                data-slider-id="27-3"
              >
                {slides.map((slide, idx) => (
                  <li
                    key={idx}
                    className={idx === current ? "selected" : ""}
                    onClick={() => handleManualSelect(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={slide.img} alt={slide.heading} />
                  </li>
                ))}
              </ul>

              <ul
                className="controller dots ae-2 fromCenter margin-top-3"
                data-slider-id="27-3"
              >
                {slides.map((_, idx) => (
                  <li
                    key={idx}
                    className={`dot ${idx === current ? "selected" : ""}`}
                    onClick={() => handleManualSelect(idx)}
                    style={{ cursor: "pointer" }}
                    aria-label={`Go to slide ${idx + 1}`}
                    role="button"
                  />
                ))}
              </ul>
            </div>
          </li>

          {/* Right: Slide Content */}
          <li className="col-7-12 left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].heading}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="ae-2 fromRight">{slides[current].heading}</h1>
                <div className="ae-3 fromRight">
                  <p className="opacity-8">{slides[current].text}</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {slides[current].services.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <GoDotFill
                          style={{
                            paddingBottom: "12px",
                            color: "gold",
                            fontSize: "25px",
                          }}
                        />
                        <p className="tiny opacity-6">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </li>

          <div
            className="rightControl-82 ae-5 fromRight"
            onClick={next}
            style={{ marginRight: "0px", right: "15%" }}
          >
            <svg>
              <use xlinkHref="#arrow-right" />
            </svg>
          </div>
        </ul>
      </div>
    </Section>
  );
};

export default OurMissionSection;
