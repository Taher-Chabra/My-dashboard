
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import styles from '@/styles/HomePage.module.css'

function page() {
  return (
    <div className={styles['navigate-dashboard']}>
      <Link href="/dashboard">
        <button className={styles.btn}>
          Go to Dashboard
          <MdDashboard className={`icon ${styles['dash-icon']}`} />
        </button>
      </Link>
    </div>
  )
}

export default page
