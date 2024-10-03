import React from "react";

import "./Contact.css";
import Btn from "../../Components/Btn/Btn";

const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <div className="content">
        <h2 className="text-2">Dorești o schimbare?</h2>

        <div className="btns">
          <Btn variant={"light"}>
            <a href="https://wa.me/40799355048">
              <i class="fa-brands fa-whatsapp"></i> Număr de WhatsApp
            </a>
          </Btn>
          <Btn variant={"light"}>
            <a href="tel:+40799355048">
              <i class="fa-solid fa-phone"></i> Număr de telefon
            </a>
          </Btn>

          <Btn variant={"light"}>
            <a href="https://www.instagram.com/cristinanail.artist/">
              <i class="fa-brands fa-instagram"></i> Pagină de Instagram
            </a>
          </Btn>
        </div>

        <img
          className="contact-img"
          src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727892070/cristina/Black_And_White_Minimalist_Makeup_Artist_Logo_1_1_ntjwig.png"
          alt="contact img"
        />
      </div>
    </section>
  );
};

export default Contact;
