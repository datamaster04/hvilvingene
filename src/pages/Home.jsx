import React from "react";
import "../style/App.css";
import "../style/Home.css";
import BildeFysioterapaut from "../assets/images/bilde-fysioterapaut.png";
import BildeEnSosialArena from "../assets/images/bilde-en-sosial-arena.png";
import BildeAlleAldersgrupper from "../assets/images/bilde-alle-aldre.png";
import BildeTreningsglede from "../assets/images/bilde-treningsglede.png";

const åpningstider = [
  {
    day: "Mandag",
    tider: "06.30-23.00",
  },
  {
    day: "Tirsdag",
    tider: "06.30-23.00",
  },
  {
    day: "Onsdag",
    tider: "07.00-23.00",
  },
  {
    day: "Torsdag",
    tider: "07.00-23.00",
  },
  {
    day: "Fredag",
    tider: "08.00-23.00",
  },
  {
    day: "Lørdag",
    tider: "08.30-22.30",
  },
  {
    day: "Søndag",
    tider: "09.00-22.30",
  },
];

const Home = (props) => {
  return (
    <section>
      <div className="flex-container">
        <div className="bilde-section-1">
          <img className="BildeFysioterapaut" src={BildeFysioterapaut} />
          <img className="BildeEnSosialArena" src={BildeEnSosialArena} />
        </div>
        <div className="info-section">
          <div className="header-home"> Velkommen til Vinger! </div>
          <div className="under-header-home">
            Treningsenteret der du finner din ro.
          </div>
          <div className="opening-header-home">
            Vi har åpent hele året med noen begrensede åpningstider
          </div>
          <div className="opening-home">
            {åpningstider.map((tid, idx) => (
              <p className="dager" key={idx}>
                {tid.day}: {tid.tider}
              </p>
            ))}
          </div>
        </div>
        <div className="bilde-section-2">
          <img className="BildeAlleAldre" src={BildeAlleAldersgrupper} />
          <img className="BildeTreningsglede" src={BildeTreningsglede} />
        </div>
      </div>
    </section>
  );
};

export default Home;
