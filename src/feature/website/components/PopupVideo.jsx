import React from "react";

const PopupVideo = () => {
  return (
    <div className="popup autoplay" data-popup-id="82-0">
      <div className="close">
        <svg>
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
        </svg>
      </div>
      <div className="content">
        <div className="container">
          <div className="wrap">
            <div className="fix-10-12">
              <div className="embedVideo popupContent">
                <iframe
                  src="https://player.vimeo.com/video/101231747?color=ff0179&portrait=0"
                  frameBorder={0}
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupVideo;
