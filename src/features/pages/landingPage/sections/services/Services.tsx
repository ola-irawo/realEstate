import React from 'react';
import styles from './services.module.css';

const Services = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.heading}>Our Services</h2>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem} style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/still-life-keys-new-home_23-2151015271.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid)' }}>
            <h3 className={styles.serviceTitle}>Property Buying</h3>
            <p className={styles.serviceDescription}>
              Find your dream property with our extensive listings and expert guidance.
            </p>
          </li>
          <li className={styles.serviceItem} style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/house-with-sold-yard-sign_23-2149383622.jpg?t=st=1734190707~exp=1734194307~hmac=830fb2c204f05ca3c2e0117a4c3510e33f965d4abf222a82679aef98aae7a334&w=826'}}>
            <h3 className={styles.serviceTitle}>Property Selling</h3>
            <p className={styles.serviceDescription}>
              Sell your property at the best market price with our assistance.
            </p>
          </li>
          <li className={styles.serviceItem} style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid)' }}>
            <h3 className={styles.serviceTitle}>Property Rentals</h3>
            <p className={styles.serviceDescription}>
              Explore flexible rental options tailored to your needs.
            </p>
          </li>
          <li className={styles.serviceItem} style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/happy-couple-planning-redecorating-house_23-2148814339.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid)' }}>
            <h3 className={styles.serviceTitle}>Consultation</h3>
            <p className={styles.serviceDescription}>
              Get expert advice on property investments and market trends.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Services;
