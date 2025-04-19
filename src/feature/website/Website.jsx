import React, { useState } from "react";
import { SvgLib } from "./components/SvgLib";
import Navigation from "./components/Navigation";
import PopupVideo from "./components/PopupVideo";
import Home from "./components/Home";
import AboutUsSection from "./components/AboutUs";
import OurMissionSection from "./components/OurMissionSection";
import OurVisionSection from "./components/OurVisionSection";
import OurServices from "./components/OurServices";
import { Toaster, toast } from "react-hot-toast";

const Website = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <SvgLib />
      <Navigation />
      <Home />
      <OurMissionSection />
      <AboutUsSection />
      <OurServices />
      <OurVisionSection />

      <Toaster position="top-right" reverseOrder={false} />

      {/* Floating Button */}
      <button className="lets-talk-button" onClick={() => setOpenModal(true)}>
        Let’s Talk
      </button>

      {/* Custom Modal */}
      {openModal && (
        <div
          className="custom-modal-overlay"
          onClick={() => setOpenModal(false)}
        >
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="custom-modal-container">
              {/* Content Left */}
              <div className="content__left">
                <img
                  src="/assets/img/get-in-touch.png"
                  alt="message"
                  className="message"
                />
                <h2 className="content_h2">Get In Touch</h2>
                <p className="content_p">
                  We'd love to chat about what you are trying to achivee and
                  your current circumstances
                </p>
              </div>

              {/* Content Right  */}
              <div className="content__right">
                <form
                  className="custom-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    if (form.checkValidity()) {
                      toast.success("Thanks! We'll connect with you soon.");
                      setOpenModal(false);
                    } else {
                      form.reportValidity();
                    }
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required />
                  </div>

                  <div className="custom-form-actions">
                    <button type="submit" className="send-btn">
                      Send
                    </button>

                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => setOpenModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Website;
