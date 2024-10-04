import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="content">
        <div className="about about1">
          <h2 className="text-2">Mă numesc Cristina.</h2>
          <p className="p-1">
            Pasiunea mea pentru manichiură a început acum peste 2 ani,
            dezvăluind o lume fascinantă de culori și detalii fine. <br />
            <br />
            Fiecare unghie devine o operă de artă personalizată, aducând
            frumusețe și încredere femeilor.
          </p>
        </div>
        <div className="about about2">
          <h2 className="text-2">
            Calitatea este <br /> prioritatea mea.
          </h2>
          <p className="p-1">
            Investesc în produse de top și în educația mea continuă, participând
            constant la cursuri pentru a explora tehnici noi. <br /> <br />{" "}
            Feedback-ul pozitiv al clientelor mă motivează să evoluez și să
            depășesc așteptările.
          </p>
        </div>
        <div className="about about3">
          <h2 className="text-2">Manichiura este mai mult decât o meserie.</h2>
          <p className="p-1">
            Îmi dedic timpul și energia pentru a crea unghii unice ce reflectă
            personalitatea fiecărei cliente. <br />
            <br /> Aștept cu nerăbdare să te cunosc și să îți aduc un strop de
            strălucire în viață!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
