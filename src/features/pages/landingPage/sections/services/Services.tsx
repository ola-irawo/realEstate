import React from "react";
import styles from "./services.module.css";

// Service data
const serviceItems = [
  {
    title: "Property Buying",
    description: "Find your dream property with our extensive listings and expert guidance.",
    imageUrl:
      "https://img.freepik.com/free-photo/still-life-keys-new-home_23-2151015271.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid",
  },
  {
    title: "Property Selling",
    description: "Sell your property at the best market price with our assistance.",
    imageUrl:
      "https://img.freepik.com/free-photo/house-with-sold-yard-sign_23-2149383622.jpg?t=st=1734190707~exp=1734194307~hmac=830fb2c204f05ca3c2e0117a4c3510e33f965d4abf222a82679aef98aae7a334&w=826",
  },
  {
    title: "Property Rentals",
    description: "Explore flexible rental options tailored to your needs.",
    imageUrl:
      "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid",
  },
  {
    title: "Consultation",
    description: "Get expert advice on property investments and market trends.",
    imageUrl:
      "https://img.freepik.com/free-photo/happy-couple-planning-redecorating-house_23-2148814339.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid",
  },
];

// ServiceItem Component
const ServiceItem = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => (
  <li
    tabIndex={0}
    className={styles.serviceItem}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{description}</p>
  </li>
);

// Main Services Component
const Services = () => {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <article className={styles.article}>
        <h2 id="services-heading" className={styles.heading}>
          Our Services
        </h2>
        <ul className={styles.servicesList}>
          {serviceItems.map((item, index) => (
            <ServiceItem
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Services;
