import CData from "@/data/RevenueData.json";
import MapChart from "./MapChart";
import { FaGlobe } from "react-icons/fa6";
import styles from "@/styles/CountryData.module.css"

type DataType = {
  country: string;
  value: string;
  percent: string;
};

function CountryData() {
  return (
    <div className={styles['country-data-container']}>
      <div className={styles.main}>
        <div className={styles['main-inner']}>
          <div
            className={styles['card-icon']}
          >
            <FaGlobe />
          </div>
          <p className={styles.text}>
            Global Sales by Top Locations
          </p>
        </div>

        <ul className={styles['data-container']}>
          {CData.map((e: DataType, i: number) => {
            return (
              <li
                key={i}
                className={styles['data-items']}
              >
                <div>
                  <p>{e.country}</p>
                </div>
                <div className={styles['item-inner']}>
                  <p>{e.value}</p>
                  <p>{e.percent}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles['map-chart']}>
        <MapChart />
      </div>
    </div>
  );
}

export default CountryData;
