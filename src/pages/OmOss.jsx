import React from "react";
import "../style/App.css";
import "../style/OmOss.css";
import BildeOmOss from "../assets/images/BildeOmOss.png";

const OmOss = (props) => {
  return (
    <section>
      <div className="OmOss-section">
        <div className="OmOss-bilde">
          <img class="BildeOmOss" src={BildeOmOss} />
        </div>
        <div className="texts">
          <div className="header-OmOss">
            Om Oss
            <div className="text-OmOss">
              Vi er en gruppe trenings entusiaster, som startet opp nylig i
              2021. Vi tilbyr trenings fasiliteter i høye kvaliteter, sentralt
              beliggenhet i Hamar, og en høy standard. Kom innom på en kopp
              kaffe og titt på senteret vårt!
            </div>
          </div>
          <div className="header-fasiliteter">
            Fasiliteter
            <div className="text-fasiliteter">
              Blant annet store garderober og badstue, store relaxområder og
              barnepark med mulighet for barnepass, og mye mer!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmOss;
