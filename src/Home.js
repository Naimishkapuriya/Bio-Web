import React from "react";
import BannerVideo from "../src/images/banner-video-1.mp4";
import AboutVideo from "../src/images/banner-video-2.mp4";
const Home = () => {
  return (
    <>
      <div className="video_container w-100 overflow-hidden position-relative">
        <div className="gradient_overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="banner_video position-absolute top-50 start-50 w-100 h-100 translate-middle object-fit-cover"
        >
          <source src={BannerVideo} type="video/mp4" />
        </video>
        <h1 className="mb-0 text-white font_family_cromorant text_font_85px position-absolute translate-middle top-50 start-50 banner_title">
          Hello! I’m <br />
          <span className="light_black_color">Naimish patel</span>
        </h1>
      </div>
      <div className="main_container py-60px">
        <div className="row w-100">
          <div className="col-6 px-0 mb-0 line_height_0"></div>
          <div className="col-6 px-0 mb-0 line_height_0">
            <video autoPlay loop muted playsInline className="w-100">
              <source src={AboutVideo} type="video/mp4" />
            </video>
          </div>

          <div className="col-6 px-0 mb-0 line_height_0">
            <video autoPlay loop muted playsInline className="w-100">
              <source src={AboutVideo} type="video/mp4" />
            </video>
          </div>
          <div className="col-6 px-0 mb-0 line_height_0"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
