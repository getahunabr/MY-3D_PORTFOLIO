import React from "react";
import { socialImgs } from "../assets/constants/index";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Visit My Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            ©️{new Date().getFullYear()}Getahun|Lakachew.All right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
