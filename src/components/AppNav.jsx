import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
const AppNav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countrties</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
