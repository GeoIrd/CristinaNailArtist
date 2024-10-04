import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css";
import Btn from "../../Components/Btn/Btn";
import { Link } from "react-scroll";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    fade: true,
  };

  // Container with stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger effect
      },
    },
  };

  // Variants for individual letters with rotation
  const letterVariants = {
    hidden: { opacity: 0, rotate: -90, y: -50 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for paragraph and button
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 3.8 },
    },
  };

  // Variants for slider animation
  const sliderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 4.2 },
    },
  };

  // Function to split text into individual letters for animation
  const animateText = (text) => {
    return text.split("").map((letter, index) => (
      <motion.span key={index} variants={letterVariants}>
        {letter}
      </motion.span>
    ));
  };

  return (
    <header className="header" id="home">
      <a href="https://wa.me/40799355048">
        <div className="whatsapp">
          <i class="fa-brands fa-whatsapp"></i>
        </div>
      </a>

      <motion.div
        className="content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text animation with individual letters */}
        <motion.h1 className="text-1">
          {animateText("Frumusețea începe")}

          <br />
          {animateText("cu unghiile tale")}
        </motion.h1>

        <motion.p className="p-2" variants={textVariants}>
          Experimentează frumusețea și rafinamentul prin cele mai noi tendințe
          în manichiură.
        </motion.p>

        <Link to="prices" smooth={true} duration={500} spy={true} offset={-50}>
          <motion.div variants={textVariants}>
            <Btn variant={"dark"}>Lista de prețuri </Btn>
          </motion.div>
        </Link>

        {/* Slider animation */}
        <motion.div variants={sliderVariants} className="slider-wrapper">
          <Slider {...settings} className="slider">
            <div className="img-wrapper">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727850519/cristina/af1ee697-e928-43fe-9eca-4c5ac29ef777_emaosr.jpg"
                alt="image 1"
              />
            </div>
            <div className="img-wrapper">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727850519/cristina/ee904fc6-e7db-49e6-9142-ac79c1654537_uakv5y.jpg"
                alt="image 2"
              />
            </div>
            <div className="img-wrapper">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727850518/cristina/3ee2671b-f3ba-4762-8850-fc99214b9527_ltym2t.jpg"
                alt="image 3"
              />
            </div>
          </Slider>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
