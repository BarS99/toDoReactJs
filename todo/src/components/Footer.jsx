import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__cell" />
        <div className="footer__cell">
          <address className="footer__item">
            Created by{" "}
            <a
              rel="author"
              href="https://github.com/BarS99"
              className="footer__author"
            >
              Bartlomiej Swiech
            </a>
            , © 2021
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
