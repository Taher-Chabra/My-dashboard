"use client";

import Card from "@/components/Cards";
import { MdContentCopy } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { BiInfoCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import CountryData from "@/components/CountryData";
import PhotoCard from "@/components/Photos";
import ChartBox from "@/components/ChartBox";
import styles from "@/styles/Dashboard.module.css";

export type CardDets = {
  name: string;
  icon: React.JSX.Element;
  value: string;
  msg: string;
  color: string;
};

function Page() {
  const cardDets: CardDets[] = [
    {
      name: "Used Space",
      icon: <MdContentCopy className={styles.bgOrange} />,
      value: "49/50 GB",
      msg: "Get more space",
      color: "#fb923c",
    },
    {
      name: "Revenue",
      icon: <FaShop className={styles.bgGreen}/>,
      value: "$34,245",
      msg: "Last 24 hours",
      color: "#064E3B",
    },
    {
      name: "Fixed Issues",
      icon: <BiInfoCircle className={styles.bgRed} />,
      value: "75",
      msg: "Tracked from Github",
      color: "#B91C1C",
    },
    {
      name: "Followers",
      icon: <FaTwitter className={styles.bgBlue} />,
      value: "+245",
      msg: "Just updated",
      color: "#2563EB",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles['card-wrapper']}>
        {cardDets.map((e: CardDets, i: number) => {
          return (
            <Card
              key={i}
              name={e.name}
              icon={e.icon}
              value={e.value}
              msg={e.msg}
              color={e.color}
            />
          );
        })}
      </div>

      <div className={`d-mid ${styles['country-data-wrapper']}`}>
        <CountryData />
      </div>

      <div className={`d-umid ${styles['chart-box-wrapper']}`}>
        <ChartBox />
      </div>

      <div className="d-lmid">
        <p className={styles.heading}>Manage Listings</p>
        <div className={styles["photo-card-wrapper"]}>
          <PhotoCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
