import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale, elements } from "chart.js";
import styles from "@/styles/ChartBox.module.css"

Chart.register(CategoryScale);
Chart.defaults.color = "white";

const ChartBox = () => {
  return (
    <>
      <div className="chart-wrapper">
        <div className={`box ${styles['chart-box']}`}>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun", "july"],

              datasets: [
                {
                  label: "Sales",
                  data: [45, 50, 60, 95, 54, 23, 56],
                  backgroundColor: "pink",
                  borderColor: "white",
                  tension: 0.2,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              elements: {
                line: {
                  borderWidth: 8,
                },
                point: {
                  radius: 7,
                },
              },
            }}
          />
        </div>
        <div className={styles['text-info']}>
          <div className={styles['text-info-inner']}>
            <p className={styles.text1}>Daily Sales</p>
            <p className={styles.text2}>
              55% increase in today sales
            </p>
          </div>
          <div>
            <p className={styles.text3}>updated 1hr ago</p>
          </div>
        </div>
      </div>

      <div className="chart-wrapper .chart2">
        <div className={`box ${styles['chart-box2']}`}>
          <Bar
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "jun",
                "july",
                "Aug",
                "Sept",
                "Oct",
              ],
              datasets: [
                {
                  label: "Sales",
                  data: [45, 25, 60, 35, 54, 23, 56, 45, 34, 23],
                  backgroundColor: "white",
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              elements: {
                bar: {
                  borderRadius: 3,
                },
              },
            }}
          />
        </div>
        <div className={styles['text-info']}>
          <div className={styles['text-info-inner']}>
            <p className={styles.text1}>Email Subscription</p>
            <p className={styles.text2}>Last Campaing Performance</p>
          </div>
          <div>
            <p className={styles.text3}>Sent 2 days ago</p>
          </div>
        </div>
      </div>
      <div className="chart-wrapper">
        <div className={`box ${styles['chart-box3']}`}>
          <Line
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "jun",
                "jul",
                "aug",
                "sept",
                "oct",
                "nov",
                "dec",
              ],
              datasets: [
                {
                  label: "Sales",
                  data: [
                    600, 850, 800, 760, 650, 640, 600, 555, 560, 540, 550, 560,
                  ],
                  backgroundColor: "pink",
                  borderColor: "white",
                  tension: 0.4,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              elements: {
                line: {
                  borderWidth: 8,
                },
                point: {
                  radius: 7,
                },
              },
            }}
          />
        </div>

        <div className={styles['text-info']}>
          <div className={styles['text-info-inner']}>
            <p className={styles.text1}>Completed task</p>
            <p className={styles.text2}>Last Campaing Performance</p>
          </div>
          <div>
            <p className={styles.text3}>Sent 2 days ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartBox;
