import Lottie from "lottie-react";
import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Header.css";
import animation from "./hero.json";
const Header = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <Lottie animationData={animation}/>
    <div>
    <div className="header-content">
        <h3>Product Manager</h3>
        <h1 className="header-title">
          I'm Noyon Podder <br />A{" "}
          <span className="text-warning">Front End Developer</span>
        </h1>
        <div className="mt-5">
          <button className=" btn btn-warning capitalize">
            <a
              className="flex items-center gap-x-3"
              href="Noyon-Podder Resume.pdf"
              download="Noyon-Podder Resume.pdf"
            >
              Get Resume <FaDownload />
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    // <div className="h-screen flex items-center">
      
    // </div>
  );
};

export default Header;
