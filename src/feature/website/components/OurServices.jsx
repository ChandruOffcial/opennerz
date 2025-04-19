import React from "react";
import { Section } from "./UI";
import FAQAccordion from "./FAQ";

// const clientLogos = [
//   { src: "assets/img/brand-68-bbc.png", alt: "BBC", width: 67 },
//   { src: "assets/img/brand-68-google.png", alt: "Google", width: 86 },
//   { src: "assets/img/brand-68-apple.png", alt: "Apple", width: 32 },
//   { src: "assets/img/brand-68-canon.png", alt: "Canon", width: 93 },
//   { src: "assets/img/brand-68-nike.png", alt: "Nike", width: 62 },
//   { src: "assets/img/brand-68-greenpeace.png", alt: "Green Peace", width: 115 },
//   { src: "assets/img/brand-68-facebook.png", alt: "Facebook", width: 94 },
//   { src: "assets/img/brand-68-audi.png", alt: "Audi", width: 64 },
//   { src: "assets/img/brand-68-warner-bros.png", alt: "Warner Bros", width: 39 },
//   { src: "assets/img/brand-68-microsoft.png", alt: "Microsoft", width: 116 },
//   { src: "assets/img/brand-68-coca-cola.png", alt: "Coca Cola", width: 87 },
//   { src: "assets/img/brand-68-reebok.png", alt: "Reebok", width: 100 },
//   { src: "assets/img/brand-68-adidas.png", alt: "Adidas", width: 50 },
//   { src: "assets/img/brand-68-vimeo.png", alt: "Vimeo", width: 87 },
//   { src: "assets/img/brand-68-nbc.png", alt: "NBC", width: 56 },
//   { src: "assets/img/brand-68-sony.png", alt: "Sony", width: 95 },
//   { src: "assets/img/brand-68-playstation.png", alt: "PlayStation", width: 49 },
//   {
//     src: "assets/img/brand-68-national-geographic.png",
//     alt: "National Geographic",
//     width: 94,
//   },
// ];

const OurServices = () => {
  return (
    <Section url="assets/img/background/img-89.jpg" sectionNo={"5"}>
      <div className="fix-9-12 toCenter">
        <h1 className="ae-1">Frequently Asked Questions</h1>
        <p className="ae-2">
          <span className="opacity-8">
            Have questions? We’ve got answers. Here are some of the most common
            queries our clients ask before getting started.
          </span>
        </p>
        <FAQAccordion />
        {/* Remove 'tintLogos' class to disable color change of the logo images */}
        {/* <ul className="flex flex-wrap justify-center items-center gap-4 mt-8 tintLogos">
          {clientLogos.map((logo, index) => (
            <li
              class="col-2-12 col-tablet-1-4 col-phablet-1-3 col-phone-1-2"
              key={index}
            >
              <div class="table wide equalElement ae-4">
                <div class="cell">
                  <a href="#">
                    <img width={logo.width} src={logo.src} alt={logo.alt} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul> */}

        <nav className="panel bottom lastSlideOnly">
          <div className="sections desktop">
            {/* <div className="left">
              <a href="#" className="button hollow">
                <img src="assets/img/appstore.jpg" width={112} height={42} />
              </a>
            </div>
            <div className="center">
              <ul className="menu uppercase">
                <li>
                  <a href="#">Tour</a>
                </li>
                <li>
                  <a href="#">Upgrade</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
              </ul>
            </div> */}
            <div className="center">
              <ul className="menu crop">
                <li>
                  <a href="http://facebook.com/designmodo" target="_blank">
                    <svg>
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#facebook"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com/designmodo" target="_blank">
                    <svg>
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#twitter"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/designmodo" target="_blank">
                    <svg>
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#instagram"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sections compact hidden">
            <div className="left">
              <a href="#" title="Slides Framework">
                <svg style={{ width: 82, height: 24 }}>
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#logo"
                  />
                </svg>
              </a>
            </div>
            <div className="right">
              <span
                className="button actionButton sidebarTrigger"
                data-sidebar-id={1}
              >
                <svg>
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#menu"
                  />
                </svg>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </Section>
  );
};

export default OurServices;
