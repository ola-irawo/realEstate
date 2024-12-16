import React from 'react'
import styles from "./why-choose-us.module.css"
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <article className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-photo/corporate-clients-real-estate-agent-negotiating-leasing-contract_482257-91413.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid"
            alt="Why Choose Us"
            width={500}
            height={300}
            className={styles.responsiveImage}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <ul className={styles.featureList}>
            <li>Extensive market knowledge</li>
            <li>Wide selection of properties</li>
            <li>Experienced and dedicated realtors</li>
            <li>Personalized service tailored to your needs</li>
            <li>Transparent and honest communication</li>
            <li>Efficient and smooth buying/selling process</li>
          </ul>
        </div>
      </article>
      
    </section>
  )
}

export default WhyChooseUs
