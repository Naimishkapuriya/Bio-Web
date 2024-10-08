import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../src/images/main-logo.png";

const PageHeader = () => {
  return (
    <header className="bg_header_color fix_header position-fixed top-0 w-100">
      <div className="main_container d-flex justify-content-between align-items-center">
        <Link>
          <img src={`${MainLogo}`} width={100} height={100} alt="main-logo" />
        </Link>
        <ul className="d-flex header_list mb-0 p-0">
          <li className="header_li">
            <a className="text-white text_font_22px font_family_cromorant font_weight_600" href="#">
              Home
            </a>
          </li>
          <li className="header_li">
            <a className="text-white text_font_22px font_family_cromorant font_weight_600" href="#">
              Service
            </a>
          </li>
          <li className="header_li">
            <a className="text-white text_font_22px font_family_cromorant font_weight_600" href="#">
              Blog
            </a>
          </li>
          <li className="header_li">
            <a className="text-white text_font_22px font_family_cromorant font_weight_600" href="#">
              Pages
            </a>
          </li>
          <li className="header_li">
            <a className="text-white text_font_22px font_family_cromorant font_weight_600" href="#">
              Contact
            </a>
          </li>
        </ul>
        <button className="header_btn text_font_22px font_family_cromorant font_weight_600">Hire me</button>
      </div>
    </header>
  );
};

export default PageHeader;
