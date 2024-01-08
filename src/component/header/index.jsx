import { Link } from "react-router-dom";
import "./style.css";

export function Header({ Logo }) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="cantent">
          <Link to={"/"} className="logo">
            {Logo}
          </Link>
          <nav className="header-nav">
            <Link to={"/"} className="header-nav_link">
              Home
            </Link>
            <Link to={"/about"} className="header-nav_link">
              About Us
            </Link>
            <Link to={"/services"} className="header-nav_link">
              Services
            </Link>
            <Link to={"/contacts"} className="header-nav_link">
              Contacts
            </Link>
          </nav>
          <div className="burger-menu">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
