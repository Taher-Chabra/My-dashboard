import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css"
import styles from "@/styles/HomeLayout.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Dashboard App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`page ${styles.children}`}>
          {children}
        </div>
        <div className={styles["footer-section"]}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
