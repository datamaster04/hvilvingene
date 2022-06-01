import React from "react";
import "../style/App.css";
import "../style/KontaktOss.css";

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

const informasjon = [
    {
        informasjon: "Adresse",
        id: "Brygga 20, 2317 Hamar",
    },

    {
        informasjon: "Telefonnummer",
        id: "62 53 44 45",
    },

    {
        informasjon: "Mail",
        id: "datamaster04@gmail.com"
    }
];

const KontaktOss = (props) => {
  return (
    <section>
      <div className="KontaktOss-section">
        <div className="KontaktOss-header">Kontakt Oss</div>
        <div className="container-KontaktOss">
          <div className="form-section-KontaktOss">
            <div className="form-KontaktOss">
              <iframe
                className="form-KontaktOss"
                src="https://forms.gle/MmBuiEkWrWC1yKrP8"
                width="1000px"
                height="1009px"
                alt="google form custom"
              ></iframe>
            </div>
          </div>

          <div className="KontaktOss-opening-section">
            <div className="KontaktOss-opening-header">Åpningstider</div>
            <div className="KontaktOss-opening">
              {åpningstider.map((tid, idx) => (
                <p className="dager" key={idx}>
                  {tid.day}: {tid.tider}
                </p>
              ))}
            </div>
          </div>
          
        </div>
        <div className="kontaktinformasjon-section">
        <div className="maps-section">
            <iframe 
            className="maps"
            src="https://maps.google.com/maps?q=Brygga%2020,%202317%20Hamar
            &t=k&z=13&ie=UTF8&iwloc=&output=embed"
            width="1000px"
            height="500px"
            alt="google maps - actic"
            ></iframe>
        </div>
        <div className="kontaktinformasjon"> 
            <div className="maps-Kontaktoss"></div>
            <div className="kontaktinformasjon-header">Kontaktinformasjon</div>
            <div className="infromasjon-KontaktOss">
              {informasjon.map((info, idx) => (
                <p className="informasjon" key={idx}>
                  {info.informasjon}: {info.id}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontaktOss;
