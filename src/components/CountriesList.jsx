import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
const CountriesList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countriesSet = new Set(cities.map((city) => city.country));
  console.log(countriesSet);
  const countries = [];

  //countries
  cities.forEach((city) => {
    if (countriesSet.has(city.country)) {
      countriesSet.delete(city.country);
      countries.push({ country: city.country, emoji: city.emoji });
    }
  });
  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
};

CountriesList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cities: PropTypes.array.isRequired,
};

export default CountriesList;
