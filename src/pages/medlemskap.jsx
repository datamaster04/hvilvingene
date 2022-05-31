import React from "react";
import "../style/App.css";
import "../style/medlemskap.css";
import MedlemskortStandard from "../assets/images/VingerTreningssenterMedlemskort.png";
import MedlemskortPluss from "../assets/images/VingerTreningssenterMedlemskortPluss.png";

const medlemskap = (props) => {
  return (
    <section>
      <div className="medlemskap-section">
        <div className="header-section">
          <div className="header-medlemskap">Medlemskap</div>
          <div className="info-medlemskap">
            Vi har forskjellige medlemskap! Finn ditt behov hos oss, vi tilbyr
            tilpasset medlemskap for alle aldre, og hvilket bruk du vil ha! Alle
            under 6 går gratis med foreldre! Alle de orginale medlemskapene er 3
            måneder.
          </div>
        </div>
        <div className="standard-medlemskap">
          <div className="medlem-section-1">
            <div className="medlem-junior">
              <div className="header-medlem-junior">
                Medlem junior (6-12 år)
              </div>
              <div className="pris-medlem-junior">Pris: 400 kroner</div>
              <div className="image-medlem-junior">
                <img
                  className="medlemskort-image-medlem-junior"
                  src={MedlemskortStandard}
                ></img>
              </div>
            </div>
            <div className="medlem-ungdom">
              <div className="header-medlem-ungdom">
                Medlem ungdom (13-17år)
              </div>
              <div className="pris-medlem-ungdom">Pris: 650 kroner</div>
              <div className="image-medlem-ungdom">
                <img
                  className="medlemskort-image-medlem-ungdom"
                  src={MedlemskortStandard}
                ></img>
              </div>
            </div>
          </div>
          <div className="medlem-section-2">
            <div className="medlem-voksen">
              <div className="header-medlem-voksen">
                Medlem voksen (18-60 år)
              </div>
              <div className="pris-medlem-voksen">Pris: 800 kroner</div>
              <div className="image-medlem-voksen">
                <img
                  className="medlemskort-image-medlem-voksen"
                  src={MedlemskortStandard}
                ></img>
              </div>
            </div>
            <div className="medlem-senior">
              <div className="header-medlem-senior">Medlem senior (60 år+)</div>
              <div className="pris-medlem-senior">Pris: 650 kroner</div>
              <div className="image-medlem-senior">
                <img
                  className="medlemskort-image-medlem-senior"
                  src={MedlemskortStandard}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="øvrige-medlemskaper-section">
          <div className="øvrige-medlemskaper-header">Øvrige medlemskap</div>
          <div className="øvrige-medlemskaper-info">
            Vi legger opp til at alle har muligheten til forksjellige
            medlemskap, da vil prisen for flere måneder komme i tillegg på den
            orginale prisen, for eksempel (eksempel). Du kan kjøpe flere måneder
            på ditt medlemskap, og du har mulighet å kjøpe medlem pluss for
            andre fordeler.
          </div>
          <div className="øvrige-medlemskaper">
            <div className="medlem-pluss">
              <div className="header-medlem-pluss">Standard Pluss</div>
              <div className="pris-medlem-pluss">Pris: 150 kroner</div>
              <div className="image-medlem-pluss">
                <img
                  className="medlemskort-image-medlem-junior"
                  src={MedlemskortPluss}
                ></img>
              </div>
            </div>
            <div className="medlem-pluss-3-måneder">
              <div className="header-medlem-junior">Standard + 3 måneder</div>
              <div className="pris-medlem-junior">Pris: 200 kroner</div>
              <div className="image-medlem-junior">
                <img
                  className="medlemskort-image-medlem-junior"
                  src={MedlemskortStandard}
                ></img>
              </div>
            </div>
            <div className="medlem-pluss-6-måneder">
              <div className="header-medlem-junior">Standard + 6 måneder</div>
              <div className="pris-medlem-junior">Pris: 350 kroner</div>
              <div className="image-medlem-junior">
                <img
                  className="medlemskort-image-medlem-junior"
                  src={MedlemskortStandard}
                ></img>
              </div>
            </div>
            <div className="medlem-pluss-9-måneder">
              <div className="header-medlem-junior">Standard + 9 måneder</div>
              <div className="pris-medlem-junior">Pris: 469 kroner</div>
              <div className="image-medlem-junior">
                <img
                  className="medlemskort-image-medlem-junior"
                  src={MedlemskortStandard}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default medlemskap;
