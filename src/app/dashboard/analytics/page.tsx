"use client"

import ChartBox from '@/components/ChartBox';
import styles from '@/styles/Analytics.module.css'

const Analytic = () => {
   return (
      <>
         <div className={`wrapper d-umid ${styles.main} `}>
            <ChartBox />
         </div>
      </>
   );
}

export default Analytic;