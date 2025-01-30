import { NavLink } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <i className="fa-brands fa-github"></i>
        <p>© 2025 GitHub, Inc.</p>
      </div>
      <NavLink to="/">Terms</NavLink>
      <NavLink to="/">Privacy</NavLink>
      <NavLink to="/">Security</NavLink>
      <NavLink to="/">Status</NavLink>
      <NavLink to="/">Docs</NavLink>
      <NavLink to="/">Contact</NavLink>
      <NavLink to="/">Manage cookies</NavLink>
      <NavLink to="/">Do not share my personal information</NavLink>
    </div>
  );
}

export default Footer;
