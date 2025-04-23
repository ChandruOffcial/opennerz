import React, { useEffect, useState } from "react";
import { Section } from "./UI";

const sliderImages = [
  "assets/img/iphone-82-1.png",
  "assets/img/iphone-82-2.png",
  "assets/img/iphone-82-3.png",
  "assets/img/iphone-82-4.png",
];

const homePageConent = {
  main: "Revolutionizing the Digital Age.",
  subText:
    "Openerz Technology is a team of passionate individuals whose goal is to improve everyone's life through digital technology. Our services are tailored for small to medium-sized businesses.",
};

const Home = () => {
  const sectionNo = "1";
  const bgUrl = "assets/img/background/img-82.jpg";
  const sliderId = "82-0";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Section sectionNo={sectionNo} url={bgUrl} id="home">
        <div className="fix-8-12 noSelect">
          <div className="relative ae-5">
            <SliderControls
              sliderId={sliderId}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <SliderImages images={sliderImages} currentIndex={currentIndex} />
            <SliderDots
              count={sliderImages.length}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
          <div
            className="logo"
            style={{
              position: "absolute",
              top: "2rem",
              left: "1rem",
              zIndex: "10",
            }}
          >
            {/* <img src="/assets/img/logo.png" height={"70px"} /> */}

            {/* <img src="/assets/img/logo-dark.png" height={"70px"} /> */}
            <img src="/assets/img/logo-01.svg" height={"70px"} />
          </div>

          <div className="fix-7-12 margin-top-2">
            <h1 className="ae-5 fronLeft">{homePageConent.main}</h1>
            <div className="light ae-6 fromrRight">
              <p className="opacity-8">{homePageConent.subText}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

const SliderControls = ({ setCurrentIndex }) => {
  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="leftControl-82 ae-5 fromLeft" onClick={prev}>
        <svg>
          <use xlinkHref="#arrow-left" />
        </svg>
      </div>
      <div className="rightControl-82 ae-5 fromRight" onClick={next}>
        <svg>
          <use xlinkHref="#arrow-right" />
        </svg>
      </div>
    </>
  );
};

const SliderImages = ({ images, currentIndex }) => (
  <ul className="slider clickable animated margin-bottom-2 ae-1 fadeIn">
    {images.map((src, index) => (
      <li key={src} className={index === currentIndex ? "selected" : ""}>
        <img src={src} className="wide" alt={`iPhone ${index + 1}`} />
      </li>
    ))}
  </ul>
);

const SliderDots = ({ count, currentIndex, setCurrentIndex }) => (
  <ul className="controller dots ae-3 fromBottom">
    {Array.from({ length: count }).map((_, index) => (
      <li
        key={index}
        className={`dot ${index === currentIndex ? "selected" : ""}`}
        onClick={() => setCurrentIndex(index)}
        aria-label={`Go to slide ${index + 1}`}
        role="button"
        tabIndex="0"
      />
    ))}
  </ul>
);

export default Home;
