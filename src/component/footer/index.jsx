import "./style.css"
export function Footer({logoTitle}) {
    return(
        <footer className="page-footer">
            <div className="container">
            <div className="content">
          <a href="#" className="logo">
            {logoTitle}
          </a>
          <nav className="footer-nav">
            <a href="#" className="footer-nav_link">
              Sports
            </a>
            <a href="#" className="footer-nav_link">
              Shops
            </a>
            <a href="#" className="footer-nav_link">
              Stores
            </a>
          </nav>
          
        </div>
      </div>
        </footer>
    )
}