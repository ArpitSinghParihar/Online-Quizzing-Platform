import { Link } from "react-router";
import img from "../assets/logo.jpg";

const Header = () => (
  <header className="header-container" id="nav-header">
    <div className="Header-content">
      <div id = "h" className="logo-content">
        <Link to="/" className="logo">
          <img id="logo-image" src={img}></img>

          <h3 id="logo-text">Let's Play</h3>
        </Link>
      </div>
      <nav className="nav-content">
        <Link to="/">Home</Link>
        <Link to="/feature" id="feature-id">
          Feature
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <Link to="/login">
        <button className="Login-button">Login</button>
      </Link>
    </div>
  </header>
);

export default Header;
