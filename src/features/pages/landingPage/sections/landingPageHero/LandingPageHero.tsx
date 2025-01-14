// LandingPageHero.jsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './landing-page-hero.module.css';
import Link from 'next/link';
import useWindowWidth from '@/hooks/useWindowWidth';

const images = [
  "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1734134648~exp=1734138248~hmac=1da60576dd5d53d71996a06e75ecbd5f00113d9decd5494742fe224b6273d828&w=740",
  "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid"
];

const LandingPageHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const windowWidth = useWindowWidth()
  const isTab = windowWidth >= 768

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section className={styles.heroSection}>
      <article className={styles.container}>

        <Image
          src={`${images[currentImageIndex]}`}
          alt="Background overlay image"
          aria-hidden="true"
          width={200}
          height={440}
          className={styles.imageBackground}
          // blurDataURL="https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid"
          priority
        />

        {/* <div
          aria-hidden="true"
          className={styles.imageBackground}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div> */}

        <div className={styles.contentWrapper}>
          <header className={styles.header}>
            <h1 className={styles.heroTitle}>Discover the perfect property that matches your lifestyle and needs.</h1>
            <p className={styles.heroSubtitle}>Explore the best properties.</p>
          </header>

          {
            isTab 
            &&
            <Image
              src={"/realtor.png"}
              alt="Realtor advertising house"
              width={windowWidth > 1000 ? 500 : 400}
              height={windowWidth > 1000 ? 400 : 300}
              className={styles.realtor}
              aria-hidden="true"
            />
          }
          
          <div className={styles.heroLinkContainer}>
            <Link href="property-listing"  className={styles.linkButton}>View listing</Link>
            <a href="tel:+2348156959983" className={styles.linkButton}>Contact</a>
          </div>
      </div>
      </article>

      <aside className={styles.offsetButtons} aria-hidden="true">
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.heroButton} ${
              currentImageIndex === index ? styles.activeButton : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
          </button>
        ))}
      </aside>
    </section>
  );
};

export default LandingPageHero;
