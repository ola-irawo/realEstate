import React from 'react'
import styles from "./mission.module.css"
import Image from 'next/image'

const Mission = () => {
  return (
    <section className={styles.aboutUsSection}>
      <article className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-photo/black-businessman-happy-expression_1194-2794.jpg?uid=R174724058&ga=GA1.1.1991276647.1688005309&semt=ais_hybrid"
            alt="Our Mission"
            width={500}
            height={300}
            className={styles.responsiveImage}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionDescription}>
            Our mission is to connect buyers and sellers, making the real estate process seamless and enjoyable for all parties involved. 
            Our dedication is to provide a trusted and reliable environment where buyers and sellers can confidently engage in property 
            transactions, ensuring satisfaction and success for all.
          </p>
        </div>
      </article>
      
    </section>
  )
}

export default Mission
