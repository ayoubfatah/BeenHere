import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
//
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

//
const CityItem = ({ city }) => {
  console.log(city);
  const { cityName, emoji, date } = city;
  console.log(date);
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};

export default CityItem;

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};
