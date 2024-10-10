import React from "react";
import BannerVideo from "../src/images/banner-video.mp4";

const Home = () => {
  return (
    <div className="main_container bg_black py-60px">
      <div className="row">
        <div className="col-6">
          <h1 className="mb-0 text-white font_family_cromorant text_font_85px">
            Hello! I’m <br />
            <span className="light_black_color">Naimish patel</span>
          </h1>
        </div>
        <div className="col-6">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-100"
          >
            <source src={BannerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
