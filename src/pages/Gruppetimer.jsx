import React from "react";
import "../style/App.css";
import "../style/Gruppetimer.css";

const Gruppetimer = (props) => {
  return (
    <section>
      <div className="section">
      <div className="gruppetimer-header">
            Påmelding gruppetimer Vinger Treningssenter
          </div>
        <div className="gruppetimer-section">
        <div className="gruppetimer-info">
              <div className="gruppetimer-info-header">Info om bestilling</div>
              <div className="gruppetimer-info-text">Vi vil få inn din bestilling, så vil vi sette 
              deg opp på neste ledige time, du kan også ringe ned å bestille om du vil. Vi kontakter deg på ditt telefonnummer. Vår 
              kontaktinformasjon og åpningssider finner du enkelt tilgjengelig på kontakt oss, 
              om oss, og nederst på nettsiden.</div>
          </div>
          <div className="gruppetimer-form">
            <iframe
            className="form-gruppetimer"
              src="https://forms.gle/BhQeXPdxHi4RfJne6"
              width="1000px"
              height="500px"
              alt="google forms custom"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gruppetimer;
