import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Feedbacks.css";

const Feedbacks = () => {
  const feedbacks = [
    {
      name: "Meryem M.",
      desc: "Ador unghiile făcute de tine, mereu sunt finuțe, bine lucrate și rezistente! Totul este foarte curat și ești foarte atentă la detalii.",
    },
    {
      name: "Alina P.",
      desc: "Cele mai frumoase unghiuțe ever! Criss poate face orice formă, orice model și unghiuțe foarte rezistente!",
    },
    {
      name: "Cosmina L.",
      desc: "Te ador! Ești cea mai bună în ceea ce faci, sunt foarte fericită de unghiuțele mele pe care le am, mulțumesc mult!",
    },
    {
      name: "Alexandra B.",
      desc: "Ești cea mai tare manichiuristă la care am fost vreodată, nu există alta mai bună, de la comportament până la tot.",
    },
    {
      name: "Bianca R.",
      desc: "Unghiile mele sunt perfecte de fiecare dată! Sunt atât de mulțumită de serviciile tale, le recomand tuturor prietenelor mele!",
    },
    {
      name: "Ioana D.",
      desc: "De fiecare dată când vin la tine, știu că plec super încântată. Unghiile mele arată impecabil și mă țin mult timp!",
    },
    {
      name: "Gabriela C.",
      desc: "Cel mai relaxant loc în care îmi fac unghiile! Criss este extrem de profesionistă și are grijă de fiecare detaliu.",
    },
    {
      name: "Simona T.",
      desc: "Sunt mereu impresionată de creativitatea și precizia ta! Unghiile mele arată de fiecare dată senzațional!",
    },
    {
      name: "Ana M.",
      desc: "Îmi place să vin la tine pentru că ești atât de atentă la preferințele mele. Unghiile mele arată exact cum mi le-am dorit!",
    },
    {
      name: "Carmen S.",
      desc: "Nu m-aș duce niciodată la altcineva! Criss face treabă de nota 10 și atmosfera din salon este mereu plăcută!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="feedbacks" id="feedbacks">
      <div className="content">
        <h2 className="text-2">Ce spun fetele?</h2>
        <Slider {...settings} className="slider">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-slide">
              <p className="feedback-desc">"{feedback.desc}"</p>
              <h3 className="feedback-name">- {feedback.name}</h3>
            </div>
          ))}
        </Slider>
        <img
          className="feedback-img"
          src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727891281/cristina/D890B044-A7AB-49F8-B4DF-6F29B326EAC1_em1hao.jpg"
          alt="Cristina"
        />
      </div>
    </section>
  );
};

export default Feedbacks;
