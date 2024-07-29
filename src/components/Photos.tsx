import Image from "next/image";
import * as React from "react";
import styles from '@/styles/Photos.module.css'

const PhotoCard = () => {
  let photodest = [
    {
      img: "https://external-preview.redd.it/kIF--f0qJzux_vBXNN8gEf7v4wMX6sXuQ6WS1E5dDJI.jpg?auto=webp&s=485d3fb8581f0df23138139c4425bc480dd72d7d",
      topic: "Cozy 5 Stars Apartment",
      desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to  where you can enjoy the night life in London, UK.",
      price: "$799",
      location: "Barcelona, Spain",
    },
    {
      img: "https://entrepreneurhandbook.co.uk/wp-content/uploads/2016/04/Coworking-space-in-London.jpg.webp",
      topic: "Office Studio",
      desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to  where you can enjoy the night life in London, UK.",
      price: "$899",
      location: "London, UK",
    },
    {
      img: "https://cdn.roadtrips.com/wp-content/uploads/2016/11/1-6-768x432.jpg",
      topic: "Beautiful Castle",
      desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to  where you can enjoy the night life in London, UK.",
      price: "$999",
      location: "Milan, Italy",
    },
  ];
  return (
    <>
      {photodest.map((e, i) => {
        return (
          <div key={i} className="chart-wrapper">
            <div className="box"
            style={{color: "white"}}
            >
              <Image
                className={styles.image}
                src={e.img}
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className={styles['img-container']}>
              <div className={styles['img-info']}>
                <p className={styles['img-topic']}>{e.topic}</p>
                <p className={styles['img-desc']}>{e.desc}</p>
              </div>
              <div className={styles['img-bottom-section']}>
                <p className={styles['img-price']}>{e.price}/Night</p>
                <p className={styles['img-location']}>{e.location}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PhotoCard;
