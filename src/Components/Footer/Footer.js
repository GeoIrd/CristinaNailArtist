import React from "react";

import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="logo">
          <h2 className="text-2">CristinaNailArtist</h2>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/cristinanail.artist/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="tel:+40799355048">
            <i class="fa-solid fa-phone"></i>
          </a>

          <a href="https://wa.me/40799355048">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <i class="fa-brands fa-tiktok"></i>
        </div>
        <hr />

        <ul className="links">
          <li>
            <Link
              to="my-work" // ID-ul secțiunii "Lucrari"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <i className="fa-solid fa-star"></i> Lucrări
            </Link>
          </li>
          <li>
            <Link
              to="prices" // ID-ul secțiunii "Preturi"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <i className="fa-solid fa-rectangle-list"></i> Prețuri
            </Link>
          </li>
          <li>
            <Link
              to="feedbacks" // ID-ul secțiunii "Recenzii"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <i className="fa-solid fa-message"></i> Recenzii
            </Link>
          </li>
          <li>
            <Link
              to="contact" // ID-ul secțiunii "Contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <i className="fa-solid fa-address-book"></i> Contact
            </Link>
          </li>
        </ul>
        <hr />

        <div className="anpc">
          <a href="https://anpc.ro/ce-este-sal/">
            <img
              src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1725189947/anpc1_wmrzod.png"
              alt=""
            />
          </a>
          <a href="https://anpc.ro/">
            <img
              src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1725189947/anpc2_vyfodi.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <p className="yrd">
        <a href="https://yrd.agency">A project made by YRD.AGENCY.</a>
      </p>
    </footer>
  );
};

export default Footer;
