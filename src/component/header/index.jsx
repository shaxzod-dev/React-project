import { Link } from "react-router-dom";
import "./style.css";
import { linkData } from "../Data";

export function Header({ Logo }) {
  
  return (
    <header className="page-header">
      <div className="container">
        <div className="cantent">
          <Link to={"/"} className="logo">
            {Logo}
          </Link>
          <nav className="header-nav">
            {linkData.map(({ id, path, text }) => (
              <Link key={id} to={path} className="header-nav_link">
                {text}
              </Link>
            ))}
          </nav>
          <div className="burger-menu">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
