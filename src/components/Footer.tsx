"use client";

import Image from "next/image";
import styles from '@/styles/Footer.module.css'

const Footer = () => {
   const fullYear = new Date().getFullYear()
  return (
   <footer className={styles.footer}>
      <div className={styles.container}>
         <a className={styles['image-container']}>
            <Image
               className={styles.image}
               src="https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134012.jpg?t=st=1722079357~exp=1722082957~hmac=10b22dc6022975b27fe5cbfa061ae37a39176deedb207763b14253b3f351794e&w=740"
               height={35}
               width={35}
               alt=""
            />
            <span className={styles.user}>{'Taher'}</span>
         </a>
         <p className={styles.copyright}>
         &copy; {fullYear} Taher Chabra —
            <a
               href="https://in.linkedin.com/in/taher-chabra"
               className={styles['name-link']}
               rel="noopener noreferrer"
               target="_blank"
            >
               @Taher Chabra
            </a>
         </p>
         <span className={styles.socials}>
            <a className="text-gray-500">
               <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={styles.wh}
                  viewBox="0 0 24 24"
               >
               <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
               </svg>
            </a>
            <a className={styles.icon}>
               <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={styles.wh}
                  viewBox="0 0 24 24"
               >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
               </svg>
            </a>
            <a className={styles.icon}>
               <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={styles.wh}
                  viewBox="0 0 24 24"
               >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
               </svg>
            </a>
            <a className={styles.icon}>
               <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={styles.wh}
                  viewBox="0 0 24 24"
               >
                  <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
               </svg>
            </a>
         </span>
      </div>
   </footer>
  );
};

export default Footer;
