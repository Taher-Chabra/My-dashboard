"use client";

import Image from "next/image";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useState } from "react";

const Header = () => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <div className={styles["inner-main"]}>
        <div>
          <Link href={"/dashboard"}>
            <h3 className={styles["main-title"]}>Dashboard</h3>
          </Link>
        </div>

        <div className={`${styles["nav-items"]} ${styles[`${dropOpen? "open" : ""}`]}`}>
          <div className={styles["drop-menu"]}>
            <button onClick={() => setDropOpen((prev) => !prev)}
               className={styles.btn}>
              {dropOpen ? <ImMenu4 /> : <ImMenu3 />}
            </button>
          </div>
          <ul className={styles["list-items"]}>
            <Link href={"/dashboard/analytics"}>
              <li>Analytic</li>
            </Link>
            <Link href={"/dashboard/products"}>
              <li>Products</li>
            </Link>
            <Link href={"/dashboard/profile"}>
              <li>Profile</li>
            </Link>
          </ul>
        </div>

        <div className={styles["user-detail"]}>
          <Image
            className={styles.image}
            src="https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134012.jpg?t=st=1722079357~exp=1722082957~hmac=10b22dc6022975b27fe5cbfa061ae37a39176deedb207763b14253b3f351794e&w=740"
            height={35}
            width={35}
            alt="image"
          />
          <h4 className={styles.user}>{"Taher"}</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
