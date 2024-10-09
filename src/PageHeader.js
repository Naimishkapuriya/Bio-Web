import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../src/images/bg-logo.png";

const PageHeader = () => {
  const menuItems = ["Home", "Service", "Blog", "Pages", "Contact"];

  return (
    <header className="bg_header_color fix_header position-fixed top-0 w-100">
      <div className="main_container d-flex justify-content-between align-items-center">
        <Link data-aos="zoom-out">
          <img  src={`${MainLogo}`} width={100} height={100} alt="main-logo" />
        </Link>
        <ul className="d-flex header_list mb-0 p-0">
          {menuItems.map((item, index) => (
            <li
              key={index}
              data-aos="zoom-out"
              data-aos-delay={index * 100}
              className="header_li"
            >
              <a
                className="text-white text_font_22px font_family_cromorant font_weight_600"
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button data-aos="zoom-out" className="header_btn text_font_22px font_family_cromorant font_weight_600">
          Hire me
        </button>
      </div>
    </header>
  );
};

export default PageHeader;
