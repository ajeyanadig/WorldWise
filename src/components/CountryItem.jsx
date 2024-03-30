/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <>
      {/* <Link to={}> */}
      <li className={styles.countryItem}>
        <span>{country.emoji}</span>
        <span>{country.country}</span>
      </li>
      {/* </Link> */}
    </>
  );
}

export default CountryItem;
