/* eslint-disable react/prop-types */

import { formatDateForCityItem } from "../helpers/formatDate";
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = city;

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDateForCityItem(date)}</time>
        <button className={styles.deleteBtn}>x</button>
      </Link>
    </li>
  );
}

export default CityItem;
