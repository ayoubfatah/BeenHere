import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "./Logo";
const PageNav = () => {
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={style.ctaLink} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
