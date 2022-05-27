import React from "react";
import "../style/App.css";
import "../style/Home.css";
import background from "../assets/images/LogoTreningssenterVinger.png";

const Home = (props) => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        Hello World
      </div>
    </section>
  );
};

export default Home;
