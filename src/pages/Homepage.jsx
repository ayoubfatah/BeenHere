import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import Pricing from "../pages/Pricing";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          Keep a world map that records every city you have visited, capturing
          your memorable experiences and allowing you to share your global
          adventures with friends.
        </h2>
        <Link to="/login" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
