import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import Logo from "../assets/images/LogoTreningssenterVinger.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light menylinje">
      <div className="container-fluid">
        <button
          className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 meny">
            <li className="nav-item" />
            <Link className="nav-link active" to="/Home">
              Hjem
            </Link>
            <li className="nav-item" />
            <Link className="nav-link active" to="/gruppetimer">
              Gruppetimer
            </Link>

            <Link className="nav-link active" to="/Home">
              <img className="logo" src={Logo} alt="vinger tegning" />
            </Link>

            <li className="nav-item" />
            <Link className="nav-link active" to="/om-oss">
              Om oss
            </Link>
            <li className="nav-item" />
            <Link className="nav-link active" to="/kontakt-oss">
              Kontakt oss
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
