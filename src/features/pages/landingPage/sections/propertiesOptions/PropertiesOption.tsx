import React from "react";
import styles from "./properties-option.module.css";
import Link from "next/link";
import Image from "next/image";

const PropertiesOption = () => {
  const options = [
    {
      title: "Properties for Sale",
      description: "Find your dream home or investment property.",
      linkText: "Explore Sale Listings",
      image: "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid", // Replace with your actual image paths
      type: "sale",
    },
    {
      title: "Properties for Rent",
      description: "Browse rental options that suit your lifestyle.",
      linkText: "Explore Rental Listings",
      image: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1734134648~exp=1734138248~hmac=1da60576dd5d53d71996a06e75ecbd5f00113d9decd5494742fe224b6273d828&w=740", // Replace with your actual image paths
      type: "rent",
    },
    {
      title: "Shortlet Properties",
      description: "Discover short-term stays and accommodations.",
      linkText: "Explore Shortlet Listings",
      image: "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid", // Replace with your actual image paths
      type: "shortlet",
    },
  ];

  return (
    <section className={styles.propertiesOptionSection}>
        <article className={styles.container}>
          {options.map((option, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={option.image}
                  alt={option.title}
                  width={150}
                  height={100}
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{option.title}</h3>
                <p className={styles.cardDescription}>{option.description}</p>
                <Link href={{pathname: "/property-listing", query: {propertyType: option.type}}} className={styles.cardLink}>
                  {option.linkText}
                </Link>
              </div>
            </div>
          ))}
        </article>

    </section>
  );
};

export default PropertiesOption;
