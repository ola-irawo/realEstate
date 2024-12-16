import Image from 'next/image'
import React from 'react'
import styles from "./about-hero.module.css"

const AboutHero = () => {
  return (
    <section className={styles.aboutUsSection}>
      <h2 className={styles.sectionTitle}>Welcome to Aremudami Luxury Real Estate Agency!</h2>

      <article className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-photo/cozy-house-concept-with-wooden-toy-house_23-2149595151.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid"
            alt="Welcome to Aremudami Luxury Real Estate"
            width={500}
            height={300}
            className={styles.responsiveImage}
          />
        </div>

        <div className={styles.textContent}>
          <p className={styles.sectionDescription}>
            Our dedicated team offers top-notch services for all your real estate needs. From buying to selling or renting, 
            we provide expert guidance and personalized solutions. Trust, integrity, and transparency are the foundation of 
            our lasting relationships with valued clients like you. Whether you&apos;re a first-time homebuyer or an investor, 
            we&apos;re here to support you every step of the way. Experience the difference with us!
          </p>
        </div>

      </article>
    </section>
  )
}

export default AboutHero
