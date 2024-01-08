import "./style.css";

export function Header({Logo}) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="content">
          <a href="#" className="logo">
            {Logo}
          </a>
          <nav className="header-nav">
            <a href="#" className="header-nav_link">
              Sports
            </a>
            <a href="#" className="header-nav_link">
              Shops
            </a>
            <a href="#" className="header-nav_link">
              Stores
            </a>
          </nav>
          <div className="burger-menu">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
